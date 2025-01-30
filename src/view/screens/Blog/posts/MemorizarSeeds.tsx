import image1 from '@/view/assets/images/Blogs/MemorizarSeeds/image1.png';
import image2 from '@/view/assets/images/Blogs/MemorizarSeeds/image2.png';

export function MemorizarSeeds() {
  return (
    <main className="pt-24 pb-16 px-6 sm:px-12 md:px-24 lg:px-48 flex flex-col gap-y-4">
      <h1 className="text-3xl font-extrabold leading-tight lg:text-4xl text-center mb-8">
        {' '}
        Como o Bitcoin pode substituir a Aposentadoria Tradicional? Como
        memorizar suas Seeds de forma segura?
      </h1>
      <img
        src={image1}
        alt="Exemplo de Border Wallet com imagens associativas"
        className="max-w-[1000px] max-h-[800px] w-full h-auto mx-auto"
      />
      <p className="text-justify">
        Situações inesperadas podem acontecer a qualquer momento. Imagine um
        cenário de emergência, como uma enchente, onde você precisa sair de casa
        às pressas, sem tempo para pegar suas seeds armazenadas fisicamente.
      </p>
      <p className="text-justify">
        Guardar as seeds em um material durável e criptografado em locais
        diferentes é o mais recomendado para que não tenha problemas.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        Seed phrase: as palavras valiosas
      </h2>
      <p className="text-justify">
        Resumidamente, uma seed é uma sequência de palavras utilizada para
        restaurar uma carteira de Bitcoin e acessar os fundos associados. Isso
        simplifica o processo de backup, garantindo a proteção contínua dos seus
        ativos.
      </p>
      <p className="text-justify">
        Em essência, a seed funciona pelo Software ou por meio de uma foto como
        forma mais segura e única trazendo uma proteção ainda maior na geração
        da senha.
      </p>
      <p className="text-justify">
        Essas palavras podem ser usadas para recuperar e restaurar seu acesso a
        todos os endereços e seus respectivos saldos de Bitcoin; por isso, são
        uma informação muito importante para quem faz custódia de bitcoin.
      </p>
      <p className="text-justify">
        Formato de 12 ou 24 palavras representando a criptografia aleatório de 2
        elevado a 128, ou 2 elevado a 256.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        Como memorizar a sua seed de forma prática e fácil?
      </h2>
      <img
        src={image2}
        alt="Processo de criação de uma Border Wallet"
        className="max-w-[1000px] max-h-[800px] w-full h-auto mx-auto"
      />
      <h3 className="text-xl font-semibold leading-tight lg:text-2xl">
        1. Crie uma História ou Lógica
      </h3>
      <p className="text-justify">
        Memorizar uma lista de palavras aleatórias pode ser desafiador, mas
        criar associações é uma maneira eficaz de facilitar o processo.
        Desenvolva uma história visual que conecte as palavras de forma criativa
        e significativa, ajudando você a lembrar delas com mais facilidade.
      </p>
      <p className="text-justify">
        Por exemplo, geramos 12 palavras na Sparrow Wallet para esta
        demonstração. Embora seja possível usar mais palavras, tenha em mente
        que quanto maior o número, mais difícil será memorizar todas elas.
      </p>
      <p className="text-justify">
        As palavras sempre vão sair desse github bip39 representado por 2048
        palavras.
      </p>
      <p className="text-justify">
        Olhando para as seeds, vamos pensar em uma história que permita
        visualizar a ordem em que cada palavra aparece. Isso é muito importante,
        pois a ordem das palavras é super importante na hora de recuperar o
        saldo; ela deve ser a correta.
      </p>
      <h3 className="text-xl font-semibold leading-tight lg:text-2xl">
        2. Border Wallet
      </h3>
      <p className="text-justify">
        A tradução de “Border Wallet” é “carteiras de fronteira”. Elas foram
        desenvolvidas para atender pessoas que precisam deixar seus países
        rapidamente devido a crises humanitárias, permitindo que carreguem seus
        bitcoins de forma prática e segura.
      </p>
      <p className="text-justify">
        Segundo a ACNUR, agência de refugiados das Nações Unidas, até o final de
        2021, cerca de 89,3 milhões de pessoas foram forçadas a se deslocar
        globalmente. Muitas dessas pessoas fogem com apenas uma mochila, alguns
        pertences pessoais e a roupa do corpo. Transportar valores em situações
        como essas é um grande desafio, pois há riscos de roubo e confisco.
      </p>
      <p className="text-justify">
        Pensando nisso, a equipe da Border Wallet criou uma solução inovadora
        para facilitar a memorização de seeds por meio de associações visuais
        com imagens.
      </p>
      <h3 className="text-xl font-semibold leading-tight lg:text-2xl">
        Como criar uma Border Wallet?
      </h3>
      <p className="text-justify">
        É possível criar uma Border Wallet a partir de um gerador de entropia
        fornecido por eles, que cria uma imagem na qual você vai conseguir
        lembrar a partir do uso das palavras da sua seeds.
      </p>

      <p className="text-justify">
        Além disso, você pode adicionar uma passphrase também, caso queira ter
        ainda mais segurança.
      </p>
      <p className="text-justify">
        No fim, tudo depende do quão confortável você está em usar cada
        ferramenta. Com o tempo, vai se tornando cada vez mais fácil relembrar
        as palavras, e você pode simplesmente pensar na imagem ou na história e
        conseguirá recuperar facilmente as palavras.
      </p>
    </main>
  );
}
