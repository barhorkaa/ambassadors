'use client';

import { authenticate } from '@/app/lib/actions/authentication';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useFormState, useFormStatus } from 'react-dom';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="card">
      <form action={dispatch} className="card-body">
        <div className="form-control">
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input id="email" type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="password">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          {/*<label className="label">*/}
          {/*  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>*/}
          {/*</label>*/}
        </div>
        <LoginButton />
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

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button className="mt-4 w-full bg-amber-200 p-2" aria-disabled={pending}>
      Log in
    </button>
  );
}
