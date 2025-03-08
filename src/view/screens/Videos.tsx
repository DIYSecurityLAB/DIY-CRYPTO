import { useTranslation } from 'react-i18next';
import { BackgroundAnimatedProduct } from '../components/BackgroundAnimatedProduct';

export function VideosPage() {
  const { t } = useTranslation();

  const videos = [
    {
      id: 1,
      title: t('videos.items.1.title'),
      videoSrc: t('videos.items.1.videoSrc'),
    },
    {
      id: 2,
      title: t('videos.items.2.title'),
      videoSrc: t('videos.items.2.videoSrc'),
    },
    {
      id: 3,
      title: t('videos.items.3.title'),
      videoSrc: t('videos.items.3.videoSrc'),
    },
    {
      id: 4,
      title: t('videos.items.4.title'),
      videoSrc: t('videos.items.4.videoSrc'),
    },
    {
      id: 5,
      title: t('videos.items.5.title'),
      videoSrc: t('videos.items.5.videoSrc'),
    },
  ];

  return (
    <>
      <BackgroundAnimatedProduct />
      <div className="min-h-screen pt-20 px-8">
        <article className="p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-orange-primary dark:text-white">
            {t('videos.title')}
          </h1>
          <p className="text-lg md:text-xl text-center uppercase text-gray-700 dark:text-gray-300">
            {t('videos.description')}
          </p>
        </article>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex flex-col gap-y-4 items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h2 className="text-text-primary-light dark:text-text-primary-dark font-semibold text-lg sm:text-base text-center pt-4">
                {video.title}
              </h2>
              <iframe
                width="100%"
                height="180"
                src={video.videoSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
