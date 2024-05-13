import { createMotivationAction } from '@/app/lib/actions/motivation';
import SubmitButton from '@/app/ui/button/submit-button';

export default function MotivationForm({ userId }: { userId: string }) {
  return (
    <div className="card">
      <form action={createMotivationAction} className="card-body">
        <div className="form-control">
          <label className="label" htmlFor="name">
            <span className="label-text">Proč jste se rozhodli k nám přidat?</span>
          </label>
          <input id="why" type="text" name="why" placeholder="Proč?" required />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="who">
            <span className="label-text">Doporučil vám někto přidat se k programu? Pokud ano, kto?</span>
          </label>
          <input id="who" type="text" name="who" placeholder="Ne / Ano + kto" required />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="goals">
            <span className="label-text">Co byste chtěli jako ambasador dosáhnout?</span>
          </label>
          <input id="goals" type="text" name="goals" placeholder="Vaše cíle" required />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="preferredEvents">
            <span className="label-text">Jakých akcí byste se chtěli převážně zúčastňovat?</span>
          </label>
          <input
            id="preferredEvents"
            type="text"
            name="preferredEvents"
            placeholder="Výjezdy, Dny otevřených dveří, Veltrhy ..."
            required
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="time">
            <span className="label-text">Kolik času budete mít na ambasadorskou činnost?</span>
          </label>
          <input id="time" type="text" name="time" placeholder="Vaše časové možnosti" required />
        </div>
        <input id="id" type="hidden" name="userId" value={userId} required />
        <SubmitButton title={'Odeslat'} />
      </form>
    </div>
  );
}
