import { Outlet, useLocation } from 'react-router-dom';
import { useLanguage } from '../../domain/locales/Language';
import WhatsAppButton from '../components/buttonWhatsApp';
import DynamicMeta from '../components/DynamicMeta';
import { ROUTES } from '../routes/Routes';
import { Newsletter } from '../screens/landing/partials/Newsletter/Newsletter';
import { Footer } from './Footer/Footer';
import Header from './Header/Header';

export function DefaultLayout() {
  useLanguage();
  const { pathname } = useLocation();

  const routesWithoutWhatsAppButton = [
    ROUTES.cart.path,
    ROUTES.cart.checkout.path,
  ];

  const shouldShowWhatsAppButton =
    routesWithoutWhatsAppButton.includes(pathname);

  return (
    <div className="text-black dark:text-white w-full max-w-[100vw] m-0">
      <DynamicMeta />
      <Header />
      <main>
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
      {!shouldShowWhatsAppButton && <WhatsAppButton />}
    </div>
  );
}
