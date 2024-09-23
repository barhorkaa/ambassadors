'use client';

import EventForm from '@/app/ui/event/event-form';
import ModalLayout from '@/app/ui/modals/modal-layout';
import { EventDetailModel } from '@/models/event-models';
import { EventTypeMinModel } from '@/models/event-type-models';

interface EditEventModelProps {
  eventTypes: EventTypeMinModel[];
  event: EventDetailModel;
}

export default function EditEventModal({ eventTypes, event }: EditEventModelProps) {
  return (
    <ModalLayout id={event.id} title={'Upravit akci'} modalType={'edit'}>
      <EventForm event={event} eventTypes={eventTypes} />
    </ModalLayout>
  );
}
