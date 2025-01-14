import { useScaleFactor } from '@/view/hooks/useScaleFactor';
import { useWindowSize } from '@/view/utils/useWindowSize';
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import { PhoneIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { LanguageTexts } from '../../../domain/locales/Language';
import { ROUTES } from '../../routes/Routes';
import { useCurrentLang } from '../../utils/useCurrentLang';

type Products = {
  name: string;
  href: string;
  icon: IconType;
};

type NavLinksProps = {
  products: Products[];
  supportlink: Products[];
  isVisible: boolean;
  closeButton?: ReactNode;
  isLargeScreen: boolean;
  LinkCallBack?: () => void;
  closeMenu: () => void;
};

export function NavLinks({
  products,
  supportlink,
  closeButton,
  isVisible,
  isLargeScreen,
  LinkCallBack,
  closeMenu,
}: NavLinksProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { currentLang } = useCurrentLang();

  const callsToAction = [
    {
      name: t(LanguageTexts.header.contact_sales),
      href: 'https://api.whatsapp.com/send?phone=+5511919050416&text=Ol%C3%A1,%20Tudo%20bem?%0A%0AEu%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20DIY%20LAB...',
      icon: PhoneIcon,
    },
  ];

  const handleOnLink = (path: string, callback?: () => void) => {
    if (callback) {
      callback();
    }
    navigate(path);
    closeMenu();
  };

  const { width } = useWindowSize();
  const { scaleFactor } = useScaleFactor();

  const IS_LARGE_SCREEN = width >= 768;
  const IS_ZOOM_BIGGER_THAN_100 = scaleFactor > 1 && IS_LARGE_SCREEN;

  return (
    <>
      {isVisible && (
        <>
          {closeButton && (
            <div className="w-screen flex justify-end pt-4 pr-6">
              {closeButton}
            </div>
          )}
          <PopoverGroup className="flex flex-col items-center justify-center gap-y-10 lg:gap-x-12 lg:flex-row lg:gap-y-0">
            <Popover className="relative">
              <PopoverButton
                className={classNames(
                  'hover:text-[#F6911D] text-2xl flex items-center justify-center gap-x-1 font-semibold leading-6 text-black dark:text-white',
                  IS_ZOOM_BIGGER_THAN_100 && 'lg:text-base',
                  !IS_ZOOM_BIGGER_THAN_100 && 'lg:text-xl',
                )}
              >
                {t(LanguageTexts.header.links[0])}
                <MdKeyboardArrowDown
                  aria-hidden="true"
                  size={isLargeScreen ? 24 : 28}
                  className="flex-none text-gray-500 dark:text-white"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-32 lg:-left-8 top-full z-10 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 dark:text-white shadow-lg ring-1 ring-gray-900/5 transition"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleOnLink(item.href, LinkCallBack)}
                      className="w-full group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:text-[#F6911D] hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white dark:group-hover:bg-gray-700">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 dark:text-white hover:text-[#F6911D]"
                        />
                      </div>
                      <span className="font-semibold hover:text-[#F6911D]">
                        {item.name}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-gray-700">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 hover:text-[#F6911D]"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none text-gray-400 dark:text-gray-300"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <button
              onClick={() =>
                handleOnLink(ROUTES.about.call(currentLang), LinkCallBack)
              }
              className={classNames(
                'text-2xl font-semibold leading-6 text-black dark:text-white hover:text-[#F6911D]',
                IS_ZOOM_BIGGER_THAN_100 && 'lg:text-base',
                !IS_ZOOM_BIGGER_THAN_100 && 'lg:text-xl',
              )}
            >
              {t(LanguageTexts.header.links[1])}
            </button>

            <Popover className="relative">
              <PopoverButton
                className={classNames(
                  'hover:text-[#F6911D] text-2xl flex items-center justify-center gap-x-1 font-semibold leading-6 text-black dark:text-white',
                  IS_ZOOM_BIGGER_THAN_100 && 'lg:text-base',
                  !IS_ZOOM_BIGGER_THAN_100 && 'lg:text-xl',
                )}
              >
                {t(LanguageTexts.header.links[4])}
                <MdKeyboardArrowDown
                  aria-hidden="true"
                  size={isLargeScreen ? 24 : 28}
                  className="flex-none text-gray-500 dark:text-white"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-32 lg:-left-8 top-full z-10 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 dark:text-white shadow-lg ring-1 ring-gray-900/5 transition"
              >
                <div className="p-4">
                  {supportlink.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleOnLink(item.href, LinkCallBack)}
                      className="w-full group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:text-[#F6911D] hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white dark:group-hover:bg-gray-700">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 dark:text-white hover:text-[#F6911D]"
                        />
                      </div>
                      <span className="font-semibold hover:text-[#F6911D]">
                        {item.name}
                      </span>
                    </button>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <a
              href="https://www.alfredp2p.io/"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                'flex items-center text-2xl font-semibold leading-6 text-black dark:text-white hover:text-[#F6911D]',
                IS_ZOOM_BIGGER_THAN_100 && 'lg:text-base',
                !IS_ZOOM_BIGGER_THAN_100 && 'lg:text-xl',
              )}
            >
              <span className="hover:text-[#F6911D]">
                {t(LanguageTexts.header.links[5])}
              </span>
            </a>
          </PopoverGroup>
        </>
      )}
    </>
  );
}
