'use client';

import { authenticate } from '@/app/lib/actions/authentication';
import SubmitButton from '@/app/ui/button/submit-button';
import FormControl from '@/app/ui/utils/form-control';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useFormState } from 'react-dom';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="card-body">
      <FormControl title={'E-mail'} id={'email'} />
      <FormControl title={'Heslo'} id={'password'} type={'password'} />
      <div className="label">
        <span className="label-text-alt link link-hover">
          <Link href={'/password'}>Zapoměni jste heslo?</Link>
        </span>
      </div>
      <SubmitButton title={'Přihlásit se'} />
      {errorMessage && (
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-500">{errorMessage}</p>
        </div>
      )}
    </form>
  );
}
