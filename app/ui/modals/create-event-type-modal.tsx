'use client';

import { EventTypeForm } from '@/app/ui/event-type/event-type-form';
import ModalLayout from '@/app/ui/modals/modal-layout';

export default function CreateEventTypeModal() {
  return (
    <ModalLayout id={'create_event_type_modal'} title={'Nový typ akce'} create={true}>
      <EventTypeForm eventType={null} />
    </ModalLayout>
  );
}
