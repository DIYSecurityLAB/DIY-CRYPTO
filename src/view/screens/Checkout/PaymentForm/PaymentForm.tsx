import { useTranslation } from 'react-i18next';
import Amex from '../../../assets/images/logocard/amex-logo.svg';
import Elo from '../../../assets/images/logocard/elo-logo.png';
import Hipercard from '../../../assets/images/logocard/hipercard-logo.png';
import MasterCard from '../../../assets/images/logocard/mastercard-logo.png';
import Visa from '../../../assets/images/logocard/visa-logo.png';
import { Loader } from '../../../components/Loader';
import { usePaymentForm } from './usePaymentForm';

export function PaymentForm() {
  const {
    brand,
    form,
    items,
    method,
    loading,
    subtotal,
    installment,
    paymentOption,
    applyCoupon,
    handleExpiryDateChange,
  } = usePaymentForm();
  const { t } = useTranslation();

  return (
    <>
      {loading && <Loader />}
      {method === 'EFI' && paymentOption === 'creditCard' && (
        <div className="w-full grid grid-cols-12 gap-x-4 gap-y-2">
          <div className="col-span-12">
            <label className="block text-gray-400 font-semibold mb-1 dark:text-white">
              {t('paymentForm.cardNamePlaceholder')}
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...form.register('cardName', { required: true })}
            />
            {form.formState.errors.cardName && (
              <span className="text-red-500 text-xs">
                {t('paymentForm.requiredField')}
              </span>
            )}
          </div>

          <div className="col-span-12 flex items-end gap-x-2">
            <div className="flex-grow">
              <label className="block text-gray-400 font-semibold mb-1 dark:text-white">
                {t('paymentForm.cardNumberPlaceholder')}
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...form.register('cardNumber', {
                  required: true,
                  maxLength: 16,
                })}
              />
              {form.formState.errors.cardNumber && (
                <span className="text-red-500 text-xs">
                  {t('paymentForm.requiredField')}
                </span>
              )}
            </div>
            <div className="w-14 h-10 flex items-center justify-center border border-gray-300 rounded dark:border-gray-600">
              {brand === 'visa' && (
                <img src={Visa} alt="Visa Logo" className="h-7" />
              )}
              {brand === 'mastercard' && (
                <img src={MasterCard} alt="MasterCard Logo" className="h-7" />
              )}
              {brand === 'amex' && (
                <img src={Amex} alt="Amex Logo" className="h-7" />
              )}
              {brand === 'elo' && (
                <img src={Elo} alt="Elo Logo" className="h-7" />
              )}
              {brand === 'hipercard' && (
                <img src={Hipercard} alt="Hipercard Logo" className="h-7" />
              )}
            </div>
          </div>

          <div className="col-span-6">
            <label className="block text-gray-400 font-semibold mb-1 dark:text-white">
              {t('paymentForm.expiryDatePlaceholder')}
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...form.register('expiryDate', { required: true, maxLength: 5 })}
              onChange={handleExpiryDateChange}
            />
            {form.formState.errors.expiryDate && (
              <span className="text-red-500 text-xs">
                {t('paymentForm.requiredField')}
              </span>
            )}
          </div>

          <div className="col-span-6">
            <label className="block text-gray-400 font-semibold mb-1 dark:text-white">
              {t('paymentForm.cvvPlaceholder')}
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...form.register('cvv', { required: true, maxLength: 3 })}
            />
            {form.formState.errors.cvv && (
              <span className="text-red-500 text-xs">
                {t('paymentForm.requiredField')}
              </span>
            )}
          </div>

          {installment && (
            <div className="col-span-12">
              <label className="block mb-2 text-sm font-medium text-gray-900 d">
                {t('paymentForm.installment')}
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...form.register('selectInstallments')}
              >
                {installment.map((option, idx) => (
                  <option
                    key={idx}
                    value={option.installment}
                    selected={idx === 0}
                  >
                    {option.installment}x {option.currency}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      {!(method === 'EFI' && paymentOption === 'creditCard') && (
        <h2 className="dark:text-white">
          Método de Pagamento Selecionado:{' '}
          <b className="uppercase dark:text-white">
            {paymentOption === 'creditCard' && t('paymentForm.creditCard')}
            {paymentOption === 'pix' && 'PIX'}
            {paymentOption === 'BTC' && 'Bitcoin'}
            {paymentOption === 'YAMPI' && 'Crédito ou PIX'}
          </b>
        </h2>
      )}

      <div className="py-4">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {t('checkout.couponCode')}
        </label>
        <div className="flex gap-x-2 mt-2">
          <input
            type="text"
            {...form.register('couponCode')}
            disabled={form.getValues('discount') ? true : false}
            onBlur={(event) => {
              const trimmedValue = event.target.value.trim();
              form.setValue('couponCode', trimmedValue);
            }}
            className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <button
            type="button"
            onClick={applyCoupon}
            disabled={form.getValues('discount') ? true : false}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            {t('checkout.apply')}
          </button>
        </div>
        {form.formState.errors.couponCode && (
          <span className="text-red-500 text-sm mt-1">
            {form.formState.errors.couponCode.message}
          </span>
        )}
      </div>
      <article className="flex lg:hidden lg:pl-32">
        <aside className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-md shadow-lg">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            {t('checkout.cartItems')}
          </h2>
          <ul className="flex flex-col gap-y-4 pt-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b border-gray-300 pb-4 dark:border-gray-700"
              >
                <div className="flex items-center gap-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-gray-500 dark:text-gray-300">
                      {t('checkout.price', {
                        price: item.price.toFixed(2),
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                    {item.quantity} x
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col p-4 gap-y-2 border-t border-b border-gray-300 dark:border-gray-600">
            <div className="w-full flex justify-between">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('checkout.subtotal')}
              </span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                R$ {(subtotal ?? 0).toFixed(2)}
              </span>
            </div>
            <div className="w-full flex justify-between ">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('checkout.shipping')}
              </span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                R$ {Number(form.watch('shipping.price') ?? 0).toFixed(2)}
              </span>
            </div>
            <div className="w-full flex justify-between ">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('checkout.discount')}
              </span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                -R$ {Number(form.watch('discount') ?? 0).toFixed(2)}
              </span>
            </div>
          </div>
          <div className="w-full flex justify-between p-4">
            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              {t('checkout.total')}
            </span>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              R$ {Number(form.watch('total') ?? 0).toFixed(2)}
            </span>
          </div>
        </aside>
      </article>
    </>
  );
}
