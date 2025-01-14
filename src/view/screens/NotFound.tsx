import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo-complete-black.png';
import { ROUTES } from '../routes/Routes';

export function NotFound() {
  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-black dark:text-white flex flex-col items-center justify-center p-4">
      <img src={Logo} alt="Logo da Empresa" className="mb-4 w-50 h-40" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        It seems like you’ve tried to access a page that doesn’t exist.
      </p>
      <Link
        to={ROUTES.home.call()}
        className="px-6 py-3 bg-orange-primary text-white rounded-lg transition"
      >
        Back to DIY LAB
      </Link>
    </div>
  );
}
