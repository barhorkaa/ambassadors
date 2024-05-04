'use client';

import { EventTypeForm } from '@/app/ui/event-type/event-type-form';
import { EventTypeDetailModel } from '@/models/event-type-models';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function EditEventTypeModal(data: { eventType: EventTypeDetailModel }) {
  return (
    <>
      <button
        className="btn"
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
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-base-100">✕</button>
          </form>
          <h3>Upravit informace</h3>
          <EventTypeForm eventType={data.eventType} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
