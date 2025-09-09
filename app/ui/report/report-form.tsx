'use client';

import { createReportAction } from '@/app/lib/actions/report';
import { findErrors, formActionInitialState } from '@/app/lib/actions/utils';
import MaterialAdd from '@/app/ui/material-report/material-add';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl, { FormControlEditor } from '@/app/ui/utils/form-control';
import { MaterialMinModel } from '@/models/material-models';
import { useFormState } from 'react-dom';

interface ReportFormProps {
  eventId: string;
  materials: MaterialMinModel[];
}

export default function ReportForm({ eventId, materials }: ReportFormProps) {
  const [state, dispatch] = useFormState(createReportAction, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={state} modalId={'create_report_modal'}>
      <FormControl
        title={'Kolik lidí bylo na akci?'}
        id={'numberOfAttendees'}
        type={'number'}
        placeholder={'Počet zúčastněných'}
        errorMessage={findErrors('numberOfAttendees', state.errors)[0]}
      />
      <MaterialAdd materials={materials} />
      <FormControlEditor
        title="Co se na akci dělo?"
        id="notes"
        errorMessage={findErrors('notes', state.errors)[0]}
        required
      />
      <FormControlEditor
        title="Co do budoucna zlepšit?"
        id="ideas"
        errorMessage={findErrors('ideas', state.errors)[0]}
        required
      />
      <input id="id" type="hidden" name="eventId" value={eventId} required />
    </FormLayout>
  );
}
