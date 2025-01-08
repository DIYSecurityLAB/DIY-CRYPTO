import image1 from '@/view/assets/images/Blogs/BitcoinOnChainLightning/image1.jpg';
import image2 from '@/view/assets/images/Blogs/BitcoinOnChainLightning/image2.jpg';
export function BitcoinOnChainELightning() {
  return (
    <main className="pt-24 pb-16 px-6 sm:px-12 md:px-24 lg:px-48 flex flex-col gap-y-4">
      <h1 className="text-3xl font-extrabold leading-tight lg:text-4xl">
        Bitcoin on-chain e Lightning: Qual escolher?
      </h1>
      <img
        src={image1}
        alt="Imagem ilustrativa sobre Bitcoin on-chain e Lightning"
      />
      <p className="text-justify">
        O Bitcoin é estruturado em camadas, e uma forma simples de entender isso
        é compará-lo a um prédio. A primeira camada, a blockchain, funciona como
        a fundação desse prédio. Ela é a base responsável por garantir a
        segurança e a descentralização de todo o protocolo.
      </p>
      <p className="text-justify">
        O Bitcoin é revolucionário porque, pela primeira vez, uma rede de
        computadores conseguiu criar um sistema de dinheiro digital totalmente
        independente de bancos e governos.
      </p>
      <p className="text-justify">
        Para tornar isso possível, o protocolo Bitcoin adota diversos
        mecanismos, como a prova de trabalho (mineração), ajuste de dificuldade,
        criptografia, assinaturas digitais e a participação de nós que se
        conectam à rede, verificam os registros e armazenam cópias da blockchain
        globalmente.
      </p>
      <p className="text-justify">
        Essa camada é dedicada a garantir os fundamentos do Bitcoin: uma rede
        inviolável, imune a ataques e modificações, já que concentra mais poder
        computacional do que os 500 supercomputadores mais potentes do mundo
        combinado.
      </p>
      <img
        src={image2}
        alt="Imagem ilustrativa sobre Bitcoin on-chain e Lightning"
      />
      <p className="text-justify">
        Além disso, a camada On-Chain do Bitcoin preserva os princípios
        fundamentais da moeda, como sua solidez e o limite máximo de 21 milhões
        de unidades que podem ser emitidas. Isso torna o Bitcoin uma moeda
        previsível, que não sofre com a inflação desenfreada, ao contrário do
        dinheiro fiduciário.
      </p>
      <p className="text-justify">
        Porém, uma blockchain tão segura e descentralizada não consegue ser
        rápida e barata o tempo todo. O processamento das transações enviadas
        pelos usuários ocorre em blocos, que podem levar de 5 a 10 minutos ou
        até horas para serem minerados. Esse tempo varia conforme a quantidade
        de transações pendentes na rede e a dificuldade atual de mineração de
        cada bloco.
      </p>
      <p className="text-justify">
        No entanto, a rede Bitcoin atingiu recordes históricos de poder
        computacional, o que eleva a dificuldade de minerar cada bloco e garante
        a preservação das propriedades imutáveis do protocolo.
      </p>
      <p className="text-justify">
        Para lidar com períodos de alta demanda, a rede utiliza um mecanismo de
        priorização, onde as transações com taxas de processamento mais altas
        ganham prioridade. Isso permite que os usuários com maior urgência
        paguem mais para que suas transações sejam solicitadas mais rapidamente.
      </p>
      <p className="text-justify">
        Nesse sentido, a camada um, do Bitcoin on-chain, se tornará uma camada
        de liquidação final, onde ocorrem as transações de maior volume,
        enquanto os pagamentos menores serão feitos em camadas adjacentes,
        focadas em escalabilidade, como é o caso da rede Lightning.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        O que é a rede Lightning do Bitcoin?
      </h2>
      <p className="text-justify">
        A rede Lightning é a camada duas do Bitcoin. Ela se baseia na camada um,
        funcionando como uma extensão que permite realizar pagamentos
        instantâneos e com taxas extremamente baixas. Em outras palavras, é como
        se a camada um fosse o primeiro andar do edifício Bitcoin, enquanto a
        Lightning Network representava o segundo andar.
      </p>
      <p className="text-justify">
        Enfim, a rede Lightning pretende potencializar as características do
        Bitcoin por meio de uma rede de canais de pagamento P2P, sem a
        necessidade de registrar todas as transações diretamente na blockchain.
      </p>
      <p className="text-justify">
        Esses canais tornam os pagamentos na Lightning tão rápidos quanto um
        relâmpago. Além disso, sua interconexão transforma o Bitcoin na rede
        financeira global mais eficiente, devolvendo o poder às pessoas. Isso
        permite que você utilize seu dinheiro livremente, sem depender de bancos
        ou governos.
      </p>
      <ul className="list-disc list-inside">
        <li className="text-justify pl-6">
          As transações on-chain demoram mais e têm taxas mais altas, mas a rede
          é mais segura para guardar Bitcoin a longo prazo.
        </li>
        <br />
        <li className="text-justify pl-6">
          Já na Lightning, as transações são instantâneas, com taxas baixas,
          quase insignificantes, sendo ideal para pagamentos cotidianos.
        </li>
      </ul>
      <p className="text-justify">
        A rede Lightning funciona como o dinheiro que você separa para suas
        necessidades diárias ou semanais, enquanto a camada do bitcoin on-chain
        é usada para proteger e guardar seu Bitcoin, atuando como um cofre
        digital.
      </p>
      <p className="text-justify">
        Quando pensamos em ouro, imaginamos barras de ouro em um cofre; na
        camada on-chain, esse “ouro” é digital, representado pelo Bitcoin.
        Portanto, se você cuida bem das suas chaves, ninguém pode roubá-lo.
      </p>
      <p className="text-justify">
        É importante ressaltar que cada camada do Bitcoin tem uma aplicação
        específica. A primeira camada, o blockchain, é mais adequada para
        armazenar Bitcoin a longo prazo, com segurança e sem a necessidade de
        intermediários. Por outro lado, a segunda camada, a Lightning Network, é
        perfeita para pagamentos do dia a dia e transações de valores menores,
        oferecendo rapidez e custos baixos.
      </p>
    </main>
  );
}
