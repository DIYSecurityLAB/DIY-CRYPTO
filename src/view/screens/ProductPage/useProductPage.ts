import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Items } from '../../../domain/entities/payment.entity';
import { Product } from '../../../domain/entities/Product.entity';
import {
  CalculatedShipping,
  CalculateShipping,
} from '../../../domain/entities/Shipping.entity';
import { UseCases } from '../../../domain/usecases/UseCases';
import { useCartContext } from '../../context/CartContext';
import { ROUTES } from '../../routes/Routes';
import { useCurrentLang } from '../../utils/useCurrentLang';
import { useProducts } from '../../utils/useProduct';

export function useProductPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [shippingOptions, setShippingOptions] = useState<CalculatedShipping[]>(
    [],
  );

  const { t } = useTranslation();
  const { add } = useCartContext();
  const { currentLang } = useCurrentLang();
  const { products, infos } = useProducts();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const navigate = useNavigate();
  const form = useForm<CalculateShipping>();

  const { register, handleSubmit } = form;

  useEffect(() => {
    localStorage.getItem('cartItems');
  }, []);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === id);
    setProduct(selectedProduct || null);
  }, [id, infos, products]);

  const onSubmit: SubmitHandler<CalculateShipping> = async (data) => {
    setLoading(true);
    try {
      if (data.zipcode.length < 8) {
        toast.error('CEP inválido');
        return;
      }

      const requestData: CalculateShipping = {
        zipcode: data.zipcode,
        amount: product?.price || 0,
        skus: [
          {
            price: product?.price || 0,
            quantity: 1,
            length: product?.width || 1,
            width: product?.width || 1,
            height: product?.height || 1,
            weight: product?.weight || 1,
          },
        ],
      };

      const { result } = await UseCases.shipping.calculate.execute(requestData);

      if (result.type === 'ERROR') {
        switch (result.error.code) {
          case 'SERIALIZATION':
            toast.error('ERRO DE SERIALIZAÇÃO!');
            return;
          default:
            toast.error('ERRO DESCONHECIDO');
            return;
        }
      }

      setShippingOptions(result.data);
      console.log('Opções de frete:', result.data);
    } finally {
      setLoading(false);
    }
  };

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
    form,
    product,
    loading,
    register,
    cart: {
      add: handleAddToCart,
      buy: BuyNow,
    },
    quantity: {
      value: quantity,
      set: setQuantity,
    },
    shipping: {
      calculate: handleSubmit(onSubmit),
      options: shippingOptions,
    },
  };
}
