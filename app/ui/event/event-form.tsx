import { createEventAction, updateEventAction } from '@/app/lib/actions/events';
import SubmitButton from '@/app/ui/button/submit-button';
import EventTypeSelect from '@/app/ui/event-type/event-type-select';
import FormControl from '@/app/ui/utils/form-control';
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
      <FormControl
        title={'Název akce'}
        id={'name'}
        defaultValue={event?.name}
        placeholder={'Gymnázium Třídy Kapitána Jaroše'}
      />
      <FormControl
        title={'Limit počtu lidí'}
        id={'limit'}
        type={'number'}
        placeholder={'Kolik ambasadorů může na akci'}
        defaultValue={event?.limit}
      />
      <FormControl
        title={'Datum akce (může zůstat nevyplněno)'}
        id={'date'}
        type={'date'}
        defaultValue={event?.date ? format(event?.date, 'yyyy-MM-dd') : ''}
        required={false}
      />
      <div className="form-control">
        <input id="id" value={event?.id} type="hidden" name="id" />
      </div>
      <EventTypeSelect selectedEvent={event?.eventTypeId} eventTypes={eventTypes} />
      <SubmitButton title={'Odeslat'} modalId={event === null ? undefined : event.id} />
    </form>
  );
}
