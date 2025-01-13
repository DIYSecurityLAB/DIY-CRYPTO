import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Items } from '../../../domain/entities/payment.entity';
import { Product } from '../../../domain/entities/Product.entity';
import { useCartContext } from '../../context/CartContext';
import { ROUTES } from '../../routes/Routes';
import { useCurrentLang } from '../../utils/useCurrentLang';
import { useProducts } from '../../utils/useProduct';

export function useProductPage() {
  const [product, setProduct] = useState<Product | null>(null);

  const { t } = useTranslation();
  const { add } = useCartContext();
  const { currentLang } = useCurrentLang();
  const { products, infos } = useProducts();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem('cartItems');
  }, []);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === id);
    setProduct(selectedProduct || null);
  }, [id, infos, products]);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
      const productToAdd: Items = {
        id: product.id,
        name: product.name,
        title: product.title,
        price: product.price,
        quantity,
        imageUrl: product.images[0],
        categoryId: product.name,
        description: product.description,
        Yampi_Product_id: product.Yampi_Product_id,
        sku: product.sku,
        sku_id: product.sku_id,
        length: product.length,
        width: product.width,
        height: product.height,
        weight: product.weight,
      };

      add(productToAdd);
    }

    toast.success('Produto adicionado com sucesso!');
    return;
  };

  function BuyNow() {
    handleAddToCart();

    navigate(ROUTES.cart.call(currentLang));
  }

  return {
    t,
    product,
    cart: {
      add: handleAddToCart,
      buy: BuyNow,
    },
    quantity: {
      value: quantity,
      set: setQuantity,
    },
  };
}
