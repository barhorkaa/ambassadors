'use client';

import { createUserAction } from '@/app/lib/actions/register';
import SubmitButton from '@/app/ui/button/submit-button';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';

export default function RegisterForm() {
  const [errorMessage, dispatch] = useFormState(createUserAction, undefined);

  return (
    <div className="card">
      <form action={dispatch} className="card-body">
        <div className="form-control">
          <label className="label" htmlFor="name">
            <span className="label-text">Celé jméno</span>
          </label>
          <input id="name" type="text" name="name" placeholder="Jméno" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input id="email" type="email" name="email" placeholder="E-mail" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="password">
            <span className="label-text">Heslo</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Heslo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="uco">
            <span className="label-text">UČO</span>
          </label>
          <input id="uco" type="number" name="uco" placeholder="UČO" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="phoneNumber">
            <span className="label-text">Telefonní číslo</span>
          </label>
          <input
            id="phoneNumber"
            type="number"
            name="phoneNumber"
            placeholder="Telefónní číslo"
            className="input input-bordered"
            required
          />
        </div>
        <SubmitButton title={'Registrovat se'} />
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
