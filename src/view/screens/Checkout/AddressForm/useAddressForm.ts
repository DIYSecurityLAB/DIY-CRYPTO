import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

  // Ref para guardar o CEP previamente consultado
  const prevZipCodeRef = useRef<string>('');

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
      if (!cep || cep.length !== 8) return;

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

        form.setValue('address.city', city, { shouldDirty: true });
        form.setValue('address.street', street, { shouldDirty: true });
        form.setValue('address.state', state, { shouldDirty: true });
        form.setValue('address.uf', uf, { shouldDirty: true });
        form.setValue('address.neighborhood', neighborhood, {
          shouldDirty: true,
        });
      } finally {
        setTimeout(() => setLoading(false), 300); // Pequeno delay para evitar re-renders muito rápidos
      }
    },
    [form],
  );

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Só dispara se o CEP for válido e diferente do último consultado
    if (zipCode && zipCode.length === 8 && zipCode !== prevZipCodeRef.current) {
      prevZipCodeRef.current = zipCode; // Atualiza o CEP previamente consultado

      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

      debounceTimeout.current = setTimeout(() => {
        getAddressInfos(zipCode);
      }, 500); // Aguarda 500ms antes de chamar a API
    }
  }, [zipCode, getAddressInfos]);

  useEffect(() => {
    if (selectedUf && stateMap[selectedUf]) {
      form.setValue('address.state', stateMap[selectedUf]);
    }
  }, [selectedUf, form, stateMap]);

  function zipCodeMask(e: React.ChangeEvent<HTMLInputElement>) {
    const sanitizedValue = e.target.value.replace(/\D/g, '').slice(0, 8);
    form.setValue('address.zipCode', sanitizedValue);
  }

  return {
    t,
    form,
    loading,
    zipCodeMask,
  };
}
