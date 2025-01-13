import classNames from 'classnames';
import { t } from 'i18next';
import { useState } from 'react';
import { Loader } from '../../../components/Loader';
import { useCartContext } from '../../../context/CartContext';
import { useShippingForm } from './useShippingForm';

export function ShippingForm() {
  const { items } = useCartContext();
  const { loading, shippingOptions, shipping } = useShippingForm();

  // Estado para controlar o botão selecionado, agora tipado como string | number | null
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null,
  );

  if (!shippingOptions.length) {
    return <Loader />;
  }

  return (
    <>
      {loading && <Loader />}
      <div className="w-full flex flex-col justify-center items-center gap-y-6">
        {shippingOptions.map((option) => {
          const foundProduct = items.find((produto) => produto.id !== '1');
          const deliveryTime = foundProduct ? option.days + 15 : option.days;

          // Verifica se a opção foi selecionada
          const isSelected = selectedOption === option.quoteId;

          return (
            <button
              key={option.quoteId}
              type="button"
              className={classNames(
                'w-full flex items-center justify-around rounded-md border border-solid border-gray-400 px-4 py-2',
                'transition-colors duration-300 ease-in-out hover:bg-orange-500 dark:bg-gray-100 dark:border-black',
                isSelected &&
                  'bg-orange-primary dark:bg-orange-primary dark:hover:bg-orange-600',
                'md:w-3/4',
                'lg:w-full',
              )}
              onClick={() => {
                setSelectedOption(option.quoteId); // Atualiza o botão selecionado com quoteId como number
                shipping.set(option); // Atualiza o estado de shipping com a opção escolhida
              }}
            >
              <img
                src={option.logoUrl}
                alt={option.service}
                className="w-28 h-12"
              />
              <div className="w-full flex flex-col items-center justify-center text-left">
                <h4 className="text-xl uppercase font-bold">
                  {option.service}
                </h4>
                <h5 className="text-base font-semibold">
                  R${' '}
                  {parseFloat(option.price.toString()).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </h5>
                <span className="text-base font-semibold">
                  {deliveryTime} {t('checkout.days')}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
