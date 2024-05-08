import { createReportAction } from '@/app/lib/actions/report';
import SubmitButton from '@/app/ui/button/submit-button';
import MaterialAdd from '@/app/ui/material-report/material-add';
import { MaterialMinModel } from '@/models/material-models';

export default function ReportForm({ eventId, materials }: { eventId: string; materials: MaterialMinModel[] }) {
  console.log('tjsi sksm');
  return (
    <form action={createReportAction} className="card-body">
      <div className="form-control">
        <label className="label" htmlFor="notes">
          <span className="label-text">Co se na akci dělo?</span>
        </label>
        <input
          id="notes"
          type="text"
          name="notes"
          placeholder="Poznámky k dění na akci"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="ideas">
          <span className="label-text">Co do budoucna zlepšit?</span>
        </label>
        <input
          id="ideas"
          type="text"
          name="ideas"
          placeholder="Vaše nápady na zlepšení"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="numberOfAttendees">
          <span className="label-text">Kolik lidí bylo na akci?</span>
        </label>
        <input
          id="numberOfAttendees"
          type="number"
          name="numberOfAttendees"
          placeholder="Počet zúčastněných"
          className="input input-bordered"
          required
        />
      </div>
      <input id="id" type="hidden" name="eventId" value={eventId} className="input input-bordered" required />
      <MaterialAdd materials={materials} />
      <SubmitButton title={'Odeslat'} />
    </form>
    // </div>
  );
}
