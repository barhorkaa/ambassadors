import { createEventAction, updateEventAction } from '@/app/lib/actions/events';
import SubmitButton from '@/app/ui/button/submit-button';
import EventTypeSelect from '@/app/ui/event-type/event-type-select';
import { EventDetailModel } from '@/models/event-models';
import { EventTypeMinModel } from '@/models/event-type-models';
import { format } from 'date-fns';

export default function EventForm(data: { eventTypes: EventTypeMinModel[]; event: EventDetailModel | null }) {
  return (
    <form action={data.event === null ? createEventAction : updateEventAction} className="card-body">
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Název akce</span>
        </label>
        <input
          id="name"
          defaultValue={data.event?.name}
          type="text"
          name="name"
          placeholder="Gymnázium Třídy Kapitána Jaroše"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Limit počtu lidí</span>
        </label>
        <input
          id="limit"
          defaultValue={data.event?.limit}
          type="number"
          name="limit"
          placeholder="Limit počtu lidí"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="who">
          <span className="label-text">Datum akce (může zůstat nevyplněno)</span>
        </label>
        <input
          id="date"
          defaultValue={data.event?.date ? format(data.event?.date, 'yyyy-MM-dd') : ''}
          type="date"
          name="date"
          placeholder=""
        />
      </div>
      <div className="form-control">
        <input id="id" value={data.event?.id} type="hidden" name="id" />
      </div>
      <EventTypeSelect selectedEvent={data.event?.eventTypeId} eventTypes={data.eventTypes} />
      <SubmitButton title={'Odeslat'} modalId={data.event === null ? undefined : data.event.id} />
    </form>
  );
}
