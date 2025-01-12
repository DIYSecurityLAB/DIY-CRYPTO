import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logoBlack from '../assets/logo/logo-complete-black.png';
import logoWhite from '../assets/logo/logo-complete-white.png';
import { BackgroundAnimatedProduct } from '../components/BackgroundAnimatedProduct';
import { useScaleFactor } from '../hooks/useScaleFactor';
import { useHeader } from '../layout/Header/useHeader';
import { useWindowSize } from '../utils/useWindowSize';

export function Support() {
  const { t } = useTranslation();
  const { theme } = useHeader();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [responseType, setResponseType] = useState<'success' | 'error' | null>(
    null,
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResponseMessage(null);

    const formData = new FormData(event.currentTarget);

    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseType('success');
        setResponseMessage(t('support.successMessage'));
      } else {
        console.error('Error:', result.error);
        setResponseType('error');
        setResponseMessage(t('support.errorMessage'));
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseType('error');
      setResponseMessage(t('support.errorMessage'));
    } finally {
      setIsLoading(false);
    }
  };

  const { width } = useWindowSize();
  const { scaleFactor } = useScaleFactor();

  const IS_LARGE_SCREEN = width >= 768;
  const IS_ZOOM_BIGGER_THAN_100 = scaleFactor > 1 && IS_LARGE_SCREEN;

  return (
    <>
      {isLoading && (
        <span className="loader border-t-transparent border-4 border-white rounded-full w-6 h-6 animate-spin"></span>
      )}
      <BackgroundAnimatedProduct />
      <section
        className={classNames(
          'min-h-screen flex items-center justify-center',
          IS_ZOOM_BIGGER_THAN_100 && 'pt-16',
        )}
      >
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <aside className="col-span-full md:col-span-6 flex flex-col items-center">
              <img
                src={theme.isDarkTheme ? logoWhite : logoBlack}
                alt="Logo"
                className="w-[150px] h-auto mb-8"
              />

              <div className="flex flex-col gap-6 w-full max-w-[368px]">
                <a
                  href="https://chat.whatsapp.com/HtFSC2xozFhLEFxaDf5Psx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-[24px] shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <FaWhatsapp size={32} className="text-green-500" />
                  <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    WhatsApp
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/diyseclab.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-[24px] shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <FaInstagram size={32} className="text-pink-500" />
                  <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    Instagram
                  </span>
                </a>
                <a
                  href="https://x.com/diyseclab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-[24px] shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <FaXTwitter
                    size={32}
                    className="text-black dark:text-white"
                  />
                  <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    X
                  </span>
                </a>
              </div>
            </aside>

            <article className="col-span-full md:col-span-6 flex items-center justify-center">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-[370px] bg-white dark:bg-gray-800 p-8 rounded-lg flex flex-col gap-y-6"
              >
                <h3 className="font-bold text-lg md:text-2xl text-center text-gray-900 dark:text-gray-100">
                  {t('support.sendMessage')}
                </h3>

                {responseMessage && (
                  <p
                    className={`text-center font-medium ${
                      responseType === 'success' && 'text-green-600'
                    } ${responseType === 'error' && 'text-red-600'}`}
                  >
                    {responseMessage}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder={t('support.firstName')}
                    required
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder={t('support.lastName')}
                    required
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder={t('support.email')}
                  required
                  className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
                <textarea
                  name="message"
                  placeholder={t('support.message')}
                  required
                  className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-bold transition bg-black hover:bg-gray-800 text-white dark:bg-gray-900 dark:hover:bg-blue-800 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {t('support.send')}
                </button>
              </form>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
