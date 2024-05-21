'use client';

import { createEventAction, updateEventAction } from '@/app/lib/actions/events';
import { findErrors, formActionInitialState } from '@/app/lib/actions/form-errors';
import EventTypeSelect from '@/app/ui/event-type/event-type-select';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl from '@/app/ui/utils/form-control';
import { EventDetailModel } from '@/models/event-models';
import { EventTypeMinModel } from '@/models/event-type-models';
import { format } from 'date-fns';
import { useFormState } from 'react-dom';

export default function EventForm({
  eventTypes,
  event,
}: {
  eventTypes: EventTypeMinModel[];
  event: EventDetailModel | null;
}) {
  const [state, dispatch] = useFormState(
    event === null ? createEventAction : updateEventAction,
    formActionInitialState
  );

  return (
    <FormLayout action={dispatch} state={state} modalId={event === null ? undefined : event.id}>
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
    </FormLayout>
  );
}
