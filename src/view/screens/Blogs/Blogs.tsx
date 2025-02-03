import ImageBlogKrux from '@/blogContent/1.png';
import bitcoinAposentadoriaimg from '@/view/assets/images/Blogs/BitcoinAposentadoria/image1.jpg';
import bitcoinOnChainELightningImg from '@/view/assets/images/Blogs/BitcoinOnChainLightning/image1.jpg';
import hardwareWalletImg from '@/view/assets/images/Blogs/HardwareWallet/image1.png';
import knowYourCustomerImg from '@/view/assets/images/Blogs/KnowYourCustomer/image1.jpg';
import liquidNetworkImg from '@/view/assets/images/Blogs/LiquidNetwork/image1.png';
import memorizarSeedsImg from '@/view/assets/images/Blogs/MemorizarSeeds/image1.png';
import rendaFixaOuBitcoinImg from '@/view/assets/images/Blogs/RendaFixaOuBitcoin/image1.png';
import { BackgroundAnimatedProduct } from '@/view/components/BackgroundAnimatedProduct';
import { ROUTES } from '@/view/routes/Routes';
import { useCurrentLang } from '@/view/utils/useCurrentLang';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const featuredPosts = [
  {
    title: 'Krux: A melhor Carteira Bitcoin Air Gap e DIY',
    image: ImageBlogKrux,
    route: 'krux',
    date: 'October 19, 2024',
    timeToRead: '3 min read',
    isOld: true,
  },
  {
    title: 'Como o Bitcoin pode substituir a Aposentadoria Tradicional?',
    image: bitcoinAposentadoriaimg,
    route: 'bitcoin-pode-subsitituir-a-aposentadoria-tradicional',
    date: 'December 31, 2024',
    isOld: false,
  },
];

export const blogPosts = [
  {
    title: 'O que é Know Your Customer (KYC)?',
    image: knowYourCustomerImg,
    route: 'know-your-customer-kyc',
    date: 'December 20, 2024',
  },
  {
    title: 'Bitcoin On-Chain e Lightning: O Futuro das Transações',
    image: bitcoinOnChainELightningImg,
    route: 'Bitcoin-on-chain-e-Lightning-Qual-escolher',
    date: 'December 15, 2024',
  },
  {
    title: 'O que é a Liquid Network e por que é importante para o Bitcoin?',
    image: liquidNetworkImg,
    route: 'O-que-é-a-Liquid-Network',
    date: 'December 10, 2024',
  },
  {
    title: 'Como Memorizar Suas Seeds de Forma Segura?',
    image: memorizarSeedsImg,
    route: 'Como-memorizar-suas-Seeds-de-forma-segura',
    date: 'December 5, 2024',
  },
  {
    title: 'A Importância das Carteiras Hardware na Segurança do Bitcoin',
    image: hardwareWalletImg,
    route:
      'Hardware-Wallet-O-que-é-e-quais-são-as-melhores-opções-para-armazenar-Bitcoin',
    date: 'December 1, 2024',
  },
  {
    title: 'Renda Fixa ou Bitcoin: O que é mais Seguro?',
    image: rendaFixaOuBitcoinImg,
    route: 'Renda-Fixa-ou-Bitcoin-qual-é-o-melhor-investimento',
    date: 'November 30, 2024',
  },
];

export function Blogs() {
  const { currentLang } = useCurrentLang();

  return (
    <>
      <BackgroundAnimatedProduct />
      <section className="py-12 px-6 sm:py-24 sm:px-12 md:py-36 md:px-24 w-full flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Bem-vindo ao nosso Blog!
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Explore conteúdos exclusivos sobre Bitcoin e segurança digital.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <Link
              key={index}
              to={
                post.isOld
                  ? ROUTES.blog_old.call(currentLang, post.route)
                  : ROUTES.blog.call(currentLang, post.route)
              }
              className="relative group block bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <h2 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition">
                  {post.title}
                </h2>
                <div className="text-sm text-gray-300 flex items-center gap-2 mt-2">
                  <FaClock /> <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={ROUTES.blog.call(currentLang, post.route)}
              className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">
                  {post.title}
                </h2>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <FaClock /> <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
