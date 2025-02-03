import { BackgroundAnimatedProduct } from '@/view/components/BackgroundAnimatedProduct';
import { ROUTES } from '@/view/routes/Routes';
import { useCurrentLang } from '@/view/utils/useCurrentLang';
import { FaClock } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../Blogs/Blogs';
import { BitcoinAposentadoria } from './posts/BitcoinAposentadoria';
import { BitcoinOnChainELightning } from './posts/BitcoinOnChainELightning';
import { HardwareWallet } from './posts/HardwareWallet';
import { KnowYourCustomer } from './posts/KnowYourCustomer';
import { LiquidNetwork } from './posts/LiquidNetwork';
import { MemorizarSeeds } from './posts/MemorizarSeeds';
import { RendaFixaOuBitcoin } from './posts/RendaFixaOuBitcoin';

function getRandomPosts(posts: typeof blogPosts, count: number) {
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const recommendedPosts = getRandomPosts(blogPosts, 2);

export function Blog() {
  const { id } = useParams();
  const { currentLang } = useCurrentLang();

  return (
    <>
      <BackgroundAnimatedProduct />

      {id === 'bitcoin-pode-subsitituir-a-aposentadoria-tradicional' && (
        <BitcoinAposentadoria />
      )}
      {id === 'know-your-customer-kyc' && <KnowYourCustomer />}
      {id === 'Bitcoin-on-chain-e-Lightning-Qual-escolher' && (
        <BitcoinOnChainELightning />
      )}
      {id === 'O-que-é-a-Liquid-Network' && <LiquidNetwork />}
      {id === 'Como-memorizar-suas-Seeds-de-forma-segura' && <MemorizarSeeds />}
      {id ===
        'Hardware-Wallet-O-que-é-e-quais-são-as-melhores-opções-para-armazenar-Bitcoin' && (
        <HardwareWallet />
      )}
      {id === 'Renda-Fixa-ou-Bitcoin-qual-é-o-melhor-investimento' && (
        <RendaFixaOuBitcoin />
      )}

      {/* Posts Recomendados */}
      <section className="mt-12 max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-6">
          Você também pode gostar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recommendedPosts.map((post, index) => (
            <Link
              key={index}
              to={ROUTES.blog.call(currentLang, post.route)}
              className="block bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">
                  {post.title}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-2">
                  <FaClock /> <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Botão "Ver mais blogs" */}
      <div className="mt-12 flex justify-center">
        <Link
          to={ROUTES.blogs.call(currentLang)}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Ver todos os blogs
        </Link>
      </div>
    </>
  );
}

/**
 *
 *
 * <section>
        {content ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <Loader />
        )}
      </section>
 */
