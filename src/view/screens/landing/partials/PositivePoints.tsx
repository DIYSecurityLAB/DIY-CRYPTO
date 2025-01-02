import { LanguageTexts } from '@/domain/locales/Language';
import PositivePoints1 from '@/view/assets/images/positive-points/positive-points-1.png';
import PositivePoints2 from '@/view/assets/images/positive-points/positive-points-2.png';
import PositivePoints3 from '@/view/assets/images/positive-points/positive-points-3.png';
import PositivePoints4 from '@/view/assets/images/positive-points/positive-points-4.png';
import { useScaleFactor } from '@/view/hooks/useScaleFactor';
import { styleThreeWordsAfterFourth } from '@/view/utils/StyleWord';
import { useWindowSize } from '@/view/utils/useWindowSize';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

export function PositivePoints() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { width } = useWindowSize();
  const { scaleFactor } = useScaleFactor();

  const isMobile = width < 640;
  const cardWidth = isMobile
    ? '100%'
    : `${Math.max(100 / (4 * scaleFactor), 20)}%`;

  const IS_LARGE_SCREEN = width >= 768;
  const IS_ZOOM_BIGGER_THAN_100 = scaleFactor > 1 && IS_LARGE_SCREEN;

  return (
    <section className="w-full min-h-screen px-4 sm:px-8 bg-slate-800 dark:bg-primary-light flex flex-col justify-start items-center">
      <article
        ref={ref}
        className={classNames(
          'w-full flex items-start justify-center pt-16 transition-opacity duration-500',
        )}
      >
        <h2
          className={classNames(
            'text-4xl  text-center text-white dark:text-black font-bold whitespace-pre-wrap break-words max-w-4xl',
            inView && 'opacity-100 animate-fade-right',
            !inView && 'opacity-0',
            !IS_ZOOM_BIGGER_THAN_100 && 'md:text-6xl',
          )}
        >
          {styleThreeWordsAfterFourth(t(LanguageTexts.positivePoints.title))}
        </h2>
      </article>

      <article className="w-full sm:pt-32 flex flex-wrap justify-around gap-y-4 md:p-14">
        {[
          {
            image: PositivePoints1,
            titleKey: LanguageTexts.positivePoints.cards.mentality,
          },
          {
            image: PositivePoints2,
            titleKey: LanguageTexts.positivePoints.cards.protocols,
          },
          {
            image: PositivePoints3,
            titleKey: LanguageTexts.positivePoints.cards.transparency,
          },
          {
            image: PositivePoints4,
            titleKey: LanguageTexts.positivePoints.cards.security,
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={classNames(
              'bg-primary-light  w-full rounded-md shadow-sm flex flex-col justify-center items-center m-4 p-4 dark:border',
              'sm:w-60 md:w-64 lg:w-72 ',
              inView && 'opacity-100 animate-fade-right',
              !IS_ZOOM_BIGGER_THAN_100 && 'h-72 md:p-6 lg:p-8',
              IS_ZOOM_BIGGER_THAN_100 && 'md:p-5 lg:p-7',
            )}
            style={{ width: scaleFactor > 1 ? cardWidth : '' }}
          >
            <img
              src={item.image}
              alt={t(item.titleKey)}
              className="w-2/3 sm:w-40 md:w-44 lg:w-2/3 max-h-48"
            />

            <span className="text-xl text-center text-black font-bold">
              {t(item.titleKey)}
            </span>
          </div>
        ))}
      </article>
    </section>
  );
}
