import { editUserAction } from '@/app/lib/actions/users';
import SubmitButton from '@/app/ui/button/submit-button';
import { UserModel } from '@/models/userModel';

export default function UserEditForm(params: { user: UserModel }) {
  return (
    <form action={editUserAction} className="card-body">
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Celé jméno</span>
        </label>
        <input
          id="name"
          defaultValue={params.user.name}
          type="text"
          name="name"
          placeholder="Jméno"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="phoneNumber">
          <span className="label-text">Telefonní číslo</span>
        </label>
        <input
          id="phoneNumber"
          defaultValue={Number(params.user.phone_number)}
          type="number"
          name="phoneNumber"
          placeholder="Telefónní číslo"
          className="input input-bordered"
          required
        />
      </div>
      <input id="id" type="hidden" name="id" value={params.user.id} className="input input-bordered" required />
      <SubmitButton />
    </form>
  );
}
