import { BackgroundAnimatedProduct } from '@/view/components/BackgroundAnimatedProduct';
import { useParams } from 'react-router-dom';
import { BitcoinAposentadoria } from './posts/Bitcoin-Aposentadoria';

export function Blog() {
  const { id } = useParams();

  return (
    <>
      <BackgroundAnimatedProduct />
      {id === 'bitcoin-pode-subsitituir-a-aposentadoria-tradicional' && (
        <BitcoinAposentadoria />
      )}
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
