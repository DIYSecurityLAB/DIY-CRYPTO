import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { GetCheckout } from '../../../../domain/entities/payment.entity';

// Função para validar CPF
const isValidCPF = (cpf: string): boolean => {
  const pureCPF = cpf.trim();
  // Se houver qualquer caractere que não seja dígito, retorna falso
  if (!/^\d+$/.test(pureCPF)) return false;
  if (pureCPF.length !== 11 || /^(\d)\1+$/.test(pureCPF)) return false;

  let sum = 0;
  let rest: number;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(pureCPF.charAt(i)) * (10 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(pureCPF.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(pureCPF.charAt(i)) * (11 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;

  return rest === parseInt(pureCPF.charAt(10));
};

const isValidCNPJ = (cnpj: string): boolean => {
  const pureCNPJ = cnpj.trim();
  // Verifica se todos os caracteres são dígitos
  if (!/^\d+$/.test(pureCNPJ)) return false;
  if (pureCNPJ.length !== 14 || /^(\d)\1+$/.test(pureCNPJ)) return false;

  let size = pureCNPJ.length - 2;
  let numbers = pureCNPJ.substring(0, size);
  const digits = pureCNPJ.substring(size);
  let sum = 0;
  let pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;

  size = size + 1;
  numbers = pureCNPJ.substring(0, size);
  sum = 0;
  pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return result === parseInt(digits.charAt(1));
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
    isValidCNPJ,
  };
}
