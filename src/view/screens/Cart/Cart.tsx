import classNames from 'classnames';
import { FaTrash } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { LanguageTexts } from '../../../domain/locales/Language';
import { ROUTES } from '../../routes/Routes';
import { useWindowSize } from '../../utils/useWindowSize';
import { useCart } from './useCart';

export function Cart() {
  const { t, currentLang, cart, navigate } = useCart();
  const { width } = useWindowSize();

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-y-8 bg-gray-100 dark:bg-primary-dark text-gray-800 dark:text-white p-4">
        <h1 className="text-4xl font-bold text-center">{t(LanguageTexts.cart.emptyCart)}</h1>
        <Link
          to={ROUTES.products.call(currentLang)}
          className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105"
        >
          VEJA NOSSOS PRODUTOS
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        <div className="flex items-center gap-x-4 border-b pb-2">
          <button
            onClick={() => navigate(-1)}
            className="text-2xl text-blue-600 hover:text-blue-800 dark:text-white dark:hover:text-gray-300 transition duration-300"
          >
            <IoArrowBack size={24} />
          </button>
          <h2 className="text-3xl font-bold">{t(LanguageTexts.cart.title)}</h2>
        </div>

        <div className="w-full pt-6 flex flex-col gap-y-8">
          <p className="font-semibold text-lg">{t(LanguageTexts.cart.quantityTitle)}: {cart.items.length}</p>
          <ul className="space-y-6">
            {cart.items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b border-gray-300 pb-4 dark:border-gray-700"
              >
                <div className="flex gap-x-6">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg shadow-md"
                  />
                  <div>
                    <p className="font-semibold text-xl">{item.name}</p>
                    <p className="text-lg">{t(LanguageTexts.cart.price)}: R${item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-x-4">
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() =>
                        cart.updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="text-xl text-green-500 hover:text-green-700 transition duration-300"
                    >
                      <TiArrowSortedUp size={24} />
                    </button>
                    <button
                      onClick={() => {
                        if (item.quantity > 1) {
                          cart.updateItemQuantity(item.id, item.quantity - 1);
                        }
                      }}
                      className="text-xl text-red-500 hover:text-red-700 transition duration-300"
                    >
                      <TiArrowSortedDown size={24} />
                    </button>
                  </div>
                  <p className="text-xl font-bold">{item.quantity}</p>
                </div>

                <button
                  onClick={() => cart.remove(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full flex items-center transition duration-300"
                >
                  <FaTrash size={18} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={classNames(
            'flex justify-between items-center mt-6',
            width < 360 && 'flex-col'
          )}
        >
          <div className="flex flex-col gap-y-4">
            <button
              onClick={cart.clear}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105"
            >
              {t(LanguageTexts.cart.clearCart)}
            </button>
            <Link
              to={ROUTES.cart.checkout.call(currentLang)}
              className={classNames(
                'bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105',
                width < 360 && 'w-full text-center'
              )}
            >
              {t(LanguageTexts.cart.checkout)}
            </Link>
          </div>

          <div
            className={classNames(
              'font-bold text-2xl',
              width < 360 && 'text-center mt-4'
            )}
          >
            {t('cart.total')}: <span className="text-orange-500">R${cart.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
