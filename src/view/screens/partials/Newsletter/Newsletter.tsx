import { FormProvider } from 'react-hook-form';
import { Loader } from '../../../components/Loader';
import { useNewsletter } from './useNewsletter';

export function Newsletter() {
  const { t, form, loading, register, onsubmit } = useNewsletter();

  if (loading) <Loader />;

  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className=" bg-white dark:bg-gray-600 w-4/5 p-6 rounded-lg shadow-2xl flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-6">
          <h3 className="dark:text-white text-2xl md:text-3xl font-bold text-center">
            {t('NewsletterTitle')}
          </h3>
          <p className="text-xl dark:text-white text-center">
            {t('NewsletterDescription')}
          </p>
        </div>
        <FormProvider {...form}>
          <form
            onSubmit={onsubmit}
            className="bg-transparent border border-gray-500 flex p-1 rounded-full"
          >
            <input
              type="email"
              placeholder={t('NewsletterEmailPlaceholder')}
              className="text-gray-300 w-full outline-none bg-transparent text-sm px-4 py-3"
              {...register('email')}
            />
            <button
              type="submit"
              className="bg-[#F6911D] text-white hover:bg-orange-300 transition-all dark:text-white text-sm rounded-full px-6 py-3"
            >
              {t('NewsletterSubmitButton')}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}