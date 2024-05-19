'use client';

import { createEventAction, updateEventAction } from '@/app/lib/actions/events';
import SubmitButton from '@/app/ui/button/submit-button';
import EventTypeSelect from '@/app/ui/event-type/event-type-select';
import FormControl, { findErrors } from '@/app/ui/utils/form-control';
import { EventDetailModel } from '@/models/event-models';
import { EventTypeMinModel } from '@/models/event-type-models';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { useFormState } from 'react-dom';

export default function EventForm({
  eventTypes,
  event,
}: {
  eventTypes: EventTypeMinModel[];
  event: EventDetailModel | null;
}) {
  const [state, dispatch] = useFormState(event === null ? createEventAction : updateEventAction, {
    errors: [],
    generic: undefined,
  });

  return (
    <form action={dispatch} className="card-body">
      <FormControl
        title={'Název akce'}
        id={'name'}
        defaultValue={event?.name}
        placeholder={'Gymnázium Třídy Kapitána Jaroše'}
        errorMessage={findErrors('name', state.errors)[0]}
      />
      <FormControl
        title={'Limit počtu lidí'}
        id={'limit'}
        type={'number'}
        placeholder={'Kolik ambasadorů může na akci'}
        defaultValue={event?.limit}
        errorMessage={findErrors('limit', state.errors)[0]}
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
      <EventTypeSelect
        selectedEvent={event?.eventTypeId}
        eventTypes={eventTypes}
        errorMessage={findErrors('eventTypeId', state.errors)[0]}
      />
      <SubmitButton title={'Odeslat'} modalId={event === null ? undefined : event.id} />
      {state.generic && (
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-500">{state.generic}</p>
        </div>
      )}
    </form>
  );
}
