import { LanguageTexts } from '@/domain/locales/Language';
import image2 from '@/view/assets/images/about/IMG_2721.jpg';
import image1 from '@/view/assets/images/about/IMG_2724.jpg';
import { BackgroundAnimatedProduct } from '@/view/components/BackgroundAnimatedProduct';
import { useScaleFactor } from '@/view/hooks/useScaleFactor';
import { useWindowSize } from '@/view/utils/useWindowSize';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export function About() {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const { scaleFactor } = useScaleFactor();

  const images = [{ src: image1 }, { src: image2 }];

  const IS_LARGE_SCREEN = width >= 768;
  const IS_ZOOM_BIGGER_THAN_100 = scaleFactor > 1 && IS_LARGE_SCREEN;

  return (
    <>
      <BackgroundAnimatedProduct />
      <section
        className="grid grid-cols-1 md:grid-cols-12 px-8 md:px-16 min-h-screen pt-36 md:pt-0"
        style={{
          paddingTop: IS_ZOOM_BIGGER_THAN_100 ? '8rem' : '9rem',
        }}
      >
        <article
          className={classNames(
            'h-full col-span-full md:col-span-6 flex flex-col gap-y-6 items-center md:items-start  px-12 md:px-0',
            IS_ZOOM_BIGGER_THAN_100 && 'justify-start',
            !IS_ZOOM_BIGGER_THAN_100 && 'justify-center',
          )}
        >
          <h3
            className={classNames(
              'text-center md:text-left font-bold text-lg ',
              IS_ZOOM_BIGGER_THAN_100 && 'md:text-2xl',
              !IS_ZOOM_BIGGER_THAN_100 && 'md:text-3xl',
            )}
          >
            {t(LanguageTexts.about.title)}
          </h3>
          <span
            className={classNames(
              'text-center font-semibold text-base ',
              IS_ZOOM_BIGGER_THAN_100 && 'md:text-xl',
              !IS_ZOOM_BIGGER_THAN_100 && 'md:text-2xl',
            )}
          >
            {t(LanguageTexts.about.subtitle)}
          </span>
          <div className="w-full md:w-4/5 mt-4">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              className="relative rounded-lg shadow-lg"
              style={
                {
                  '--swiper-navigation-color': '#999',
                  '--swiper-navigation-size': '20px',
                  '--swiper-pagination-bullet-color': '#ccc',
                  '--swiper-pagination-bullet-opacity': '0.6',
                } as React.CSSProperties
              }
            >
              {images.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={image.src}
                    className="w-full h-72 object-cover rounded-lg"
                    style={{ aspectRatio: '1/1' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </article>
        <article className="h-full col-span-full md:col-span-6 flex flex-col gap-y-4 items-center md:items-start justify-center py-6 md:px-6">
          <div className="w-full max-w-4xl">
            <h2
              className={classNames(
                'text-2xl font-bold pb-6',
                IS_ZOOM_BIGGER_THAN_100 && 'text-xl',
              )}
            >
              O que é a DIY Security Lab?
            </h2>
            <p
              className={classNames(
                'pb-6',
                IS_ZOOM_BIGGER_THAN_100 && 'text-sm',
              )}
            >
              A DIY Security Lab é uma empresa focada em soluções que promovem a
              adoção do Bitcoin, removendo intermediários e empoderando o
              usuário final. Criamos o BITKIT, o método mais seguro e simples de
              armazenar Bitcoins, e o Alfred P2P, uma plataforma para compra
              descentralizada e anônima. Nossa missão é garantir que todos
              possam controlar seus próprios ativos de forma segura e
              independente, contribuindo para um futuro financeiro mais livre e
              descentralizado.
            </p>

            <h2
              className={classNames(
                'text-2xl font-bold pb-6',
                IS_ZOOM_BIGGER_THAN_100 && 'text-xl',
              )}
            >
              Fundadores
            </h2>
            <p
              className={classNames(
                IS_ZOOM_BIGGER_THAN_100 && 'text-sm',
                !IS_ZOOM_BIGGER_THAN_100 && 'pb-6',
              )}
            >
              A DIY Security Lab foi fundada em 2024 por três engenheiros
              apaixonados por finanças descentralizadas, que iniciaram seus
              estudos no mercado cripto em 2017. Leonardo Maximiliano, CEO, é
              fascinado por macroeconomia e pelos impactos sociais que o Bitcoin
              pode gerar em diferentes estruturas sociais. Guilherme, com seu
              foco em gestão de negócios e empreendedorismo, busca
              constantemente inovações disruptivas. Giovanni, o "nerd da
              tecnologia", transforma ideias em soluções técnicas avançadas.
              Juntos, eles se complementam para criar soluções que promovem a
              adoção do Bitcoin, empoderando o usuário final e eliminando
              intermediários.
            </p>
          </div>
          <p
            className={classNames(
              'text-center md:text-left font-semibold text-base md:text-lg',
              !IS_ZOOM_BIGGER_THAN_100 && 'mt-8',
            )}
          >
            {t(LanguageTexts.about.signature)}
          </p>
        </article>
      </section>
    </>
  );
}
