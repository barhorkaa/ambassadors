'use client';

import { createEventTypeAction, editEventTypeAction } from '@/app/lib/actions/event-type';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl from '@/app/ui/utils/form-control';
import { EventTypeDetailModel } from '@/models/event-type-models';
import { useFormState } from 'react-dom';

export function EventTypeForm({ eventType }: { eventType: EventTypeDetailModel | null }) {
  const [state, dispatch] = useFormState(eventType === null ? createEventTypeAction : editEventTypeAction, {
    success: false,
    errors: [],
    generic: undefined,
  });

  return (
    <FormLayout
      action={dispatch}
      modalId={eventType === null ? 'create_event_type_modal' : 'edit' + eventType.id}
      state={state}
    >
      <FormControl title={'Název typu akce'} id={'name'} defaultValue={eventType?.name} />
      <FormControl
        title={'Popis typu akce'}
        id={'description'}
        inputType={'area'}
        defaultValue={eventType?.description}
      />
      <FormControl
        title={'Instrukce pro ambasadory'}
        id={'instructions'}
        inputType={'area'}
        defaultValue={eventType?.instructions}
      />
      <div className="form-control">
        <input id="id" value={eventType?.id} type="hidden" name="id" />
      </div>
    </FormLayout>
  );
}
