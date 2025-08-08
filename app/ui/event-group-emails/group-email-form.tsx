'use client';

import { creteGroupEmailAction } from '@/app/lib/actions/event-group-emails';
import { findErrors, formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl from '@/app/ui/utils/form-control';
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';
import { useFormState } from 'react-dom';

export default function GroupEmailForm({ eventId }: { eventId: string }) {
  const [state, dispatch] = useFormState(creteGroupEmailAction, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={state} modalId={'create_group_email'}>
      <FormControl title={'Titulek emailu'} id={'title'} errorMessage={findErrors('title', state.errors)[0]} />
      <FormControl
        title={'Předmět e-mailu (nepovinné)'}
        id={'subject'}
        errorMessage={findErrors('subject', state.errors)[0]}
        required={false}
      />
      <div className="form-control">
        <label className="label" htmlFor="event_type">
          <span className="label-text">Obsah e-mailu</span>
        </label>
        <SimpleEditor initialContent="" />
      </div>
      <input id="eventId" defaultValue={eventId} type="hidden" name="eventId" />
    </FormLayout>
  );
}
