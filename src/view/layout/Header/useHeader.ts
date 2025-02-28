import { useTheme } from '@/view/hooks/useTheme';
import { useProducts } from '@/view/utils/useProduct';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBloggerB } from 'react-icons/fa';
import { MdHelp, MdSchool, MdTouchApp, MdVideoLibrary } from 'react-icons/md';
import { ThemeMode } from '../../../domain/entities/theme.entity';
import { LanguageTexts } from '../../../domain/locales/Language';
import { ROUTES } from '../../routes/Routes';
import { useCurrentLang } from '../../utils/useCurrentLang';
import { useWindowSize } from '../../utils/useWindowSize';

export function useHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTheme, toggleTheme } = useTheme();
  const { width } = useWindowSize();
  const [isDarkTheme, setIsDarkTheme] = useState(
    currentTheme === ThemeMode.dark,
  );
  const { t } = useTranslation();
  const { currentLang } = useCurrentLang();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      ThemeMode.dark,
      currentTheme === ThemeMode.dark,
    );
    setIsDarkTheme(currentTheme === ThemeMode.dark);
  }, [currentTheme]);

  const isLargeScreen = width > 1024;

  const { products } = useProducts();

  const productsMenu = products
    .filter((product) => product.id !== '10000')
    .map((product) => ({
      name: product.name,
      href: ROUTES.cart.product.call(currentLang, product.name, product.id),
      icon: MdTouchApp,
    }));

  const supportlink = [
    {
      name: t(LanguageTexts.header.links[3]),
      href: ROUTES.tutorials.call(currentLang),
      icon: MdSchool,
    },
    {
      name: 'Videos',
      href: ROUTES.videos.call(currentLang),
      icon: MdVideoLibrary,
    },
    {
      name: t(LanguageTexts.header.links[2]),
      href: ROUTES.blogs.call(currentLang),
      icon: FaBloggerB,
    },
    {
      name: t(LanguageTexts.header.links[4]),
      href: ROUTES.Support.call(currentLang),
      icon: MdHelp,
    },
  ];

  return {
    menu: {
      isOpen: mobileMenuOpen,
      close: () => setMobileMenuOpen(false),
      open: () => setMobileMenuOpen(true),
    },
    theme: {
      toggle: toggleTheme,
      isDarkTheme,
    },
    productsMenu,
    supportlink,
    isLargeScreen,
    isScrolled,
  };
}
