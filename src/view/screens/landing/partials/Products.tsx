import { LanguageTexts, useLanguage } from '@/domain/locales/Language';
import { BackgroundAnimatedProduct } from '@/view/components/BackgroundAnimatedProduct';
import { ROUTES } from '@/view/routes/Routes';
import { styleFirstWord } from '@/view/utils/StyleWord';
import { useProducts } from '@/view/utils/useProduct';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Products() {
  const { t } = useTranslation();
  const { products } = useProducts();
  const { currentLang } = useLanguage();

  const [currentImageIndexes, setCurrentImageIndexes] = useState<number[]>(
    Array(products.length).fill(0),
  );

  const handleNextImage = (productIndex: number) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[productIndex] =
        newIndexes[productIndex] === products[productIndex].images.length - 1
          ? 0
          : newIndexes[productIndex] + 1;
      return newIndexes;
    });
  };

  const handlePrevImage = (productIndex: number) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[productIndex] =
        newIndexes[productIndex] === 0
          ? products[productIndex].images.length - 1
          : newIndexes[productIndex] - 1;
      return newIndexes;
    });
  };

  return (
    <>
      <BackgroundAnimatedProduct />
      <section className="w-full min-h-screen flex flex-col justify-center items-center gap-y-8 pt-24 pb-10 sm:py-10 p-4 sm:p-16">
        <h2 className="text-4xl text-center font-bold dark:text-white">
          {styleFirstWord(t(LanguageTexts.products.title))}
        </h2>
        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 w-full">
          {products.map(
            (product, idx) =>
              Number(product.id) !== 10000 && (
                <div
                  key={product.id}
                  className="bg-primary-light dark:bg-slate-700 p-8 rounded-lg shadow-xl flex flex-col justify-between"
                >
                  <h1 className="text-center pb-4 font-bold text-xl">
                    {product.name}
                  </h1>
                  <h4 className="text-center pb-1 font-bold text-xl">
                    {product.title}
                  </h4>
                  <div className="flex items-center justify-center relative">
                    <button
                      onClick={() => handlePrevImage(idx)}
                      className="bg-orange-primary text-white p-2 rounded-full absolute left-0 transform -translate-x-1/2"
                    >
                      <FaChevronLeft />
                    </button>

                    <img
                      src={product.images[currentImageIndexes[idx]]}
                      alt={product.name}
                      className="w-full max-w-[300px] h-auto object-contain rounded-md"
                    />

                    <button
                      onClick={() => handleNextImage(idx)}
                      className="bg-orange-primary text-white p-2 rounded-full absolute right-0 transform translate-x-1/2"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                  <p className="dark:text-white my-4 text-gray-700 mb-4 text-center">
                    {product.description}
                  </p>
                  <Link
                    to={ROUTES.cart.product.call(
                      currentLang,
                      product.name,
                      product.id,
                    )}
                    className="w-full font-bold bg-orange-primary text-white text-center py-2 rounded-md hover:bg-orange-600 transition-colors"
                  >
                    {t(LanguageTexts.products.buyNowButton)}
                  </Link>
                </div>
              ),
          )}
        </article>
      </section>
    </>
  );
}
