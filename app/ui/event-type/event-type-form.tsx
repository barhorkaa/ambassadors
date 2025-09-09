'use client';

import { createEventTypeAction, editEventTypeAction } from '@/app/lib/actions/event-type';
import { findErrors, formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl, { FormControlEditor, FormControlID } from '@/app/ui/utils/form-control';
import { EventTypeDetailModel } from '@/models/event-type-models';
import { useFormState } from 'react-dom';

interface EventTypeFormProps {
  eventType?: EventTypeDetailModel;
}

export function EventTypeForm({ eventType }: EventTypeFormProps) {
  const [state, dispatch] = useFormState(
    eventType ? editEventTypeAction : createEventTypeAction,
    formActionInitialState
  );

  return (
    <FormLayout action={dispatch} modalId={eventType ? 'edit' + eventType.id : 'create_event_type_modal'} state={state}>
      <FormControl
        title={'Název typu akce'}
        id={'name'}
        defaultValue={eventType?.name}
        errorMessage={findErrors('name', state.errors)[0]}
      />
      <FormControlEditor
        title="Popis typu akce"
        initialContent={eventType?.description}
        id="description"
        errorMessage={findErrors('description', state.errors)[0]}
        required
      />
      <FormControlEditor
        title="Instrukce pro ambasadory"
        initialContent={eventType?.instructions}
        id="instructions"
        errorMessage={findErrors('instructions', state.errors)[0]}
        required
      />
      <FormControlID value={eventType?.id} required={false} />
    </FormLayout>
  );
}
