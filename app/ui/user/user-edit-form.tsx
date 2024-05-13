import { editUserAction, editUserFullAction } from '@/app/lib/actions/users';
import SubmitButton from '@/app/ui/button/submit-button';
import { UserModel } from '@/models/user-models';

export default function UserEditForm({ user, full }: { user: UserModel; full: boolean }) {
  return (
    <form action={full ? editUserFullAction : editUserAction} className="card-body">
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Celé jméno</span>
        </label>
        <input id="name" defaultValue={user.name} type="text" name="name" placeholder="Jméno" required />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="phoneNumber">
          <span className="label-text">Telefonní číslo</span>
        </label>
        <input
          id="phoneNumber"
          defaultValue={Number(user.phone_number)}
          type="number"
          name="phoneNumber"
          placeholder="Telefónní číslo"
          required
        />
      </div>
      {full && (
        <>
          <div className="form-control">
            <label className="label" htmlFor="uco">
              <span className="label-text">UČO</span>
            </label>
            <input id="uco" defaultValue={Number(user.uco)} type="number" name="uco" placeholder="UČO" required />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input id="email" defaultValue={user.email} type="email" name="email" placeholder="E-mail" required />
          </div>
        </>
      )}
      <input id="id" type="hidden" name="id" value={user.id} required />
      <SubmitButton title={'Odeslat'} modalId={user.id} />
    </form>
  );
}
