'use client';

import { getEmailAction } from '@/app/lib/actions/password';
import { findErrors, formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl from '@/app/ui/utils/form-control';
import { useFormState } from 'react-dom';

export default function EmailForm() {
  const [state, dispatch] = useFormState(getEmailAction, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={state}>
      <FormControl title={'Email'} id={'email'} type={'email'} errorMessage={findErrors('email', state.errors)[0]} />
    </FormLayout>
  );
}
