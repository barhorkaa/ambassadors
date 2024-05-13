import { createEventAction, updateEventAction } from '@/app/lib/actions/events';
import SubmitButton from '@/app/ui/button/submit-button';
import EventTypeSelect from '@/app/ui/event-type/event-type-select';
import { EventDetailModel } from '@/models/event-models';
import { EventTypeMinModel } from '@/models/event-type-models';
import { format } from 'date-fns';

export default function EventForm({
  eventTypes,
  event,
}: {
  eventTypes: EventTypeMinModel[];
  event: EventDetailModel | null;
}) {
  return (
    <form action={event === null ? createEventAction : updateEventAction} className="card-body">
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Název akce</span>
        </label>
        <input
          id="name"
          defaultValue={event?.name}
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
          defaultValue={event?.limit}
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
          defaultValue={event?.date ? format(event?.date, 'yyyy-MM-dd') : ''}
          type="date"
          name="date"
          placeholder=""
        />
      </div>
      <div className="form-control">
        <input id="id" value={event?.id} type="hidden" name="id" />
      </div>
      <EventTypeSelect selectedEvent={event?.eventTypeId} eventTypes={eventTypes} />
      <SubmitButton title={'Odeslat'} modalId={event === null ? undefined : event.id} />
    </form>
  );
}
