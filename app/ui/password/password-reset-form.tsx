'use client';

import { changePassword } from '@/app/lib/actions/password';
import { findErrors, formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl from '@/app/ui/utils/form-control';
import { useFormState } from 'react-dom';

export default function PasswordResetForm({ email }: { email: string }) {
  const [state, dispatch] = useFormState(changePassword, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={state}>
      <FormControl
        title={'Nové heslo'}
        id={'newPassword'}
        type={'password'}
        errorMessage={findErrors('newPassword', state.errors)[0]}
      />
      <input id="email" type="hidden" name="email" value={email} required />
    </FormLayout>
  );
}
