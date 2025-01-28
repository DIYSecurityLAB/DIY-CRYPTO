import classNames from 'classnames';
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
                  className="group relative flex h-10 w-10 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-800 bg-red-700 hover:bg-red-600"
                >
                  <svg
                    viewBox="0 0 1.625 1.625"
                    className="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                    height="15"
                    width="15"
                  >
                    <path
                      d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"
                    ></path>
                    <path
                      d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"
                    ></path>
                    <path
                      d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    fill="none"
                    viewBox="0 0 39 7"
                    className="origin-right duration-500 group-hover:rotate-90"
                  >
                    <line strokeWidth="4" stroke="white" y2="5" x2="39" y1="5"></line>
                    <line
                      strokeWidth="3"
                      stroke="white"
                      y2="1.5"
                      x2="26.0357"
                      y1="1.5"
                      x1="12"
                    ></line>
                  </svg>
                  <svg width="16" fill="none" viewBox="0 0 33 39" className="">
                    <mask fill="white" id="path-1-inside-1_8_19">
                      <path
                        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                      ></path>
                    </mask>
                    <path
                      mask="url(#path-1-inside-1_8_19)"
                      fill="white"
                      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                    ></path>
                    <path strokeWidth="4" stroke="white" d="M12 6L12 29"></path>
                    <path strokeWidth="4" stroke="white" d="M21 6V29"></path>
                  </svg>
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
            <Link
              to={ROUTES.cart.checkout.call(currentLang)}
              className={classNames(
                'bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105',
                width < 360 && 'w-full text-center'
              )}
            >
              {t(LanguageTexts.cart.checkout)}
            </Link>
            <button
              onClick={cart.clear}
              className={classNames(
                'bg-gray-300 hover:bg-red-500 text-gray-700 hover:text-white px-3 py-1.5 rounded-full font-medium shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto',
                'w-32', // Largura fixa do botão
                width < 360 && 'w-full text-center text-sm'
              )}
            >
              <span className="text-sm">{t(LanguageTexts.cart.clearCart)}</span>
            </button>
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