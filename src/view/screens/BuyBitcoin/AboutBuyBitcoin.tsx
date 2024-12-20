import { BackgroundAnimatedProduct } from '../../components/BackgroundAnimatedProduct';
import WhatsAppButton from '../../components/buttonWhatsApp';
import HeaderAlfred from './HeaderAlfred';

export function AboutBuyBitcoin() {
  return (
    <>
      <BackgroundAnimatedProduct />
      <HeaderAlfred />
      <div className="container mx-auto p-6 mt-[20%] sm:mt-[10%]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Sobre
          </h1>
        </div>
        <div className="text-black dark:text-white space-y-6">
          <p>
            Somos uma família deconstruindo um ecossistema P2P, sem KYC, para
            ser usado por qualquer um, em qualquer lugar.
          </p>
          <p>
            De acordo com a praxeologia, a lógica da ação humana sempre busca a
            mudança de um estado menos satisfatório para outro mais
            satisfatório. A Diy Sec Lab permite o livre mercado de vendedores e
            compradores P2P, da forma mais simples e amigável.
          </p>
          <p>
            Ao contrário de uma exchange convencional de criptomoedas, nós
            conectamos compradores e vendedores no formato P2P, de forma segura
            e privada. Todos os Bitcoins negociados na Diy Sec Lab são
            whitelisted, ou seja, não vieram através de atividades ilícitas e
            são totalmente legais.
          </p>
          <p className="font-semibold">
            Talvez você ainda pense: “Então, para comprar Bitcoin sem KYC e com
            segurança, terei que confiar no P2P da Diy Sec Lab?”
          </p>
          <p>
            Todos os atendentes da Diy Sec Lab são pré-selecionados no modelo
            SpikeProvider, deixando um valor em BTC travado na plataforma como
            garantia para trabalharem conosco. Assim, se algum atendente da Diy
            Sec Lab trapaceasse, automaticamente seria punido financeiramente em
            valores muito superiores aos trades.
          </p>
          <p>
            Por fim, em caso de qualquer problema, o cliente pode entrar em
            contato com o SpikeHelper informando o ID do trade. O problema será
            analisado cuidadosamente até a sua resolução. Estamos comprometidos
            em criar a melhor experiência para você.
          </p>
        </div>
        <WhatsAppButton />
      </div>
    </>
  );
}
