import image1 from '@/view/assets/images/Blogs/KnowYourCustomer/image1.jpg';

export function KnowYourCustomer() {
  return (
    <main className="pt-24 pb-16 px-6 sm:px-12 md:px-24 lg:px-48 flex flex-col gap-y-4">
      <h1 className="text-3xl font-extrabold leading-tight lg:text-4xl text-center mb-8">
        {' '}
        Como o Bitcoin pode substituir a Aposentadoria Tradicional? O que é Know
        Your Customer (KYC)?
      </h1>
      <img
        src={image1}
        alt="Descrição da imagem"
        className="max-w-[1000px] max-h-[800px] w-full h-auto mx-auto"
      />
      <p className="text-justify">
        O processo de KYC (Know Your Customer) visa identificar e autenticar a
        identidade dos usuários em uma plataforma. Ele é frequentemente
        destacado como uma medida fundamental para prevenir crimes financeiros e
        garantir a integridade das transações.
      </p>
      <p className="text-justify">
        O KYC, ou “Know Your Customer”, é um processo usado por empresas para
        confirmar a identidade de seus clientes. Isso geralmente envolve o envio
        de documentos, como identidade e comprovante de endereço, para que a
        empresa possa garantir que o cliente é quem diz ser.
      </p>
      <p className="text-justify">
        Governos e instituições financeiras afirmam que o principal objetivo do
        KYC é prevenir crimes financeiros, como lavagem de dinheiro e fraudes.
        No entanto, essa medida frequentemente vai além do necessário,
        comprometendo a privacidade individual e a liberdade financeira em prol
        de um controle mais amplo e centralizado.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        O Know Your Customer (KYC), ou “Conheça Seu Cliente”:
      </h2>
      <p className="text-justify">
        Na prática, o KYC permite que bancos, fintechs e bolsas monitorem de
        perto os usuários de seus serviços, sob a justificativa de oferecer mais
        segurança e garantir conformidade com as regulamentações. Contudo, esse
        controle vai além da “proteção”: ele fortalece o poder de governos e
        instituições financeiras ao fornecer acesso a informações pessoais
        sensíveis, como documentos de identidade, comprovantes de endereço e até
        selfies.
      </p>
      <p className="text-justify">
        Esses dados, armazenados em servidores centralizados, aumentam os riscos
        de vazamentos e violação de privacidade, expondo os usuários a possíveis
        abusos. Embora os governos defendam o KYC como uma medida para atender
        às normas internacionais de compliance e evitar o uso de plataformas
        para atividades ilegais, a realidade é que esse mecanismo reforça a
        centralização e expande o controle sobre o cidadão comum.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        O processo de Know Your Customer (KYC) envolve algumas etapas:
      </h2>
      <p className="text-justify">
        Geralmente, é solicitado durante o cadastro nas plataformas financeiras,
        como bancos, exchanges e fintechs.
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Cadastro e coleta de informações pessoais:</strong> o cliente
          preenche informações básicas, como nome completo, data de nascimento,
          email ou telefone. Essas informações iniciais servem de base para o
          processo de verificação.
        </li>
        <li>
          <strong>Envio de documentação:</strong> após fornecer os dados
          pessoais, o cliente é solicitado a enviar documentos de identidade,
          como RG, CPF, passaporte ou carteira de habilitação, além de um
          comprovante de residência recente.
        </li>
        <li>
          <strong>Verificação de identidade com foto:</strong> em muitos casos,
          as empresas pedem uma selfie ou uma foto do cliente segurando o
          documento de identidade.
        </li>
        <li>
          <strong>Análise de risco e conformidade:</strong> a empresa realiza
          uma análise de risco, verificando antecedentes criminais e histórico
          de fraudes.
        </li>
        <li>
          <strong>Aprovação ou recusa do cadastro:</strong> a empresa decide se
          aprova ou não o cadastro com base nas informações coletadas.
        </li>
      </ul>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        Por que o KYC é importante para empresas e governos?
      </h2>
      <p className="text-justify">
        Empresas financeiras, como bancos, fintechs e bolsas, implementam o KYC
        para cumprir as regulamentações governamentais e evitar serem utilizados
        como canais para atividades ilícitas.
      </p>
      <ul className="list-disc list-inside">
        <li>Rastrear transações financeiras.</li>
        <li>Recolher impostos sobre ganhos de capital.</li>
        <li>Monitorar e controlar indivíduos com patrimônio significativo.</li>
      </ul>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        O KYC é uma ameaça ao Bitcoin?
      </h2>
      <p className="text-justify">
        Para os defensores da soberania, o KYC permite que os governos forcem os
        indivíduos a declarar seus bens, monitorando todas as suas transações
        financeiras. Em regimes autoritários, essa vigilância pode resultar em
        confisco arbitrário.
      </p>
      <p className="text-justify">
        Enquanto os governos defendem o KYC como uma ferramenta essencial para
        combater crimes financeiros, estudos indicam que a porcentagem de
        atividades ilícitas envolvendo Bitcoin é mínima. O verdadeiro objetivo
        do KYC é o controle: identificar quem possui patrimônio significativo e
        quem acumula ganhos de capital.
      </p>
      <h2 className="text-2xl font-bold leading-tight lg:text-3xl">
        Devo comprar Bitcoin com ou sem KYC?
      </h2>
      <p className="text-justify">
        A escolha entre conveniência e privacidade deve ser baseada no seu
        objetivo. Comprar Bitcoin com KYC pode ser necessário para converter em
        bens no futuro. Já para quem busca total privacidade, adquirir sem KYC
        pode ser a melhor opção.
      </p>
    </main>
  );
}
