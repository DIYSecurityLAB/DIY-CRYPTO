import ImageBlogKrux from '@/blogContent/1.png';
import bitcoinAposentadoriaimg from '@/view/assets/images/Blogs/BitcoinAposentadoria/image1.jpg';
import bitcoinOnChainELightningImg from '@/view/assets/images/Blogs/BitcoinOnChainLightning/image1.jpg';
import hardwareWalletImg from '@/view/assets/images/Blogs/HardwareWallet/image1.png';
import knowYourCustomerImg from '@/view/assets/images/Blogs/KnowYourCustomer/image1.jpg';
import liquidNetworkImg from '@/view/assets/images/Blogs/LiquidNetwork/image1.png';
import memorizarSeedsImg from '@/view/assets/images/Blogs/MemorizarSeeds/image1.png';
import rendaFixaOuBitcoinImg from '@/view/assets/images/Blogs/RendaFixaOuBitcoin/image1.png';
import Logo from '@/view/assets/logo/logo-simple-black.png';
import { BackgroundAnimatedProduct } from '@/view/components/BackgroundAnimatedProduct';
import { ROUTES } from '@/view/routes/Routes';
import { useCurrentLang } from '@/view/utils/useCurrentLang';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Blogs() {
  const { currentLang } = useCurrentLang();

  return (
    <>
      <BackgroundAnimatedProduct />
      <section className="py-12 px-6 sm:py-24 sm:px-12 md:py-36 md:px-24 w-full flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col flex-1 gap-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src={Logo}
              alt="author"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full"
            />
            <p className="font-medium text-base sm:text-lg md:text-xl ml-4">
              By DIY SEC LAB
            </p>
          </div>
          <Link
            to={ROUTES.blog_old.call(currentLang, 'krux')}
            className="block font-bold text-2xl sm:text-3xl md:text-4xl leading-snug"
          >
            Krux: A melhor Carteira Bitcoin Air Gap e DIY
          </Link>
          <ul className="text-sm flex flex-wrap justify-center md:justify-start items-center space-x-4">
            <li className="flex gap-x-2 items-center">
              <FaClock />
              <span>October 19, 2024 - 3 min read</span>
            </li>
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden flex justify-center mt-6 md:mt-0">
          <Link
            to={ROUTES.blog_old.call(currentLang, 'krux')}
            className="w-3/4"
          >
            <img
              src={ImageBlogKrux}
              alt="feature-post-thumb"
              className="w-full h-auto"
            />
          </Link>
        </div>
      </section>

      <div className="lg:col-span-2 max-w-3xl mx-auto">
        <article className="bg-white dark:bg-slate-700 shadow-md rounded-lg overflow-hidden flex flex-col 2xl:flex-row items-center">
          <Link
            to={ROUTES.blog.call(
              currentLang,
              'bitcoin-pode-subsitituir-a-aposentadoria-tradicional',
            )}
          >
            <img
              className="w-[800px] h-64 object-cover"
              src={bitcoinAposentadoriaimg}
              alt="Blog Post Image"
            />
          </Link>
          <div className="p-6">
            <div className="flex space-x-4 mb-2">
              <a href="#" className="text-blue-500 text-sm">
                #Bitcoin
              </a>
              <a href="#" className="text-blue-500 text-sm">
                #Investimento
              </a>
            </div>
            <h2 className="text-2xl font-bold mb-4">
              <Link
                to={ROUTES.blog.call(
                  currentLang,
                  'bitcoin-pode-subsitituir-a-aposentadoria-tradicional',
                )}
                className="hover:text-blue-600 transition"
              >
                Como o Bitcoin pode substituir a Aposentadoria Tradicional?
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
              <time>December 31, 2024</time>
              <span> - 4 min read</span>
            </div>
            <p className="text-gray-700 dark:text-white mb-4">
              Bitcoin: uma solução para o fim da aposentadoria tradicional,
              oferecendo uma alternativa à inflação e às falhas dos sistemas
              previdenciários.
            </p>
            <Link
              to={ROUTES.blog.call(
                currentLang,
                'bitcoin-pode-subsitituir-a-aposentadoria-tradicional',
              )}
              className="text-blue-500 font-semibold hover:underline"
            >
              Ler Mais
            </Link>
          </div>
        </article>

        <div className="pt-8 pb-16">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-bold mb-4">Mais Recentes</h3>
            <div className="overflow-y-auto space-y-4 max-h-[calc(100vh-150px)]">
              <div className="grid grid-cols-12 bg-white dark:bg-slate-700 shadow-md rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover col-span-2"
                  src={bitcoinAposentadoriaimg}
                  alt="Featured Post Image"
                />
                <Link
                  to={ROUTES.blog.call(
                    currentLang,
                    'bitcoin-pode-subsitituir-a-aposentadoria-tradicional',
                  )}
                  className="w-full h-full flex col-span-10"
                >
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">
                      <span className="hover:text-blue-600 transition">
                        Como o Bitcoin pode substituir a Aposentadoria
                        Tradicional?
                      </span>
                    </h4>
                    <time
                      className="text-sm text-gray-500"
                      dateTime="2023-12-31"
                    >
                      December 31, 2024
                    </time>
                  </div>
                </Link>
              </div>

              <div className="grid grid-cols-12 bg-white dark:bg-slate-700 shadow-md rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover col-span-2"
                  src={knowYourCustomerImg}
                  alt="Featured Post Image"
                />
                <Link
                  to={ROUTES.blog.call(currentLang, 'know-your-customer-kyc')}
                  className="w-full h-full flex col-span-10"
                >
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">
                      <span className="hover:text-blue-600 transition">
                        O que é Know Your Customer (KYC)?
                      </span>
                    </h4>
                    <time
                      className="text-sm text-gray-500"
                      dateTime="2023-12-31"
                    >
                      December 20, 2024
                    </time>
                  </div>
                </Link>
              </div>

              <div className="grid grid-cols-12 bg-white dark:bg-slate-700 shadow-md rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover col-span-2"
                  src={bitcoinOnChainELightningImg}
                  alt="Featured Post Image"
                />
                <Link
                  to={ROUTES.blog.call(
                    currentLang,
                    'Bitcoin-on-chain-e-Lightning-Qual-escolher',
                  )}
                  className="w-full h-full flex col-span-10"
                >
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">
                      <span className="hover:text-blue-600 transition">
                        Bitcoin On-Chain e Lightning: O Futuro das Transações
                      </span>
                    </h4>
                    <time
                      className="text-sm text-gray-500"
                      dateTime="2023-12-15"
                    >
                      December 15, 2024
                    </time>
                  </div>
                </Link>
              </div>

              <div className="grid grid-cols-12 bg-white dark:bg-slate-700 shadow-md rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover col-span-2"
                  src={liquidNetworkImg}
                  alt="Featured Post Image"
                />
                <Link
                  to={ROUTES.blog.call(currentLang, 'O-que-é-a-Liquid-Network')}
                  className="w-full h-full flex col-span-10"
                >
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">
                      <span className="hover:text-blue-600 transition">
                        O que é a Liquid Network e por que é importante para o
                        Bitcoin?
                      </span>
                    </h4>
                    <time
                      className="text-sm text-gray-500"
                      dateTime="2023-12-10"
                    >
                      December 10, 2024
                    </time>
                  </div>
                </Link>
              </div>

              <div className="grid grid-cols-12 bg-white dark:bg-slate-700 shadow-md rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover col-span-2"
                  src={memorizarSeedsImg}
                  alt="Featured Post Image"
                />
                <Link
                  to={ROUTES.blog.call(
                    currentLang,
                    'Como-memorizar-suas-Seeds-de-forma-segura',
                  )}
                  className="w-full h-full flex col-span-10"
                >
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">
                      <span className="hover:text-blue-600 transition">
                        Como Memorizar Suas Seeds de Forma Segura?
                      </span>
                    </h4>
                    <time
                      className="text-sm text-gray-500"
                      dateTime="2023-12-05"
                    >
                      December 5, 2024
                    </time>
                  </div>
                </Link>
              </div>

              <div className="grid grid-cols-12 bg-white dark:bg-slate-700 shadow-md rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover col-span-2"
                  src={hardwareWalletImg}
                  alt="Featured Post Image"
                />
                <Link
                  to={ROUTES.blog.call(
                    currentLang,
                    'Hardware-Wallet-O-que-é-e-quais-são-as-melhores-opções-para-armazenar-Bitcoin',
                  )}
                  className="w-full h-full flex col-span-10"
                >
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">
                      <span className="hover:text-blue-600 transition">
                        A Importância das Carteiras Hardware na Segurança do
                        Bitcoin
                      </span>
                    </h4>
                    <time
                      className="text-sm text-gray-500"
                      dateTime="2023-12-01"
                    >
                      December 1, 2024
                    </time>
                  </div>
                </Link>
              </div>

              <div className="grid grid-cols-12 bg-white dark:bg-slate-700 shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover col-span-2"
                  src={rendaFixaOuBitcoinImg}
                  alt="Featured Post Image"
                />
                <Link
                  to={ROUTES.blog.call(
                    currentLang,
                    'Renda-Fixa-ou-Bitcoin-qual-é-o-melhor-investimento',
                  )}
                  className="w-full h-full flex col-span-10"
                >
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">
                      <span className="hover:text-blue-600 transition">
                        Renda Fixa ou Bitcoin: O que é mais Seguro?
                      </span>
                    </h4>
                    <time
                      className="text-sm text-gray-500"
                      dateTime="2023-11-30"
                    >
                      November 30, 2024
                    </time>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
