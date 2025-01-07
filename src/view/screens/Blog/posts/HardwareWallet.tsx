import image1 from '@/view/assets/images/Blogs/HardwareWallet/image1.png';
import image2 from '@/view/assets/images/Blogs/HardwareWallet/image2.png';
import image3 from '@/view/assets/images/Statistics/Statistics.jpg';
export function HardwareWallet() {
  return (
    <main className="pt-24 pb-16 px-48 flex flex-col gap-y-8">
      <h1 className="text-3xl font-extrabold leading-tight lg:text-4xl">
        Hardware Wallet: O que é e quais são as melhores opções para armazenar
        Bitcoin?
      </h1>
      <img src={image1} alt="Imagem ilustrativa sobre hardware wallets" />
      <p className="text-justify">
        Uma das principais preocupações de quem possui Bitcoin é como
        armazená-lo de forma segura. Para isso, existem carteiras de hardware,
        dispositivos que geram e armazenam as chaves privadas de maneira
        offline, garantindo maior proteção contra ataques.
      </p>
      <p className="text-justify">
        Uma regra básica no mundo do Bitcoin é fazer a auto custódia de seus
        saldos. Deixar seus Bitcoins sob a custódia de uma exchange ou banco
        envolve riscos significativos, pois você abre a mão do controle de suas
        chaves privadas. Isso pode resultar em sérios problemas, como a perda de
        seus fundos em caso de hackeamento ou falência dessas empresas. A
        recuperação desses valores pode exigir longos e incertos processos
        judiciais, e muitas vezes o dinheiro nunca é recuperado.
      </p>
      <p className="text-justify">
        O Bitcoin foi projetado para permitir transações sem depender de
        terceiros, funcionando de maneira semelhante ao dinheiro físico. Assim,
        você mantém o controle total de seus recursos, garantindo soberania
        financeira e independência de instituições financeiras tradicionais.
        Para exercer a custódia de seus Bitcoins de forma segura, uma das
        melhores opções é a KRUX, uma hardware wallet disponibilizada no Bitkit.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        O que são carteiras de Bitcoin?
      </h2>
      <p className="text-justify">
        Uma carteira de Bitcoin, ou wallet, tem como principal função criar sua
        chave mestra de forma totalmente offline. E dispositivos como a KRUX não
        armazenam no hardware suas senhas depois do processo, deixando seus
        Bitcoins intocáveis e sendo 100% eficaz para sua auto custódia.
      </p>
      <p className="text-justify">
        O sistema funciona com base em códigos criptografados, conhecidos como
        chaves públicas e chaves privadas. Esses códigos determinam seu endereço
        na blockchain, comprovam a propriedade da sua carteira e são usados para
        movimentar seus fundos. Essas chaves são convertidas em códigos QR,
        facilitando o envio e a coleta de Bitcoin de maneira prática e global,
        apenas copiando e colando ou escaneando o código.
      </p>
      <p className="text-justify">
        Como mencionado anteriormente, o Bitcoin elimina a necessidade de
        confiar seu dinheiro a terceiros. Todas as informações para acessar e
        gerenciar seu saldo são geradas pelas carteiras, tornando fundamental
        que você aprenda a utilizá-las corretamente para garantir a segurança de
        seus ativos.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        O que é uma chave privada?
      </h2>
      <p className="text-justify">
        A chave privada é uma sequência de caracteres alfanuméricos gerados
        aleatoriamente, essencial para garantir a segurança das transações na
        rede Bitcoin. Ela deve ser mantida em sigilo absoluto, pois quem tiver
        acesso a essa chave pode movimentar os Bitcoins relacionados ao endereço
        correspondente. Por isso, proteger a chave privada é fundamental para
        garantir a segurança de seus ativos digitais.
      </p>
      <p className="text-justify">
        É nesse contexto que entram as carteiras de hardware, ferramentas
        projetadas para armazenar chaves privadas de forma offline e segura.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        O que são hardware wallets?
      </h2>
      <img
        src={image2}
        alt="Gráfico explicativo sobre como funciona uma hardware wallet"
      />
      <p className="text-justify">
        Hardware wallets são carteiras físicas específicas para gerar e
        armazenar com segurança as chaves privadas do seu Bitcoin de forma
        offline. Essas carteiras desempenham funções essenciais para a gestão de
        Bitcoin, permitindo receber, proteger e movimentar seu saldo em BTC com
        segurança. Devido à sua semelhança com pen drives, muitas pessoas
        acreditam, de forma equivocada, que os Bitcoins são armazenados dentro
        do dispositivo.
      </p>
      <p className="text-justify">
        A KRUX é um dos únicos dispositivos onde o usuário gera a chave e depois
        ela é apagada do dispositivo. Isso impossibilita o roubo mesmo no caso
        de confisco do hardware wallet. O armazenamento das chaves deve ser
        registrado em uma placa metálica, e esse processo garante a soberania no
        mundo cripto.
      </p>
      <p className="text-justify">
        Portanto, as chaves privadas são fundamentais, pois são elas que
        possibilitam transferir Bitcoins de um endereço para outro, garantindo o
        controle e a segurança dos ativos.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        Como funciona uma hardware wallet?
      </h2>
      <p className="text-justify">
        1. <strong>Geração da seed:</strong> Durante a primeira configuração, a
        carteira de hardware gera uma seed, geralmente usando os padrões BIP39.
        A seed é uma sequência de números binários gerados aleatoriamente e
        geralmente é convertida em uma série de 12 ou 24 palavras, criando uma
        sequência única para cada carteira. Uma vez gerada, a seed fica
        armazenada dentro do chip de forma offline, e não é possível exportar
        essa informação. Já a Cold Wallet KRUX cria a Seed offline e não
        armazena a informação no dispositivo.
      </p>
      <p className="text-justify">
        2. <strong>Geração de endereços:</strong> Com essa única chave mestra,
        você gera vários endereços públicos para receber seus ativos. O
        mecanismo de geração das seeds é feito de forma totalmente eficaz por
        sua tripla camada de proteção.
      </p>
      <p className="text-justify">
        3. <strong>Assinatura de transações:</strong> Depois de configurar sua
        carteira e criar um endereço de Bitcoin, você está pronto para receber e
        enviar transações de Bitcoin. Para enviar Bitcoin, você usará a sua
        hardware wallet para assinar as transações e autorizar o uso do saldo
        disponível. Para assinar, você realiza isso de forma totalmente offline
        por meio da KRUX utilizando a câmera na leitura de um QR CODE.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        Softwares para carteiras de hardware
      </h2>
      <img src={image3} alt="Imagem ilustrativa sobre hardware wallets" />
      <p className="text-justify">
        Os softwares para carteiras de hardware de Bitcoin são programas que
        permitem aos usuários interagir de forma prática e segura com seus
        dispositivos. Eles fornecem uma interface amigável para gerenciar,
        enviar e receber saldos em Bitcoin. Além disso, muitos desses softwares
        oferecem recursos adicionais, como integração com exchanges, serviços de
        pagamento e outras ferramentas financeiras, ampliando a usabilidade da
        carteira.
      </p>
      <p className="text-justify">
        A maioria das carteiras é um método para simplificar a interação dos
        usuários com a Blockchain. Entretanto, sistemas mais avançados como a
        KRUX permitem que o processo não dependa de nenhum terceiro e, após sua
        finalização, possibilita a conexão somente para leitura e recebimento de
        saldo dentro de aplicativos descentralizados da rede do Bitcoin, como
        Blue Wallet, Nunchuk, Sparrow e Specter.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        Em resumo
      </h2>
      <p className="text-justify">
        Garantir a segurança de seus Bitcoins é fundamental para proteger seus
        ativos digitais. As carteiras de hardware, como o BITKIT da DIY Security
        Lab, oferecem uma solução prática e segura, permitindo que você armazene
        suas chaves privadas de forma offline e mantenha o controle total sobre
        seus fundos. Com a crescente importância da soberania financeira,
        investir em uma carteira de Bitcoin segura, com o BITKIT (Krux), é uma
        excelente escolha para quem busca maior proteção e controle sobre suas
        transações.
      </p>
      <p className="text-justify">
        O BITKIT oferece o método definitivo para a criação e armazenamento da
        sua chave privada, tudo em um só lugar. Segurança sem intermediários
        (WEB3) para você que quer manter seus Bitcoins Intocáveis!
      </p>
      <p className="text-justify">
        Saiba mais em:{' '}
        <a href="https://www.diyseclab.io/pt" className="text-blue-500">
          DIY Security Lab
        </a>
      </p>
    </main>
  );
}
