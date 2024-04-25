'use client';

import EventForm from '@/app/ui/event/event-form';
import { EventTypeBasicModel } from '@/models/event-type/event-type-basic';
import { EventDetailModel } from '@/models/event/event-detail-model';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function EditEventModal(data: { eventTypes: EventTypeBasicModel[]; event: EventDetailModel }) {
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          if (document) {
            (document.getElementById('my_modal_2') as HTMLFormElement).showModal();
          }
        }}
      >
        <PencilIcon className="h-5" />
        <p className="hidden md:block">Upravit</p>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3>Upravit akci</h3>
          <EventForm event={data.event} eventTypes={data.eventTypes} />
        </div>
      </dialog>
    </>
  );
}
