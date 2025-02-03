import { useCallback, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';
import { GetCheckout, Items } from '../../../../domain/entities/payment.entity';
import { CalculatedShipping } from '../../../../domain/entities/Shipping.entity';
import { UseCases } from '../../../../domain/usecases/UseCases';

export function useShippingForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [shippingOptions, setShippingOptions] = useState<CalculatedShipping[]>(
    [],
  );
  const form = useFormContext<GetCheckout>();

  const postalCode = form.getValues('address.zipCode') || ''; // Valor padrão vazio
  const items = form.getValues('items'); // Valor padrão como array vazio

  const setShippingOption = useCallback(
    (option: CalculatedShipping) => {
      form.setValue('shipping', option);
    },
    [form],
  );

  const calculateShipping = useCallback(async () => {
    setLoading(true);
    try {
      if (!postalCode || postalCode.length < 8) {
        console.error('CEP inválido');
        return;
      }
      if (!Array.isArray(items) || items.length === 0) {
        console.error('Itens inválidos ou não definidos');
        return;
      }

      const skus = items.map((item: Items) => ({
        price: item.price,
        quantity: item.quantity,
        length: item.length || 1,
        width: item.width || 1,
        height: item.height || 1,
        weight: item.weight || 1,
      }));

      const requestData = {
        zipcode: postalCode,
        amount: items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        ),
        skus,
      };

      const { result } = await UseCases.shipping.calculate.execute(requestData);

      if (result.type === 'ERROR') {
        switch (result.error.code) {
          case 'SERIALIZATION':
            toast.error('ERRO DE SERIALIZAÇÃO!');
            break;
          default:
            toast.error('ERRO DESCONHECIDO');
        }
        return;
      }

      setShippingOptions(result.data);
    } catch (error) {
      console.error('Erro ao calcular frete:', error);
    } finally {
      setLoading(false);
    }
  }, [postalCode, items]);

  useEffect(() => {
    calculateShipping();
  }, [postalCode, calculateShipping]);

  return {
    loading,
    shippingOptions,
    shipping: {
      value: form.getValues('shipping'),
      set: setShippingOption,
    },
  };
}
