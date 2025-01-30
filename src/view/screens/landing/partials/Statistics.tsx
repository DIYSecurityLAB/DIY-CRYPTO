import { LanguageTexts } from '@/domain/locales/Language';
import StatisticsImage from '@/view/assets/images/Statistics/Statistics.jpg';
import { useScaleFactor } from '@/view/hooks/useScaleFactor';
import { useWindowSize } from '@/view/utils/useWindowSize';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

type Info = {
  title: string;
  description: string;
};

export function Statistics() {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const { scaleFactor } = useScaleFactor();

  const negativeMarginTop =
    width <= 1200
      ? 'mt-0'
      : scaleFactor === 1
        ? '-mt-64'
        : `${-Math.min(128 * scaleFactor, 128)}px`;

  const IS_LARGE_SCREEN = width >= 768;
  const IS_ZOOM_BIGGER_THAN_100 = scaleFactor > 1 && IS_LARGE_SCREEN;

  const infos = t(LanguageTexts.statistics.infos, {
    returnObjects: true,
  }) as Info[];

  return (
    <div id="statistics" className="relative flex flex-col pb-6">
      <div className="bg-primary-dark w-full py-12 px-6 sm:px-4 md:px-8 z-10 min-h-[80vh]">
        <section className="flex flex-col gap-y-10">
          <article
            className={classNames(
              'w-full flex justify-center ',
              !IS_ZOOM_BIGGER_THAN_100 && 'pt-12',
            )}
          >
            <h3
              className={classNames(
                'max-w-2xl text-center font-bold text-white whitespace-pre-wrap break-words',
                IS_ZOOM_BIGGER_THAN_100 && 'text-3xl',
                !IS_ZOOM_BIGGER_THAN_100 && 'text-4xl',
              )}
            >
              {t(LanguageTexts.statistics.title)}
            </h3>
          </article>
          <article className="flex flex-wrap justify-around gap-y-4 pb-32 md:pb-0">
            {infos.map((info, index) => (
              <div key={index}>
                <h4
                  className={classNames(
                    'text-center text-white font-bold ',
                    !IS_ZOOM_BIGGER_THAN_100 && 'text-xl',
                    IS_ZOOM_BIGGER_THAN_100 && 'text-lg',
                  )}
                >
                  {info.title}
                </h4>
                <p
                  className={classNames(
                    'text-center text-white',
                    !IS_ZOOM_BIGGER_THAN_100 && 'text-xl',
                    IS_ZOOM_BIGGER_THAN_100 && 'text-lg',
                  )}
                >
                  {info.description}
                </p>
              </div>
            ))}
          </article>
        </section>
      </div>

      <div
        className={`w-full flex justify-center z-20 ${scaleFactor === 1 && negativeMarginTop}`}
        style={scaleFactor !== 1 ? { marginTop: negativeMarginTop } : {}}
      >
        <img
          src={StatisticsImage}
          alt="Estatísticas"
          className="w-2/3 lg:w-1/3 object-cover relative z-20 top-15"
        />
      </div>
    </div>
  );
}
