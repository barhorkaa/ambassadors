import React from "react";
import {createMotivationForm} from "@/app/lib/actions/motivation";
import {auth} from "@/auth";
import SubmitButton from "@/app/ui/button/submit-button";

export default async function MotivationForm() {
  const session = await auth();
  const userId = session?.user.id!; // TODO possibly remove !

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form action={createMotivationForm} className="card-body">
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
          <input id="who" type="text" name="who" placeholder="Ne / Ano + kto" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"
                 htmlFor="goals">
            <span className="label-text">Co byste chtěli jako ambasador dosáhnout?</span>
          </label>
          <input id="goals" type="text" name="goals" placeholder="Vaše cíle" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"
                 htmlFor="preferredEvents">
            <span className="label-text">Jakých akcí byste se chtěli převážně zúčastňovat?</span>
          </label>
          <input id="preferredEvents" type="text" name="preferredEvents" placeholder="Výjezdy, Dny otevřených dveří, Veltrhy ..." className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"
                 htmlFor="time">
            <span className="label-text">Kolik času budete mít na ambasadorskou činnost?</span>
          </label>
          <input id="time" type="text" name="time" placeholder="Vaše časové možnosti" className="input input-bordered" required />
        </div>
        <input id="id" type="hidden" name="id" value={userId} className="input input-bordered" required />
        <SubmitButton/>
      </form>
    </div>
  )
}