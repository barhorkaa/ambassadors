'use client';

import { EventTypeForm } from '@/app/ui/event-type/event-type-form';

export default function CreateEventTypeModal() {
  return (
    <>
      <button
        onClick={() => {
          if (document) {
            (document.getElementById('create_event_type_modal') as HTMLFormElement).showModal();
          }
        }}
      >
        Přidat
      </button>
      <dialog id="create_event_type_modal" className="modal">
        <div className="modal-box">
          <h3>Nový typ akce</h3>
          {/*<EventForm event={data.event} eventTypes={data.eventTypes} />*/}
          <EventTypeForm eventType={null} />
        </div>
      </dialog>
    </>
  );
}
