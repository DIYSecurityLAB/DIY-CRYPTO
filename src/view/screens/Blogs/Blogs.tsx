import ImageBlogKrux from '@/blogContent/1.png';
import { BackgroundAnimatedProduct } from '@/view/components/BackgroundAnimatedProduct';
// import { Newsletter } from '../landing/partials/Newsletter/Newsletter';
import Logo from '@/view/assets/logo/logo-simple-black.png';
import { ROUTES } from '@/view/routes/Routes';
import { useCurrentLang } from '@/view/utils/useCurrentLang';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Blogs() {
  const { currentLang } = useCurrentLang();

  return (
    <>
      <BackgroundAnimatedProduct />
      <section className="py-36 px-44 w-full flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col flex-1 gap-y-2">
          <div className="flex items-center">
            <img src={Logo} alt="author" className="w-20 h-20 rounded-full" />

            <p className="font-medium text-lg sm:text-xl">
              By <span className="text-gray-900">DIY SEC LAB</span>
            </p>
          </div>
          <Link
            to={ROUTES.blog.callLang(currentLang, 'krux')}
            className="block text-gray-900 font-bold text-4xl leading-snug"
          >
            Krux: A melhor Carteira Bitcoin Air Gap e DIY
          </Link>
          <ul className="text-sm text-gray-600 flex items-center space-x-4">
            <li className="flex gap-x-2 items-center">
              <FaClock />
              October 19, 2024 - 3 min read
            </li>
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden flex justify-center">
          <Link
            to={ROUTES.blog.callLang(currentLang, 'krux')}
            className="w-3/4"
          >
            <img src={ImageBlogKrux} alt="feature-post-thumb" />
          </Link>
        </div>
      </section>
      <div className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col 2xl:flex-row items-center">
                <Link to={ROUTES.blog.callLang(currentLang, 'krux')}>
                  <img
                    className="w-[800px] h-64 object-cover"
                    src={ImageBlogKrux}
                    alt="Blog Post Image"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex space-x-4 mb-2">
                    <a href="#" className="text-blue-500 text-sm">
                      #Krux
                    </a>
                    <a href="#" className="text-blue-500 text-sm">
                      #AutoCustodia
                    </a>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">
                    <Link
                      to={ROUTES.blog.callLang(currentLang, 'krux')}
                      className="hover:text-blue-600 transition"
                    >
                      Krux: A melhor Carteira Bitcoin Air Gap e DIY
                    </Link>
                  </h2>
                  <div className="text-sm text-gray-500 mb-4">
                    <span>
                      By{' '}
                      <a href="#" className="text-blue-500">
                        DIY SEC LAB
                      </a>
                    </span>
                    <span> - </span>
                    <time>October 19, 2024</time>
                    <span> - 3 min read</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Uma carteira Bitcoin que te permite ter o maior nível de
                    customização e segurança...
                  </p>
                  <Link
                    to={ROUTES.blog.callLang(currentLang, 'krux')}
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    Ler Mais
                  </Link>
                </div>
              </article>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Mais Recentes</h3>
              <div className="space-y-4">
                <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    className="w-24 h-24 object-cover"
                    src="https://via.placeholder.com/100x100"
                    alt="Featured Post Image"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">
                      <a href="#" className="hover:text-blue-600 transition">
                        Featured Post Title
                      </a>
                    </h4>
                    <time
                      className="text-sm text-gray-500"
                      dateTime="2023-12-31"
                    >
                      December 31, 2023
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <main className="min-h-screen w-full flex flex-col gap-y-4 px-16 justify-center">
        <Newsletter />
        <h2 className="font-semibold">Blogs Recém Postados</h2>
        <div className="grid grid-cols-12 w-full">
          <section className="col-span-6">
            <article className="w-[600px] flex flex-col gap-y-2">
              <img
                src={ImageBlogKrux}
                alt="ImageBlogKrux"
                className="w-full bg-white"
              />
              <span className="font-semibold">DIY SEC LAB - 01/12/2024</span>
              <h3 className="font-bold text-lg">
                Krux: A melhor Carteira Bitcoin Air Gap e DIY
              </h3>
              <p className="text-justify">
                Uma carteira Bitcoin que te permite ter o maior nível de
                customização e segurança
              </p>
            </article>
          </section>
          <section className="col-span-6 flex flex-col">
            <article className="w-[600px] flex flex-col gap-y-2">
              <img
                src={ImageBlogKrux}
                alt="ImageBlogKrux"
                className="w-full bg-white"
              />
              <span className="font-semibold">DIY SEC LAB - 01/12/2024</span>
              <h3 className="font-bold text-lg">
                Krux: A melhor Carteira Bitcoin Air Gap e DIY
              </h3>
              <p className="text-justify">
                Uma carteira Bitcoin que te permite ter o maior nível de
                customização e segurança
              </p>
            </article>
          </section>
        </div>
      </main> */}
    </>
  );
}
