'use client';

import { authenticate } from '@/app/lib/actions/authentication';
import FormControl from '@/app/ui/utils/form-control';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import { formActionInitialState } from '@/app/lib/actions/utils';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={errorMessage} buttonTitle="Přihlásit se">
      <FormControl title={'E-mail'} id={'email'} />
      <FormControl title={'Heslo'} id={'password'} type={'password'} />
      <div className="label">
        <span className="label-text-alt link link-hover">
          <Link href={'/password'}>Zapoměni jste heslo?</Link>
        </span>
      </div>
    </FormLayout>
  );
}
