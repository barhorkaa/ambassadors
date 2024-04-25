'use client';

import { EventTypeForm } from '@/app/ui/event-type/event-type-form';

export default function CreateEventTypeModal() {
  return (
    <>
      <button
        className="btn"
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
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-base-100">✕</button>
          </form>
          <h3>Nový typ akce</h3>
          <EventTypeForm eventType={null} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
