import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { FaBitcoin } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import {
  AcceptedLanguages,
  LanguageTexts,
  useLanguage,
} from '@/domain/locales/Language';
import HeroImage from '@/view/assets/images/hero-image1.png';
import { BackgroundAnimated } from '@/view/components/BackgroundAnimated';
import { useScaleFactor } from '@/view/hooks/useScaleFactor';
import { ROUTES } from '@/view/routes/Routes';
import { styleFirstWord } from '@/view/utils/StyleWord';
import { useWindowSize } from '@/view/utils/useWindowSize';

export function Hero() {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1 });

  const { width } = useWindowSize();
  const { scaleFactor } = useScaleFactor();

  const IS_LARGE_SCREEN = width >= 768;
  const IS_ZOOM_BIGGER_THAN_100 = scaleFactor > 1 && IS_LARGE_SCREEN;

  return (
    <>
      <BackgroundAnimated />
      <section
        ref={ref}
        className="grid grid-cols-12 px-6 sm:px-4 md:px-8 h-screen"
      >
        <article className="h-full col-span-12 md:col-span-6 flex flex-col gap-y-6 justify-center items-center">
          <h1
            className={classNames(
              'max-w-2xl text-4xl text-center font-bold whitespace-pre-wrap break-words animate-fade-right animate-once animate-duration-500 animate-delay-300',
              IS_ZOOM_BIGGER_THAN_100 && 'md:text-5xl',
              !IS_ZOOM_BIGGER_THAN_100 && 'md:text-6xl',
            )}
          >
            {styleFirstWord(t(LanguageTexts.hero.title))}
          </h1>
          <p
            className={classNames(
              'max-w-2xl text-base text-center font-semibold animate-flip-up animate-once',
              !IS_ZOOM_BIGGER_THAN_100 && 'md:text-lg',
            )}
          >
            {t(LanguageTexts.hero.description)}
          </p>
          <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-4">
            <Link
              to={ROUTES.products.call(currentLang || AcceptedLanguages.pt)}
              className={classNames(
                'w-full bg-orange-primary text-white text-center font-semibold rounded-sm transition-colors duration-300 hover:bg-orange-600 shadow-md',
                IS_ZOOM_BIGGER_THAN_100 &&
                  'py-2 flex items-center justify-center',
                !IS_ZOOM_BIGGER_THAN_100 && 'py-4',
              )}
            >
              {t(LanguageTexts.hero.buttons.products)}
            </Link>

            <a
              href="https://www.alfredp2p.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-x-2 py-4 bg-blue-500 rounded-sm transition-colors duration-300 hover:bg-blue-600 shadow-md"
            >
              <FaBitcoin size={24} className="text-white" />
              <span className="text-white font-semibold">
                {t(LanguageTexts.hero.buttons.buybitcoin)}
              </span>
            </a>
          </div>
        </article>
        <article className="hidden md:flex h-full col-span-12 md:col-span-6 flex-col gap-y-4 justify-center items-center">
          <img
            src={HeroImage}
            alt="NFT/Crypto Image"
            className={classNames(
              'w-[950px]',
              inView && 'opacity-100 animate-fade-right',
              !inView && 'opacity-0',
            )}
          />
        </article>
      </section>
    </>
  );
}
