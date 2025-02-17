import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { GetCheckout } from '../../../../domain/entities/payment.entity';
import { UseCases } from '../../../../domain/usecases/UseCases';

export function useAddressForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const form = useFormContext<GetCheckout>();
  const zipCode = form.watch('address.zipCode');
  const selectedUf = form.watch('address.uf');

  const stateMap: Record<string, string> = useMemo(
    () => ({
      AC: 'Acre',
      AL: 'Alagoas',
      AP: 'Amapá',
      AM: 'Amazonas',
      BA: 'Bahia',
      CE: 'Ceará',
      DF: 'Distrito Federal',
      ES: 'Espírito Santo',
      GO: 'Goiás',
      MA: 'Maranhão',
      MT: 'Mato Grosso',
      MS: 'Mato Grosso do Sul',
      MG: 'Minas Gerais',
      PA: 'Pará',
      PB: 'Paraíba',
      PR: 'Paraná',
      PE: 'Pernambuco',
      PI: 'Piauí',
      RJ: 'Rio de Janeiro',
      RN: 'Rio Grande do Norte',
      RS: 'Rio Grande do Sul',
      RO: 'Rondônia',
      RR: 'Roraima',
      SC: 'Santa Catarina',
      SP: 'São Paulo',
      SE: 'Sergipe',
      TO: 'Tocantins',
    }),
    [],
  );

  const getAddressInfos = useCallback(
    async (cep: string) => {
      setLoading(true);
      try {
        const { result: ListedAddress } = await UseCases.address.list.execute({
          postalCode: cep,
        });

        if (ListedAddress.type === 'ERROR') {
          switch (ListedAddress.error.code) {
            case 'SERIALIZATION':
              toast.error('ERRO DE SERIALIZAÇÃO!');
              console.log(ListedAddress.error.payload);
              return;
            default:
              toast.error('ERRO DESCONHECIDO');
              return;
          }
        }

        const { city, state, street, uf, neighborhood } = ListedAddress.data;

        form.setValue('address.city', city);
        form.setValue('address.street', street);
        form.setValue('address.state', state);
        form.setValue('address.uf', uf);
        form.setValue('address.neighborhood', neighborhood);
      } finally {
        setLoading(false);
      }
    },
    [form],
  );

  function zipCodeMask(e: React.ChangeEvent<HTMLInputElement>) {
    const sanitizedValue = e.target.value.replace(/\D/g, '').slice(0, 8);
    form.setValue('address.zipCode', sanitizedValue);
  }

  useEffect(() => {
    if (zipCode && zipCode.length === 8) {
      getAddressInfos(zipCode);
    }
  }, [zipCode, getAddressInfos]);

  useEffect(() => {
    if (selectedUf && stateMap[selectedUf]) {
      form.setValue('address.state', stateMap[selectedUf]);
    }
  }, [selectedUf, form, stateMap]);

  return {
    t,
    form,
    loading,
    zipCodeMask,
  };
}
