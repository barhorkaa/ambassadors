'use client';

import { createEventTypeAction, editEventTypeAction } from '@/app/lib/actions/event-type';
import { findErrors, formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl, { FormControlEditor } from '@/app/ui/utils/form-control';
import { EventTypeDetailModel } from '@/models/event-type-models';
import { useFormState } from 'react-dom';

interface EventTypeFormProps {
  eventType: EventTypeDetailModel | null;
}

export function EventTypeForm({ eventType }: EventTypeFormProps) {
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
      <FormControlEditor
        title="Popis typu akce"
        initialContent={eventType?.description}
        name="description"
        errorMessage={findErrors('description', state.errors)[0]}
      />
      <FormControlEditor
        title="Instrukce pro ambasadory"
        initialContent={eventType?.instructions}
        name="instructions"
        errorMessage={findErrors('instructions', state.errors)[0]}
      />
      <div className="form-control">
        <input id="id" value={eventType?.id} type="hidden" name="id" />
      </div>
    </FormLayout>
  );
}
