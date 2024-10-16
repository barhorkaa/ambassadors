'use client';

import { creteGroupEmailAction } from '@/app/lib/actions/event-group-emails';
import { findErrors, formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl from '@/app/ui/utils/form-control';
import { useFormState } from 'react-dom';

export default function GroupEmailForm({ eventId }: { eventId: string }) {
  const [state, dispatch] = useFormState(creteGroupEmailAction, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={state} modalId={'create_group_email'}>
      <FormControl title={'Titulek emailu'} id={'title'} errorMessage={findErrors('title', state.errors)[0]} />
      <FormControl
        title={'Předmět e-mali (nepovinné)'}
        id={'subject'}
        errorMessage={findErrors('subject', state.errors)[0]}
        required={false}
      />
      <FormControl
        title={'Obsah e-mailu'}
        id={'contents'}
        errorMessage={findErrors('contents', state.errors)[0]}
        inputType="textarea"
      />

      <input id="eventId" value={eventId} type="hidden" name="id" />
    </FormLayout>
  );
}
