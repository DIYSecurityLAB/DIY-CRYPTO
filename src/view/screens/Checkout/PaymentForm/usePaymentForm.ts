import { useCallback, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import {
  Brand,
  GetCheckout,
  Installment,
} from '../../../../domain/entities/payment.entity';
import { UseCases } from '../../../../domain/usecases/UseCases';
import { useCartContext } from '../../../context/CartContext';

export function usePaymentForm() {
  const { items } = useCartContext();
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const [installment, setInstallment] = useState<Installment[]>();
  const [subtotal, setSubtotal] = useState<number>(0);
  const form = useFormContext<GetCheckout>();
  const [brand, setBrand] = useState<Brand>('undefined');
  const method = form.watch('method');
  const paymentOption = form.watch('paymentOption');
  const cardNumber = form.watch('cardNumber');
  const total = form.watch('total');

  useEffect(() => {
    setSubtotal(
      items.reduce((total, item) => total + item.price * item.quantity, 0),
    );
  }, [items]);

  const handleExpiryDateChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let value = event.target.value.replace(/\D/g, '');
      if (value.length >= 3) {
        value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
      }
      event.target.value = value.slice(0, 5);
      form.setValue('expiryDate', event.target.value);
    },
    [form],
  );

  const HandleWithInstallments = useCallback(async () => {
    if (paymentOption !== 'creditCard') {
      return;
    }

    setLoading(true);
    try {
      const { result } = await UseCases.payment.listInstallments.execute({
        brand,
        total: total,
      });

      if (result.type === 'ERROR') {
        switch (result.error.code) {
          case 'VALUE_TOO_LOW':
            toast.error('VALOR MUITO BAIXO');
            return;
          default:
            toast.error('ERRO AO BUSCAR PARCELAS');
            return;
        }
      }

      form.setValue('installments', result.data);
      setInstallment(result.data);
    } finally {
      setLoading(false);
    }
  }, [brand, total, form, paymentOption]);

  const applyCoupon = async () => {
    const restrictedItem = items.find((item) => item.id === '3');

    if (restrictedItem) {
      toast.warning(
        `Não é possível adicionar cupom para ${restrictedItem.name}, pois o desconto já está direto no produto.`,
      );
      return;
    }

    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    setLoading(true);
    try {
      const COUPON = {
        code: form.getValues('couponCode') || '',
      };

      const { result } = await UseCases.coupon.validate.execute({
        code: COUPON.code,
      });

      if (result.type === 'ERROR') {
        switch (result.error.code) {
          case 'SERIALIZATION':
            toast.error('ERRO DE SERIALIZAÇÃO, POR FAVOR ENTRAR EM CONTATO');
            return;
          case 'NOT_FOUND':
            form.setError('couponCode', {
              type: 'manual',
              message: 'Cupom inexistente',
            });
            return;
          default:
            form.setError('couponCode', {
              type: 'manual',
              message: 'Cupom inexistente',
            });
            return;
        }
      }

      const isActive = result.data.isActive;
      const minPurchaseValue = result.data.minPurchaseValue ?? 0;
      const maxDiscountValue = result.data.maxDiscountValue ?? Infinity;
      const discountValue = result.data.discountValue ?? 0;

      if (isActive && subtotal >= minPurchaseValue) {
        const calculatedDiscount =
          result.data.discountType === 'percentage'
            ? Math.min(subtotal * (discountValue / 100), maxDiscountValue)
            : Math.min(discountValue, maxDiscountValue);
        form.setValue('discount', calculatedDiscount);
      }
      toast.success('Cupom adicionado com sucesso!');
    } finally {
      setLoading(false);
    }
  };

  const identifyBrand = useCallback(
    async (cardNumber: string) => {
      setLoading(true);
      try {
        const { result } = await UseCases.payment.indentifyBrand.execute({
          cardNumber,
        });

        if (result.type === 'ERROR') {
          toast.error('Erro ao identificar bandeira');
          return;
        }

        if (result.data === 'unsupported') {
          toast.error('Cartão inválido ou não suportado.');
          setBrand('unsupported');
          return;
        }

        setBrand(result.data);
        form.setValue('brand', result.data);

        HandleWithInstallments();
      } finally {
        setLoading(false);
      }
    },
    [form, HandleWithInstallments],
  );

  useEffect(() => {
    if (cardNumber && cardNumber.length === 16) {
      identifyBrand(cardNumber);
    } else {
      setBrand('unsupported');
    }
  }, [cardNumber, identifyBrand]);

  return {
    t,
    items,
    form,
    brand,
    method,
    loading,
    subtotal,
    installment,
    paymentOption,
    applyCoupon,
    handleExpiryDateChange,
  };
}
