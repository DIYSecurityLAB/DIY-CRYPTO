import { BackgroundAnimatedProduct } from '@/view/components/BackgroundAnimatedProduct';
import { useParams } from 'react-router-dom';
import { BitcoinAposentadoria } from './posts/BitcoinAposentadoria';
import { BitcoinOnChainELightning } from './posts/BitcoinOnChainELightning';
import { HardwareWallet } from './posts/HardwareWallet';
import { KnowYourCustomer } from './posts/KnowYourCustomer';
import { LiquidNetwork } from './posts/LiquidNetwork';
import { MemorizarSeeds } from './posts/MemorizarSeeds';
import { RendaFixaOuBitcoin } from './posts/RendaFixaOuBitcoin';

export function Blog() {
  const { id } = useParams();

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
