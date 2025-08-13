'use client';

import ModalLayout from '@/app/ui/modals/modal-layout';
import ReportForm from '@/app/ui/report/report-form';
import { MaterialMinModel } from '@/models/material-models';

interface CreateReportModalProps {
  eventId: string;
  materials: MaterialMinModel[];
}

export default function CreateReportModal({ eventId, materials }: CreateReportModalProps) {
  return (
    <ModalLayout id={'create_report_modal'} title={'Vytvořit zprávu'} modalType={'create'} wider={true}>
      <ReportForm eventId={eventId} materials={materials} />
    </ModalLayout>
  );
}
