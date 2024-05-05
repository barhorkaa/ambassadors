'use client';

import { EventTypeForm } from '@/app/ui/event-type/event-type-form';
import ModalLayout from '@/app/ui/modals/modal-layout';
import { EventTypeDetailModel } from '@/models/event-type-models';

export default function EditEventTypeModal(data: { eventType: EventTypeDetailModel }) {
  return (
    <ModalLayout id={data.eventType.id} title={'Upravit informace o typu akce'} create={false}>
      <EventTypeForm eventType={data.eventType} />
    </ModalLayout>
  );
}