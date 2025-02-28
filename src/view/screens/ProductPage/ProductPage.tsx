import {
  AcceptedLanguages,
  LanguageTexts,
  useLanguage,
} from '@/domain/locales/Language';
import { BackgroundAnimatedProduct } from '@/view/components/BackgroundAnimatedProduct';
import { Loader } from '@/view/components/Loader';
import { useScaleFactor } from '@/view/hooks/useScaleFactor';
import { ROUTES } from '@/view/routes/Routes';
import { useWindowSize } from '@/view/utils/useWindowSize';
import classNames from 'classnames';
import { useState } from 'react';
import { MdCheck, MdExpandLess, MdExpandMore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './product-page.css';
import { useProductPage } from './useProductPage';

export function ProductPage() {
  const { t, cart, product, quantity } = useProductPage();
  const { width } = useWindowSize();
  const { scaleFactor } = useScaleFactor();
  const { currentLang } = useLanguage();

  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

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
  const isAvailable = product.available;

  const discountPercentage = product.originalPrice
    ? ((product.originalPrice - product.price) / product.originalPrice) * 100
    : 0;

  const replaceAlfredP2P = (text: string) => {
    return text.split('Alfred P2P').map((part, index) =>
      index === 1 ? (
        <>
          <a
            href="https://www.alfredp2p.io/pt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Alfred P2P
          </a>
          {part}
        </>
      ) : (
        part
      ),
    );
  };

  return (
    <>
      <BackgroundAnimatedProduct />
      <section
        className={classNames(
          'min-h-screen px-10 lg:grid lg:grid-cols-12 lg:px-8',
          IS_ZOOM_BIGGER_THAN_100 && 'pt-20',
          !IS_ZOOM_BIGGER_THAN_100 && 'pt-28',
        )}
      >
        <article className="lg:hidden">
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
            'hidden lg:col-span-8 lg:row-span-2 lg:flex lg:flex-col',
            width > 843 ? 'lg:justify-center' : 'lg:justify-around',
          )}
        >
          <div className="flex justify-around">
            <div className="flex flex-col h-full xl:h-4/5 justify-between">
              {getVisibleImages().map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Imagem do Produto ${index + 1}`}
                  className={classNames(
                    'cursor-pointer border border-solid border-black rounded-md dark:border-white',
                    !IS_ZOOM_BIGGER_THAN_100 && 'w-20 xl:w-28',
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
                  !IS_ZOOM_BIGGER_THAN_100 && 'w-[400px] xl:w-[800px]',
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

        <article className="flex flex-col justify-center gap-y-2 lg:col-span-4">
          <h2 className="hidden lg:block text-2xl leading-9 text-[#1E1E1E] font-bold dark:text-white">
            {product.name}
          </h2>
          {product.available ? (
            <>
              <div className="pt-12 lg:pt-4 flex flex-col items-start">
                {product.originalPrice && (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-xl text-gray-500 line-through dark:text-gray-400">
                        R$ {product.originalPrice.toFixed(2)}
                      </span>
                      <div className="bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                        {discountPercentage.toFixed(0)}% OFF
                      </div>
                    </div>
                    <div className="flex items-baseline mt-4">
                      <span className="text-xl leading-5 dark:text-white">
                        R$
                      </span>
                      <h2 className="text-4xl font-bold leading-5 dark:text-white">
                        {product.price.toFixed(2)}
                      </h2>
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-col gap-y-2 pt-2">
                <span className="text-sm dark:text-white">
                  Disponível para parcelamento
                </span>
                <span className="text-[#4133FF] text-sm dark:text-[#dad9e6]">
                  métodos de pagamento: Bitcoin | Crédito | PIX
                </span>
              </div>
              <div
                className={classNames(
                  'mt-6 p-4 border rounded-md transition-all ease-in-out duration-300 relative',
                  width < 768 && 'cursor-pointer',

                  'bg-gray-900 dark:bg-[#1A202C] dark:border-gray-700',
                  'bg-white dark:bg-[#2D3748] border-gray-300 dark:border-gray-600',
                )}
                onClick={() => width < 768 && setIsExpanded(!isExpanded)}
              >
                <h3
                  className={classNames(
                    'text-xl font-semibold',
                    currentLang === AcceptedLanguages.pt &&
                      'text-black dark:text-white',
                  )}
                >
                  O que vem em nosso produto:
                </h3>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                  className={classNames(
                    'absolute right-4 top-2 text-5xl',
                    isExpanded ? 'text-blue-500' : 'text-black',
                    currentLang === AcceptedLanguages.pt &&
                      'text-black dark:text-white',
                  )}
                >
                  {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                </button>

                <ul className={classNames('pt-2', !isExpanded && 'hidden')}>
                  {product.resources.map((resource, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <MdCheck size={20} className="text-green-700" />
                      {replaceAlfredP2P(resource)}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-y-4 text-center mt-8">
              <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">
                Produto Esgotado
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Este produto está temporariamente indisponível. Confira outros
                produtos incríveis em nosso catálogo!
              </p>
              <Link
                to={ROUTES.products.call(currentLang || AcceptedLanguages.pt)}
                className={classNames(
                  'w-full bg-orange-primary text-white text-center font-semibold rounded-sm transition-colors duration-300 hover:bg-orange-600 shadow-md',
                  IS_ZOOM_BIGGER_THAN_100 &&
                    'py-2 flex items-center justify-center',
                  !IS_ZOOM_BIGGER_THAN_100 && 'py-4',
                )}
              >
                Ver Mais Produtos
              </Link>
            </div>
          )}
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
              disabled={!isAvailable}
            />
          </div>

          <div className="pt-4 flex gap-x-4 justify-between lg:flex-col lg:h-32 lg:gap-y-2">
            <button
              onClick={cart.buy}
              type="button"
              className="bg-orange-primary text-white p-2 rounded-md text-sm w-36 lg:w-full lg:gap-y-4 h-14"
              disabled={!isAvailable}
            >
              Comprar Agora
            </button>
            <button
              type="button"
              onClick={cart.add}
              className="text-white p-2 rounded-md text-sm h-14 bg-[#242F3F] dark:bg-[#4A5568]"
              disabled={!isAvailable}
            >
              {t(LanguageTexts.products.addToCartButton)}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
