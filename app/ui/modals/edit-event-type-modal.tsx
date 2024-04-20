'use client';

import { EventTypeForm } from '@/app/ui/event-type/event-type-form';
import { EventTypeDetailModel } from '@/models/event-type/event-type-detail-model';

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
        Upravit
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
