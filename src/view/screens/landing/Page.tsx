import { config } from '@/utils/config/config';
import { useEffect } from 'react';
import { Hero } from './partials/Hero';
import { PositivePoints } from './partials/PositivePoints';
import { Products } from './partials/Products';
import { Statistics } from './partials/Statistics';

export function Page() {
  useEffect(() => {
    const fetchData = async () => {
      await fetch(config.API_URL);
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <PositivePoints />
      <Statistics />
      <Products />
      {/* <BlogLinks /> */}
    </>
  );
}
