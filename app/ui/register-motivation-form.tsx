'use client';

import React from "react";
import {useFormState, useFormStatus} from "react-dom";
import {createMotivationForm} from "@/app/lib/actions";

export default function RegisterMotivationForm(props: {id: string}) {
  const [errorMessage, dispatch] = useFormState(createMotivationForm, props.id);

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form action={dispatch} className="card-body">
        <div className="form-control">
          <label className="label"
                 htmlFor="name">
            <span className="label-text">Proč jste se rozhodli k nám přidat?</span>
          </label>
          <input id="why" type="text" name="why" placeholder="Proč?" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="who">
            <span className="label-text">Doporučil vám někto přidat se k programu? Pokud ano, kto?</span>
          </label>
          <input id="who" type="email" name="who" placeholder="Ne / Ano + kto" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"
                 htmlFor="goals">
            <span className="label-text">Co byste chtěli jako ambasador dosáhnout?</span>
          </label>
          <input id="goals" type="password" name="goals" placeholder="Vaše cíle" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"
                 htmlFor="preffered">
            <span className="label-text">Jakých akcí byste se chtěli převážně zúčastňovat?</span>
          </label>
          <input id="preffered" type="number" name="preffered" placeholder="Výjezdy, Dny otevřených dveří, Veltrhy ..." className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"
                 htmlFor="time">
            <span className="label-text">Kolik času budete mít na ambasadorskou činnost?</span>
          </label>
          <input id="time" type="number" name="time" placeholder="Vaše časové možnosti" className="input input-bordered" required />
        </div>
        <RegisterButton/>
      </form>
    </div>
  )
}

function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <button className="mt-4 w-full bg-amber-200 p-2" aria-disabled={pending}>
      Odeslat
    </button>
  )
}