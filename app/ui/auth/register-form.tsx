'use client';

import { createUserAction } from '@/app/lib/actions/register';
import { findErrors, formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl from '@/app/ui/utils/form-control';
import { useFormState } from 'react-dom';

export default function RegisterForm() {
  const [state, dispatch] = useFormState(createUserAction, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={state}>
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
    </FormLayout>
  );
}
