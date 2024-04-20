import { editUserFullAction } from '@/app/lib/actions/users';
import SubmitButton from '@/app/ui/button/submit-button';
import { UserModel } from '@/models/userModel';

export default function UserEditFullForm(params: { user: UserModel }) {
  return (
    <form action={editUserFullAction} className="card-body">
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
      <div className="form-control">
        <label className="label" htmlFor="uco">
          <span className="label-text">UČO</span>
        </label>
        <input
          id="uco"
          defaultValue={Number(params.user.uco)}
          type="number"
          name="uco"
          placeholder="UČO"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          id="email"
          defaultValue={params.user.email}
          type="email"
          name="email"
          placeholder="E-mail"
          className="input input-bordered"
          required
        />
      </div>
      <input
        id="id"
        defaultValue={params.user.email}
        type="hidden"
        name="id"
        value={params.user.id}
        className="input input-bordered"
        required
      />
      <SubmitButton />
    </form>
  );
}
