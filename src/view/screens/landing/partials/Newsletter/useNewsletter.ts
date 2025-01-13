import { InsertNewsletter } from '@/domain/entities/Newsletter.entity';
import { UseCases } from '@/domain/usecases/UseCases';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

export function useNewsletter() {
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const form = useForm<InsertNewsletter>();
  const { register, handleSubmit } = form;

  const onSubmit: SubmitHandler<InsertNewsletter> = async (data) => {
    setLoading(true);
    try {
      const { result } = await UseCases.newsletter.insert.execute(data);

      if (result.type === 'ERROR') {
        switch (result.error.code) {
          case 'SERIALIZATION':
            toast.error('Erro de serialização!', { position: 'top-right' });
            return;
          default:
            toast.error('Erro desconhecido.', { position: 'top-right' });
            return;
        }
      }

      toast.success('Cadastrado com sucesso!', { position: 'top-right' });
    } catch {
      toast.error('Erro ao cadastrar newsletter.', { position: 'top-right' });
    } finally {
      setLoading(false);
    }
  };

  return {
    t,
    form,
    loading,
    register,
    onsubmit: handleSubmit(onSubmit),
  };
}
