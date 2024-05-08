'use client';

import ModalLayout from '@/app/ui/modals/modal-layout';
import ReportForm from '@/app/ui/report/report-form';
import { MaterialMinModel } from '@/models/material-models';

export default function CreateReportModal({ eventId, materials }: { eventId: string; materials: MaterialMinModel[] }) {
  return (
    <ModalLayout id={'create_report_modal'} title={'Vytvořit zprávu'} create={true}>
      <ReportForm eventId={eventId} materials={materials} />
    </ModalLayout>
  );
}
