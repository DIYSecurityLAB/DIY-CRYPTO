import image1 from '@/view/assets/images/Blogs/LiquidNetwork/image1.png';
import image2 from '@/view/assets/images/Blogs/LiquidNetwork/image2.png';
import image3 from '@/view/assets/images/Blogs/LiquidNetwork/image3.jpg';

export function LiquidNetwork() {
  return (
    <main className="pt-24 pb-16 px-6 sm:px-12 md:px-24 lg:px-48 flex flex-col gap-y-4">
      <h1 className="text-3xl font-extrabold leading-tight lg:text-4xl">
        O que é a Liquid Network?
      </h1>
      <img src={image1} alt="Imagem ilustrativa sobre a Liquid Network" />
      <p className="text-justify">
        O impacto do Bitcoin vai além da criação de uma nova forma de moeda; ele
        abriu portas para a possibilidade de um sistema financeiro alternativo
        ao tradicional. A partir do Bitcoin, surgiu a oportunidade de
        desenvolver um ecossistema financeiro global, descentralizado e digital,
        que abrange uma ampla gama de ativos e utilidades.
      </p>
      <p className="text-justify">
        Ao longo dos anos, diversas inovações no Bitcoin levaram ao surgimento
        da Liquid Network, uma rede de segunda camada (L2) que oferece uma
        abordagem distinta para integrar ativos digitais ao Bitcoin.
      </p>
      <p className="text-justify">
        O Bitcoin possibilitou a criação de um sistema financeiro alternativo ao
        tradicional, e desde sua criação em 2009, a própria rede tem passado por
        atualizações graduais. Essas atualizações foram em grande parte
        orientadas pela demanda dos usuários e, à medida que o número de
        participantes cresceu, tornaram-se essenciais para que o Bitcoin se
        tornasse mais escalável e pudesse atender às necessidades financeiras
        globais.
      </p>
      <img src={image2} alt="Gráfico explicativo sobre a Liquid Network" />
      <p className="text-justify">
        No entanto, a camada principal (camada um), onde os registros de
        blockchain são feitos e distribuídos, não oferece escalabilidade
        suficiente. O Bitcoin foi projetado para evoluir em camadas, com pilhas
        de protocolos interconectados. A camada um (L1) é responsável por manter
        a rede segura e descentralizada.
      </p>
      <p className="text-justify">
        Portanto, funções relacionadas à escalabilidade, como transações rápidas
        e de baixo custo, foram transferidas para camadas superiores à L1, além
        da blockchain do Bitcoin. Isso ocorre porque tentar integrar todas as
        funcionalidades diretamente na blockchain comprometeria a segurança e
        descentralização da rede.
      </p>
      <p className="text-justify">
        A partir dessa necessidade, surgiram as redes de segunda camada, como a
        Liquid Network e a Lightning Network, além dos protocolos sidechains.
        Essas redes operam paralelamente ao Bitcoin, oferecendo soluções
        financeiras para os usuários, enquanto a camada um preserva sua função
        primordial, e as camadas dois se concentram em inovação, redução de
        custos e aumento de velocidade.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        O que é a Liquid Network?
      </h2>
      <p className="text-justify">
        A Liquid Network é uma sidechain do Bitcoin, uma rede paralela que
        permite transações mais rápidas e confidenciais, além da emissão de
        novos ativos digitais, utilizando o Bitcoin como base. Foi desenvolvida
        pela empresa Blockstream e utiliza os recursos da Elements.
      </p>
      <p className="text-justify">
        A Elements, por sua vez, é uma blockchain de código aberto compatível
        com sidechains, que oferece uma variedade de recursos desenvolvidos pela
        comunidade. Entre suas funcionalidades, destacam-se a capacidade de
        realizar transações confidenciais e a emissão de novos ativos,
        proporcionando maior flexibilidade e privacidade nas operações.
      </p>
      <p className="text-justify">
        Vale ressaltar ainda que, a Liquid é composta por uma federação, que
        inclui diversos membros, como exchanges, carteiras e empresas que
        oferecem serviços relacionados ao Bitcoin. Para os usuários, a Liquid
        possibilita a transferência de Bitcoins entre a rede on-chain do Bitcoin
        e a própria Liquid, por meio de uma conexão bidirecional.
      </p>
      <p className="text-justify">
        Nesse contexto, os Bitcoins usados na Liquid são conhecidos como L-BTC e
        possuem paridade de 1:1 com o BTC, garantindo uma quantidade equivalente
        entre as duas redes.
      </p>
      <img src={image3} alt="Representação da governança na Liquid Network" />
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        Mas e a Liquid Federation?
      </h2>
      <p className="text-justify">
        A Liquid Federation é um grupo de organizações, incluindo exchanges,
        empresas, carteiras, mesas de negociação e desenvolvedores, que
        desempenham tarefas essenciais para o protocolo da Liquid Network.
      </p>
      <p className="text-justify">
        Os membros federados da Liquid são responsáveis pela governança da rede,
        embora os usuários possam acompanhar todas as atividades ao executar um
        nó Liquid.
      </p>
      <p className="text-justify">
        A estrutura dessa federação é composta por três partes:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Funcionários:</strong> Responsáveis por executar hardware
          especializado para verificar transações e proteger os fundos de
          Bitcoin na rede.
        </li>
        <li>
          <strong>Membros:</strong> Além de realizar transferências de fundos
          entre a Liquid e a rede Bitcoin, os membros também participam da
          governança, votando em eleições do conselho e em novas atualizações.
        </li>
        <li>
          <strong>Nós completos:</strong> Garantem que os funcionários ajam de
          maneira adequada e validam as transações da rede Bitcoin para a
          Liquid.
        </li>
      </ul>
      <p className="text-justify">
        Com aproximadamente 60 membros, 15 atuam como funcionários, com a
        responsabilidade de:
      </p>
      <ul className="list-disc list-inside">
        <li>Confirmar novos blocos;</li>
        <li>
          Proteger e gerenciar os fundos de Bitcoin mantidos na carteira
          multi-assinaturas da rede.
        </li>
      </ul>
      <p className="text-justify">
        A governança da Liquid é estruturada em três conselhos: Adesão,
        Supervisão e Tecnologia. Cada conselho é composto por cinco membros da
        federação, eleitos anualmente por votação.
      </p>
      <p className="text-justify">
        Embora a governança interna seja organizada dessa forma, qualquer pessoa
        ao redor do mundo pode usar a Liquid por meio de suas aplicações e
        adquirir L-BTC para realizar transações dentro da rede.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        Principais funcionalidades da Liquid Network?
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <strong>Liquidações finais rápidas:</strong> o Bitcoin movido para a
          Liquid (Bitcoin líquido, ou seja, “L-BTC”) pode alcançar liquidação
          final em dois minutos.
        </li>
        <li>
          <strong>Transações confidenciais:</strong> os valores e os tipos de
          ativos transacionados permanecem ocultos por padrão na Liquid,
          assegurando a proteção dos dados financeiros dos usuários.
        </li>
        <li>
          <strong>Tokenização:</strong> novos tokens podem ser emitidos na
          Liquid para representar moedas fiduciárias, títulos ou outros ativos
          digitais.
        </li>
        <li>
          <strong>Interoperabilidade:</strong> a integração com a Liquid One
          oferece suporte para L-BTC e ativos emitidos. Todos os tokens seguem o
          mesmo padrão, permitindo que os usuários aproveitem recursos como
          atomic swaps e multisig, no estilo do Bitcoin.
        </li>
      </ul>
      <p className="text-justify">
        A grande vantagem da Liquid Network é sua proposta como um sistema
        financeiro global. Isso permite que não precisemos mais utilizar o
        sistema financeiro tradicional, dispondo agora de uma rede baseada no
        Bitcoin que atende às necessidades de diversos usuários.
      </p>
      <p className="text-justify">
        Ela vem sendo utilizada com maior frequência para fazer swaps de L2 para
        L2 em períodos de taxas altas na rede Bitcoin Principal.
      </p>
    </main>
  );
}
