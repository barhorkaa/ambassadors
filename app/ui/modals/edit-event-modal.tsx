'use client';

import EventForm from '@/app/ui/event/event-form';
import ModalLayout from '@/app/ui/modals/modal-layout';
import { EventDetailModel } from '@/models/event-models';
import { EventTypeMinModel } from '@/models/event-type-models';

export default function EditEventModal(data: { eventTypes: EventTypeMinModel[]; event: EventDetailModel }) {
  return (
    <ModalLayout id={data.event.id} title={'Upravit akci'} create={false}>
      <EventForm event={data.event} eventTypes={data.eventTypes} />
    </ModalLayout>
  );
}
