'use client';

import { createUserAction } from '@/app/lib/actions/register';
import SubmitButton from '@/app/ui/button/submit-button';
import FormControl from '@/app/ui/utils/form-control';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';

export default function RegisterForm() {
  const [errorMessage, dispatch] = useFormState(createUserAction, undefined);

  return (
    <form action={dispatch} className="card-body">
      <FormControl title={'Celé jméno'} id={'name'} placeholder={'Jméno'} />
      <FormControl title={'E-mail'} id={'email'} />
      <FormControl title={'Heslo'} id={'password'} />
      <FormControl title={'UČO'} id={'uco'} />
      <FormControl title={'Telefonní číslo'} id={'phoneNumber'} />
      <SubmitButton title={'Registrovat se'} />
      <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
        {errorMessage && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}
