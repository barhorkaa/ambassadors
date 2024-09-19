'use client';

import { editUserAction, editUserFullAction } from '@/app/lib/actions/user';
import { findErrors, formActionInitialState } from '@/app/lib/actions/utils';
import UserRoleSelect from '@/app/ui/user/user-role-select';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl from '@/app/ui/utils/form-control';
import { UserModel } from '@/models/user-models';
import { useFormState } from 'react-dom';

interface UserEditFormProps {
  user: UserModel;
  full: boolean;
}

export default function UserEditForm({ user, full }: UserEditFormProps) {
  const [state, dispatch] = useFormState(full ? editUserFullAction : editUserAction, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={state} modalId={user.id}>
      <FormControl
        title={'Celé jméno'}
        id={'name'}
        defaultValue={user.name}
        placeholder={'Jméno'}
        errorMessage={findErrors('name', state.errors)[0]}
      />
      <FormControl
        title={'Telefonní číslo'}
        id={'phoneNumber'}
        type={'text'}
        defaultValue={user.phone_number}
        errorMessage={findErrors('phone_number', state.errors)[0]}
      />
      {full && (
        <>
          <FormControl
            title={'UČO'}
            id={'uco'}
            type={'number'}
            defaultValue={+user.uco}
            errorMessage={findErrors('uco', state.errors)[0]}
          />
          <FormControl
            title={'E-mail'}
            id={'email'}
            type={'email'}
            defaultValue={user.email}
            errorMessage={findErrors('email', state.errors)[0]}
          />
          <UserRoleSelect currentRole={user.role} />
        </>
      )}
      <input id="id" type="hidden" name="id" value={user.id} required />
    </FormLayout>
  );
}
