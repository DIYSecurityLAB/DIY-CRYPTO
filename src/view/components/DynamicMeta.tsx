// src/components/DynamicMeta.tsx
import { useLanguage } from '@/domain/locales/Language';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const DynamicMeta = () => {
  const location = useLocation();
  const { currentLang } = useLanguage();

  // Configuração de metadados para cada rota
  const metaConfig: Record<
    string,
    { title: string; description: string; image: string }
  > = {
    '/': {
      title: 'DIY Security Lab | Proteção offline de Bitcoin',
      description:
        'Descubra como proteger seu Bitcoin offline com segurança máxima.',
      image: 'https://imgur.com/4EwWhQN',
    },
    [`/${currentLang}/about`]: {
      title: 'Sobre Nós - DIY Security Lab',
      description:
        'Conheça nossa missão e visão para a segurança offline de Bitcoin.',
      image: 'https://imgur.com/bbFlmYS',
    },
    [`/${currentLang}/tutoriais`]: {
      title: 'Tutoriais - DIY Security Lab',
      description:
        'Explore nossos tutoriais detalhados sobre segurança de Bitcoin.',
      image: 'https://imgur.com/t2UukF7',
    },
    [`/${currentLang}/videos`]: {
      title: 'Vídeos - DIY Security Lab',
      description:
        'Assista a vídeos educativos sobre segurança e proteção de Bitcoin.',
      image: 'https://imgur.com/lsI0jWT',
    },
    [`/${currentLang}/blogs`]: {
      title: 'Blogs - DIY Security Lab',
      description: 'Confira artigos e atualizações sobre segurança de Bitcoin.',
      image: 'https://imgur.com/HsuX0Nl',
    },
    [`/${currentLang}/blog`]: {
      title: 'Blog - DIY Security Lab',
      description: 'Confira artigos e atualizações sobre segurança de Bitcoin.',
      image: 'https://imgur.com/HsuX0Nl',
    },
    [`/${currentLang}/suporte`]: {
      title: 'Suporte - DIY Security Lab',
      description:
        'Todos os meios de comunicação com o suporte DiySecLab em um só lugar.',
      image: 'https://imgur.com/Yu9vkM4',
    },
  };

  // Busca os metadados para a rota atual ou usa os da página inicial
  const meta = metaConfig[location.pathname] || metaConfig['/'];

  return (
    <Helmet>
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.image} />
      <meta property="twitter:url" content={window.location.href} />

      {/* SEO */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta
        name="keywords"
        content="Bitcoin, segurança, tutoriais, vídeos, blog, DIY Security Lab"
      />
    </Helmet>
  );
};

export default DynamicMeta;
