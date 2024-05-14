import { editUserAction, editUserFullAction } from '@/app/lib/actions/users';
import SubmitButton from '@/app/ui/button/submit-button';
import UserRoleSelect from '@/app/ui/user/user-role-select';
import FormControl from '@/app/ui/utils/form-control';
import { UserModel } from '@/models/user-models';

export default function UserEditForm({ user, full }: { user: UserModel; full: boolean }) {
  return (
    <form action={full ? editUserFullAction : editUserAction} className="card-body">
      <FormControl title={'Celé jméno'} id={'name'} defaultValue={user.name} placeholder={'Jméno'} />
      <FormControl title={'Telefonní číslo'} id={'phoneNumber'} type={'text'} defaultValue={user.phone_number} />
      {full && (
        <>
          <FormControl title={'UČO'} id={'uco'} type={'number'} defaultValue={+user.uco} />
          <FormControl title={'E-mail'} id={'email'} type={'email'} defaultValue={user.email} />
          <UserRoleSelect currentRole={user.role} />
        </>
      )}
      <input id="id" type="hidden" name="id" value={user.id} required />
      <SubmitButton title={'Odeslat'} modalId={user.id} />
    </form>
  );
}
