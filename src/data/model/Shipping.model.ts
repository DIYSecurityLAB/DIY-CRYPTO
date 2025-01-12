import { z } from 'zod';

// Modelo de entrada esperado pela API
export class CalculateShippingModel {
  zipcode!: string;
  amount!: number;
  skus!: {
    price: number;
    quantity: number;
    length: number;
    width: number;
    height: number;
    weight: number;
  }[];
}

// Modelo de uma cotação de frete na resposta da API
const ShippingQuote = z.object({
  name: z.string(),
  service: z.string(),
  price: z.number(),
  days: z.number(),
  logo_url: z.string(),
  quote_id: z.number(),
});

// Modelo de saída contendo as cotações de frete
export const CalculatedShippingModel = z.object({
  quotes: z.array(ShippingQuote),
});

export type CalculatedShippingModel = z.infer<typeof CalculatedShippingModel>;
