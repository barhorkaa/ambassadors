'use client';

import { EventTypeForm } from '@/app/ui/event-type/event-type-form';
import ModalLayout from '@/app/ui/modals/modal-layout';
import { EventTypeDetailModel } from '@/models/event-type-models';

interface EditEventTypeModalProps {
  eventType: EventTypeDetailModel;
}

export default function EditEventTypeModal({ eventType }: EditEventTypeModalProps) {
  return (
    <ModalLayout id={'edit' + eventType.id} title={'Upravit informace o typu akce'} modalType={'edit'}>
      <EventTypeForm eventType={eventType} />
    </ModalLayout>
  );
}
