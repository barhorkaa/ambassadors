'use client';

import { createUserAction } from '@/app/lib/actions/register';
import SubmitButton from '@/app/ui/button/submit-button';
import FormControl, { findErrors } from '@/app/ui/utils/form-control';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';

export default function RegisterForm() {
  const [state, dispatch] = useFormState(createUserAction, { errors: [], generic: undefined });

  return (
    <form action={dispatch} className="card-body">
      <FormControl
        title={'Celé jméno'}
        id={'name'}
        placeholder={'Jméno'}
        errorMessage={findErrors('name', state.errors)[0]}
      />
      <FormControl title={'E-mail'} id={'email'} errorMessage={findErrors('email', state.errors)[0]} />
      <FormControl
        title={'Heslo'}
        id={'password'}
        type={'password'}
        errorMessage={findErrors('password', state.errors)[0]}
      />
      <FormControl title={'UČO'} id={'uco'} errorMessage={findErrors('uco', state.errors)[0]} />
      <FormControl
        title={'Telefonní číslo'}
        id={'phoneNumber'}
        errorMessage={findErrors('phone_number', state.errors)[0]}
      />
      <SubmitButton title={'Registrovat se'} />
      <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
        {state.generic && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{state.generic}</p>
          </>
        )}
      </div>
    </form>
  );
}
