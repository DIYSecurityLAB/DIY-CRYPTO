import { useTranslation } from 'react-i18next';

import { AcceptedLanguages } from '@/domain/locales/Language';
import como_acessar_sua_carteira_e_transferir_bitcoins from '../assets/images/tutorial/como_acessar_sua_carteira_e_transferir_bitcoins.png';
import como_adicionar_uma_senha_passphrase from '../assets/images/tutorial/como_adicionar_uma_senha_passphrase.png';
import como_montar_seu_puncao_automatico from '../assets/images/tutorial/como_montar_seu_puncao_automatico.png';
import como_realizar_o_backup_da_sua_chave_privada_seedqr from '../assets/images/tutorial/como_realizar_o_backup_da_sua_chave_privada_seedqr.png';
import como_realizar_o_backup_da_sua_chave_privada_tiniyseed from '../assets/images/tutorial/como_realizar_o_backup_da_sua_chave_privada_tiniyseed.png';
import como_recuperar_sua_conta_sem_o_dispositivo_krux from '../assets/images/tutorial/como_recuperar_sua_conta_sem_o_dispositivo_krux.png';
import crie_sua_chave_privada_e_guarde_seus_bitcoins from '../assets/images/tutorial/crie_sua_chave_privada_e_guarde_seus_bitcoins.png';
import como_realizar_o_backup_da_sua_chave_privada_stackbit from '../assets/images/tutorial/tutorial_7.png';
import valide_o_codigo_instalado_na_sua_carteira from '../assets/images/tutorial/valide_o_codigo_instalado_na_sua_carteira.png';
import { BackgroundAnimatedProduct } from '../components/BackgroundAnimatedProduct';
import { useCurrentLang } from '../utils/useCurrentLang';

export function TutorialsPage() {
  const { t } = useTranslation();
  const { currentLang } = useCurrentLang();

  const tutorialsPT = [
    {
      id: 1,
      title: '#1 - Valide o código instalado na sua carteira',
      file: '/tutorial/BR_1_Valide_o_codigo_instalado_no_seu_dispositivo.pdf',
      image: valide_o_codigo_instalado_na_sua_carteira,
      description: t('tutorials.items.7.description'),
    },
    {
      id: 2,
      title: '#2 - Crie sua Chave Privada e Guarde seus Bitcoins',
      file: '/tutorial/BR_2_Crie_sua_Chave_Privada_e_Guarde_seus_Bitcoins.pdf',
      image: crie_sua_chave_privada_e_guarde_seus_bitcoins,
      description: t('tutorials.items.1.description'),
    },
    {
      id: 3,
      title: '#3 - Adicione uma senha (passphrase)',
      file: '/tutorial/BR_3_Adicione_uma_senha_(passphrase).pdf',
      image: como_adicionar_uma_senha_passphrase,
      description: t('tutorials.items.2.description'),
    },
    {
      id: 4,
      title: '#4 - Como acessar sua carteira e transferir Bitcoins',
      file: '/tutorial/BR_4_Como_acessar_sua_carteira_e_transferir_Bitcoins.pdf',
      image: como_acessar_sua_carteira_e_transferir_bitcoins,
      description: t('tutorials.items.3.description'),
    },
    {
      id: 5,
      title:
        '#5 - Como recuperar sua conta sem o dispositivo KRUX (Cold_Wallet)',
      file: '/tutorial/BR_5_Como_recuperar_sua_conta_sem_o_dispositivo_KRUX_(Cold_Wallet).pdf',
      image: como_recuperar_sua_conta_sem_o_dispositivo_krux,
      description: t('tutorials.items.4.description'),
    },
    {
      id: 6,
      title: '#6 - Como montar seu punção automático',
      file: '/tutorial/BR_6_Como_montar_seu_puncao_automatico.pdf',
      image: como_montar_seu_puncao_automatico,
      description: t('tutorials.items.6.description'),
    },
    {
      id: 7,
      title: '#7 - Como realizar o backup da sua Chave Privada (Stackbit 1248)',
      file: '/tutorial/BR_7_Como_realizar_o_backup_da_sua_Chave_Privada_(Stackbit_1248).pdf',
      image: como_realizar_o_backup_da_sua_chave_privada_stackbit,
      description:
        'Aprenda a perfurar placas metálicas com segurança e eficiência, um guia importante para quem trabalha com materiais manuais.',
    },
    {
      id: 8,
      title: '#8 - Como realizar o backup da sua Chave Privada (Tiny Seed)',
      file: '/tutorial/BR_8_Como_realizar_o_backup_da_sua_Chave_Privada_(Tiny_Seed).pdf',
      image: como_realizar_o_backup_da_sua_chave_privada_tiniyseed,
      description: t('tutorials.items.8.description'),
    },
    {
      id: 9,
      title: '#9 - Como realizar o backup da sua Chave Privada (SeedQR)',
      file: '/tutorial/BR_9_Como_realizar_o_backup_da_sua_Chave_Privada_(SeedQR).pdf',
      image: como_realizar_o_backup_da_sua_chave_privada_seedqr,
      description: t('tutorials.items.9.description'),
    },
    {
      id: 10,
      title: 'Modelo Stackbit 1 a 12',
      file: '/templates/Stackbit_1_a_12_DIY.png',
      image: '/templates/Stackbit_1_a_12_DIY.png',
      description: 'Stackbit 1 a 12 Template',
    },
    {
      id: 11,
      title: 'Modelo Stackbit 13 a 24',
      file: '/templates/Stackbit_13_a_24_DIY.png',
      image: '/templates/Stackbit_13_a_24_DIY.png',
      description: 'Stackbit 13 a 24 Template',
    },
    {
      id: 12,
      title: 'Tiny Seed Modelo',
      file: '/templates/Stackbit_13_a_24_DIY.png',
      image: '/templates/TINY-SEED-12-24-WORDS.png',
      description: 'Tiny Seed Modelo',
    },
  ];

  const tutorialsUS = [
    {
      id: 1,
      title: '#1 - Validate the code installed on your wallet',
      file: '/tutorial/US_1_validate_the_code_installed_on_your_wallet.pdf',
      image: valide_o_codigo_instalado_na_sua_carteira,
      description: t('tutorials.items.7.description'),
    },
    {
      id: 2,
      title: '#2 - Create your private key and store your bitcoins',
      file: '/tutorial/US_2_create_your_private_key_and_store_your_bitcoins.pdf',
      image: crie_sua_chave_privada_e_guarde_seus_bitcoins,
      description: t('tutorials.items.1.description'),
    },
    {
      id: 3,
      title: '#3 - Add a passaword (passphrase)',
      file: '/tutorial/US_3_add_a_passaword_(passphrase).pdf',
      image: como_adicionar_uma_senha_passphrase,
      description: t('tutorials.items.2.description'),
    },
    {
      id: 4,
      title: t('tutorials.items.3.title'),
      file: '/tutorial/US_4_how_to_access_your_wallet_and_transfer_bitcoins.pdf',
      image: como_acessar_sua_carteira_e_transferir_bitcoins,
      description: t('tutorials.items.3.description'),
    },
    {
      id: 5,
      title:
        '#5 - How to recover your account without the KRUX device (Cold Wallet)',
      file: '/tutorial/US_5_how_to_recover_your_account_without_the_KRUX_device_(Cold_Wallet).pdf',
      image: como_recuperar_sua_conta_sem_o_dispositivo_krux,
      description: t('tutorials.items.4.description'),
    },
    {
      id: 6,
      title: '#6 - How to set up your automatic punching machine',
      file: '/tutorial/US_6_how_to_set_up_your_automatic_punching_machine.pdf',
      image: como_recuperar_sua_conta_sem_o_dispositivo_krux,
      description: t('tutorials.items.6.description'),
    },
    {
      id: 7,
      title: '#7 - how to backup your private key (Stackbit 1248)',
      file: '/tutorial/US_7_how_to_backup_your_private_key_(Stackbit_1248).pdf',
      image: como_realizar_o_backup_da_sua_chave_privada_stackbit,
      description:
        'Learn how to drill metal plates safely and efficiently, an important guide for anyone who works with manual materials.',
    },
    {
      id: 8,
      title: '#8 - How to backup your private key (Tiny Seed)',
      file: '/tutorial/US_8_How_to_backup_your_private_key_(Tiny_Seed).pdf',
      image: como_realizar_o_backup_da_sua_chave_privada_tiniyseed,
      description: t('tutorials.items.8.description'),
    },
    {
      id: 9,
      title: t('tutorials.items.8.title'),
      file: '/tutorial/US_9_how_to_backup_your_private_key_(SeedQR).pdf',
      image: como_realizar_o_backup_da_sua_chave_privada_seedqr,
      description: t('tutorials.items.9.description'),
    },
    {
      id: 10,
      title: 'Stackbit model 1 to 12',
      file: '/templates/Stackbit_1_a_12_DIY.png',
      image: '/templates/Stackbit_1_a_12_DIY.png',
      description: 'Stackbit 1 a 12 Template',
    },
    {
      id: 11,
      title: 'Stackbit model 13 to 24',
      file: '/templates/Stackbit_13_a_24_DIY.png',
      image: '/templates/Stackbit_13_a_24_DIY.png',
      description: 'Stackbit 13 a 24 Template',
    },
    {
      id: 12,
      title: 'Tiny Seed Model',
      file: '/templates/Stackbit_13_a_24_DIY.png',
      image: '/templates/TINY-SEED-12-24-WORDS.png',
      description: 'Tiny Seed Model',
    },
  ];

  return (
    <>
      <BackgroundAnimatedProduct />
      <div className="min-h-screen pt-20 px-8">
        <article className="py-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-orange-primary dark:text-white">
            {t('tutorials.title')}
          </h1>
          <p className="text-lg md:text-xl text-center uppercase text-gray-700 dark:text-gray-300">
            {t('tutorials.description')}
          </p>
        </article>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(currentLang === AcceptedLanguages.pt ||
            currentLang === AcceptedLanguages.es) &&
            tutorialsPT.map((tutorial) => (
              <div
                key={tutorial.id}
                className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-[500px]"
              >
                <img
                  src={tutorial.image}
                  alt={`Tutorial ${tutorial.id}`}
                  className="object-cover rounded-lg relative w-full h-[180px]"
                />
                <h2 className="text-text-primary-light dark:text-text-primary-dark font-semibold text-lg sm:text-base text-center pt-4">
                  {tutorial.title}
                </h2>
                <p
                  className="text-gray-700 dark:text-gray-300 text-sm sm:text-xs text-center font-medium flex-grow pt-4"
                  style={{
                    fontSize: 'clamp(14px, 4vw, 16px)',
                  }}
                >
                  {tutorial.description}
                </p>
                <a
                  href={tutorial.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-10 bg-orange-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors text-center"
                >
                  {t('tutorials.downloadButton')}
                </a>
              </div>
            ))}
          {currentLang === AcceptedLanguages.en &&
            tutorialsUS.map((tutorial) => (
              <div
                key={tutorial.id}
                className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-[500px]"
              >
                <img
                  src={tutorial.image}
                  alt={`Tutorial ${tutorial.id}`}
                  className="object-cover rounded-lg relative w-full h-[180px]"
                />
                <h2 className="text-text-primary-light dark:text-text-primary-dark font-semibold text-lg sm:text-base text-center pt-4">
                  {tutorial.title}
                </h2>
                <p
                  className="text-gray-700 dark:text-gray-300 text-sm sm:text-xs text-center font-medium flex-grow pt-4"
                  style={{
                    fontSize: 'clamp(14px, 4vw, 16px)',
                  }}
                >
                  {tutorial.description}
                </p>
                <a
                  href={tutorial.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-10 bg-orange-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors text-center"
                >
                  {t('tutorials.downloadButton')}
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
