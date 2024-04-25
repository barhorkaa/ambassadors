'use client';

import { EventTypeForm } from '@/app/ui/event-type/event-type-form';
import { EventTypeDetailModel } from '@/models/event-type/event-type-detail-model';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function EditEventTypeModal(data: { eventType: EventTypeDetailModel }) {
  return (
    <>
      <button
        onClick={() => {
          if (document) {
            (document.getElementById(data.eventType.id) as HTMLFormElement).showModal();
          }
        }}
      >
        <PencilIcon className="h-5" />
        <p className="hidden md:block">Upravit</p>
      </button>
      <dialog id={data.eventType.id} className="modal">
        <div className="modal-box">
          <h3>Upravit informace</h3>
          {/*<EventForm event={data.event} eventTypes={data.eventTypes} />*/}
          <EventTypeForm eventType={data.eventType} />
        </div>
      </dialog>
    </>
  );
}
