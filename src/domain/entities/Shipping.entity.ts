import {
  CalculatedShippingModel,
  CalculateShippingModel,
} from '../../data/model/Shipping.model';

export class CalculateShipping {
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

  static toModel(entity: CalculateShipping): CalculateShippingModel {
    const model = new CalculateShippingModel();

    model.zipcode = entity.zipcode;
    model.amount = entity.amount;
    model.skus = entity.skus.map((sku) => ({
      price: sku.price,
      quantity: sku.quantity,
      length: sku.length,
      width: sku.width,
      height: sku.height,
      weight: sku.weight,
    }));

    return model;
  }
}

// Classe para transformar os dados de saída
export class CalculatedShipping {
  name!: string;
  service!: string;
  price!: number;
  days!: number;
  logoUrl!: string;
  quoteId!: number;

  static fromModel(
    model: CalculatedShippingModel['quotes'][number],
  ): CalculatedShipping {
    const entity = new CalculatedShipping();

    entity.name = model.name;
    entity.service = model.service;
    entity.price = model.price;
    entity.days = model.days;
    entity.logoUrl = model.logo_url;
    entity.quoteId = model.quote_id;

    return entity;
  }
}
