import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { GetCheckout } from '../../../../domain/entities/payment.entity';

// Função para validar CPF
const isValidCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  let rest;

  for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.charAt(9))) return false;

  sum = 0;

  for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;

  return rest === parseInt(cpf.charAt(10));
};

export function usePersonForm() {
  const { t } = useTranslation();
  const form = useFormContext<GetCheckout>();

  useEffect(() => {
    const savedFormData = localStorage.getItem('checkoutFormData');
    if (savedFormData) {
      const formData = JSON.parse(savedFormData);

      Object.keys(formData).forEach((key) => {
        form.setValue(key as keyof GetCheckout, formData[key]);
      });
    }
  }, [form]);

  const birthdayMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + '/' + value.slice(5, 9);
    }
    e.target.value = value;
  };

  const phoneNumber = '5511919050416';
  const message = t('personForm.internationalSupportMessage');
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return {
    t,
    form,
    whatsappLink,
    birthdayMask,
    isValidCPF,
  };
}
