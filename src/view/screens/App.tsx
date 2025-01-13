import { initMercadoPago } from '@mercadopago/sdk-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import { config } from '@/utils/config/config';
import { BrowserRouter } from '../routes/BrowserRouter';

initMercadoPago(config.MP_KEY);

export function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <BrowserRouter />
    </>
  );
}
