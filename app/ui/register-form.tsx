import React from "react";

export default function RegisterForm() {
  return(
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
        <label className="label"
               htmlFor="name">
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
          <label className="label"
                 htmlFor="password">
            <span className="label-text">Heslo</span>
          </label>
          <input id="password" type="password" name="password" placeholder="Heslo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"
                 htmlFor="uco">
            <span className="label-text">UČO</span>
          </label>
          <input id="uco" type="number" name="uco" placeholder="UČO" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"
                 htmlFor="phone_number">
            <span className="label-text">Telefonní číslo</span>
          </label>
          <input id="phone" type="number" name="phone" placeholder="Telefónní číslo" className="input input-bordered" required />
        </div>
        <RegisterButton/>
      </form>
    </div>
  );
}

function RegisterButton() {
  return(
    <div>

    </div>
  )
}