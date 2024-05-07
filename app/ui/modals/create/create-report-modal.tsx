'use client';

import ModalLayout from '@/app/ui/modals/modal-layout';
import ReportForm from '@/app/ui/report/report-form';

export default function CreateReportModal({ eventId }: { eventId: string }) {
  return (
    <ModalLayout id={'create_report_modal'} title={'Vytvořit zprávu'} create={true}>
      <ReportForm eventId={eventId} />
    </ModalLayout>
  );
}
