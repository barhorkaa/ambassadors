'use client';

import { createReportAction } from '@/app/lib/actions/report';
import SubmitButton from '@/app/ui/button/submit-button';
import MaterialAdd from '@/app/ui/material-report/material-add';
import FormControl from '@/app/ui/utils/form-control';
import { formActionInitialState } from '@/app/ui/utils/form-errors';
import { MaterialMinModel } from '@/models/material-models';
import { useFormState } from 'react-dom';

export default function ReportForm({ eventId, materials }: { eventId: string; materials: MaterialMinModel[] }) {
  const [state, dispatch] = useFormState(createReportAction, formActionInitialState);

  return (
    <form action={createReportAction} className="card-body">
      <FormControl
        title={'Kolik lidí bylo na akci?'}
        id={'numberOfAttendees'}
        type={'number'}
        placeholder={'Počet zúčastněných'}
      />
      <MaterialAdd materials={materials} />
      <FormControl
        title={'Co se na akci dělo?'}
        id={'notes'}
        inputType={'area'}
        placeholder={'Poznámky k dění na akci'}
      />
      <FormControl
        title={'Co do budoucna zlepšit?'}
        id={'ideas'}
        inputType={'area'}
        placeholder={'Vaše nápady na zlepšení'}
      />
      <input id="id" type="hidden" name="eventId" value={eventId} required />
      <SubmitButton title={'Odeslat'} modalId={'create_report_modal'} />
    </form>
  );
}
