import { createReportAction } from '@/app/lib/actions/report';
import SubmitButton from '@/app/ui/button/submit-button';

export default function ReportForm({ eventId }: { eventId: string }) {
  console.log('tjsi sksm');
  return (
    <form action={createReportAction} className="card-body">
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Co se na akci dělo?</span>
        </label>
        <input
          id="why"
          type="text"
          name="notes"
          placeholder="Poznámky k dění na akci"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="who">
          <span className="label-text">Co do budoucna zlepšit?</span>
        </label>
        <input
          id="who"
          type="text"
          name="ideas"
          placeholder="Vaše nápady na zlepšení"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="numerOfAttendees">
          <span className="label-text">Kolik lidí bylo na akci?</span>
        </label>
        <input
          id="numerOfAttendees"
          type="number"
          name="numerOfAttendees"
          placeholder="Počet zúčastněných"
          className="input input-bordered"
          required
        />
      </div>
      <input id="id" type="hidden" name="eventId" value={eventId} className="input input-bordered" required />
      <SubmitButton title={'Odeslat'} />
    </form>
    // </div>
  );
}
