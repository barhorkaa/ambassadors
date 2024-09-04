'use client';

import { createEventTypeAction, editEventTypeAction } from '@/app/lib/actions/event-type';
import { findErrors, formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl from '@/app/ui/utils/form-control';
import { EventTypeDetailModel } from '@/models/event-type-models';
import { useFormState } from 'react-dom';

export function EventTypeForm({ eventType }: { eventType: EventTypeDetailModel | null }) {
  const [state, dispatch] = useFormState(
    eventType === null ? createEventTypeAction : editEventTypeAction,
    formActionInitialState
  );

  return (
    <FormLayout
      action={dispatch}
      modalId={eventType === null ? 'create_event_type_modal' : 'edit' + eventType.id}
      state={state}
    >
      <FormControl
        title={'Název typu akce'}
        id={'name'}
        defaultValue={eventType?.name}
        errorMessage={findErrors('name', state.errors)[0]}
      />
      <FormControl
        title={'Popis typu akce'}
        id={'description'}
        inputType={'textarea'}
        defaultValue={eventType?.description}
        errorMessage={findErrors('description', state.errors)[0]}
      />
      <FormControl
        title={'Instrukce pro ambasadory'}
        id={'instructions'}
        inputType={'textarea'}
        defaultValue={eventType?.instructions}
        errorMessage={findErrors('instructions', state.errors)[0]}
      />
      <div className="form-control">
        <input id="id" value={eventType?.id} type="hidden" name="id" />
      </div>
    </FormLayout>
  );
}
