import { LanguageTexts } from '@/domain/locales/Language';
import { BackgroundAnimatedProduct } from '@/view/components/BackgroundAnimatedProduct';
import { Loader } from '@/view/components/Loader';
import { useScaleFactor } from '@/view/hooks/useScaleFactor';
import { styleLastWord } from '@/view/utils/StyleWord';
import { useWindowSize } from '@/view/utils/useWindowSize';
import classNames from 'classnames';
import { useState } from 'react';
import { MdCheck } from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './product-page.css';
import { useProductPage } from './useProductPage';

export function ProductPage() {
  const { t, cart, product, quantity } = useProductPage();
  const { width } = useWindowSize();
  const { scaleFactor } = useScaleFactor();

  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!product) {
    return <Loader />;
  }

  const handleImageClick = (index: number) => {
    setMainImage(product.images[index]);
    setCurrentIndex(index);
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % product.images.length;
      visibleImages.push(product.images[index]);
    }
    return visibleImages;
  };

  const IS_LARGE_SCREEN = width >= 768;
  const IS_ZOOM_BIGGER_THAN_100 = scaleFactor > 1 && IS_LARGE_SCREEN;

  return (
    <>
      <BackgroundAnimatedProduct />
      <section
        className={classNames(
          'min-h-screen px-10 sm:grid sm:grid-cols-12 sm:px-8',
          IS_ZOOM_BIGGER_THAN_100 && 'pt-20',
          !IS_ZOOM_BIGGER_THAN_100 && 'pt-32',
        )}
      >
        <article className="sm:hidden">
          <h2 className="text-2xl leading-9 text-[#1E1E1E] font-bold dark:text-white">
            {product.name}
          </h2>
          <Slider
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            draggable={true}
            arrows={false}
            dots={true}
            className="pt-4"
          >
            {product.images.map((image, idx) => (
              <div key={idx}>
                <img
                  src={image}
                  alt={`Imagem do Produto ${idx + 1}`}
                  className="w-full"
                />
              </div>
            ))}
          </Slider>
        </article>

        <article
          className={classNames(
            'hidden sm:col-span-8 sm:row-span-2 sm:flex sm:flex-col',
            width > 843 ? 'sm:justify-center' : 'sm:justify-around',
          )}
        >
          <div className="flex justify-around">
            <div className="flex flex-col h-4/5 justify-between">
              {getVisibleImages().map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Imagem do Produto ${index + 1}`}
                  className={classNames(
                    'cursor-pointer border border-solid border-black rounded-md dark:border-white',
                    !IS_ZOOM_BIGGER_THAN_100 && 'w-28',
                    IS_ZOOM_BIGGER_THAN_100 && 'w-20',
                  )}
                  onClick={() =>
                    handleImageClick(
                      (currentIndex + index) % product.images.length,
                    )
                  }
                />
              ))}
            </div>
            <div>
              <img
                src={mainImage ?? product.images[0]}
                alt={`Imagem do Produto Principal`}
                className={classNames(
                  IS_ZOOM_BIGGER_THAN_100 && 'w-[550px]',
                  !IS_ZOOM_BIGGER_THAN_100 && 'w-[800px]',
                )}
              />
              <div className="flex justify-center mt-4">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    className={classNames(
                      'w-3 h-3 mx-2 rounded-full bg-slate-300 dark:bg-gray-500',
                      currentIndex === index && 'bg-slate-500 dark:bg-white',
                    )}
                    onClick={() => handleImageClick(index)}
                    aria-label={`Imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="flex flex-col gap-y-2 sm:col-span-4">
          <h2 className="hidden sm:block text-2xl leading-9 text-[#1E1E1E] font-bold dark:text-white">
            {product.name}
          </h2>
          <div className="pt-12 sm:pt-4 flex items-start">
            <span className="text-xl leading-5 dark:text-white">R$</span>
            <h2 className="text-4xl font-bold leading-5 dark:text-white">
              {product.price.toFixed(2)}
            </h2>
          </div>
          <div className="flex flex-col gap-y-2 pt-2">
            <span className="text-sm dark:text-white">
              Disponível para parcelamento
            </span>
            <span className="text-[#4133FF] text-sm dark:text-[#dad9e6]">
              Ver os métodos de pagamento
            </span>
          </div>
        </article>

        <form className="flex flex-col gap-y-2 pt-6 col-span-4">
          <div className="flex items-center bg-[#D9D9D9] h-12 px-2 py-5 rounded-md gap-x-1 dark:bg-[#242F3F] dark:text-white">
            <label htmlFor="shippingCalculate" className="uppercase text-sm">
              Quantidade:
            </label>
            <input
              type="number"
              id="shippingCalculate"
              value={quantity.value}
              className="bg-transparent text-sm outline-none dark:bg-[#242F3F] dark:text-white dark:border-white"
              onChange={(e) => quantity.set(Number(e.target.value))}
              min={1}
            />
          </div>

          <div className="pt-4 flex gap-x-4 justify-between sm:flex-col sm:h-32 sm:gap-y-2">
            <button
              onClick={cart.buy}
              type="button"
              className="bg-orange-primary text-white p-2 rounded-md text-sm w-36 sm:w-full sm:gap-y-4 h-14"
            >
              Comprar Agora
            </button>
            <button
              type="button"
              onClick={cart.add}
              className=" text-white p-2 rounded-md text-sm h-14 bg-[#242F3F] dark:bg-[#4A5568]"
            >
              {t(LanguageTexts.products.addToCartButton)}
            </button>
          </div>
        </form>

        <div className="py-16 flex flex-col gap-y-6 sm:col-span-12 sm:row-span-12 dark:text-white">
          <h2 className="text-3xl font-bold text-center dark:text-white">
            {styleLastWord(t(LanguageTexts.products.resourcesTitle))}
            <span className="text-orange-primary">{product.name}</span>
          </h2>
          <div className="grid grid-cols-12 gap-6">
            {product.resources.map((resource: string, index: number) => (
              <ul
                key={index}
                className={classNames(
                  'list-none col-span-12',
                  width > 843 && 'sm:flex sm:flex-col sm:items-center',
                )}
              >
                <li className="flex items-center gap-x-4">
                  <MdCheck size={32} className="text-green-700 flex-shrink-0" />
                  <span className="font-medium text-sm dark:text-white">
                    {resource}
                  </span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
