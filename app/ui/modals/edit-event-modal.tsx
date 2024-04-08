"use client"

import EventForm from "@/app/ui/event/event-form";
import {EventTypeBasicModel} from "@/models/event-type/event-type-basic";
import {EventDetailModel} from "@/models/event/event-detail-model";

export default function EditEventModal(data: {eventTypes: EventTypeBasicModel[], event: EventDetailModel}) {
  return(
    <>
      <button className="btn" onClick={() => {
        if (document) {
          (document.getElementById('my_modal_2') as HTMLFormElement).showModal();
        }
      }}>Upravit akci</button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3>Upravit akci</h3>
          <EventForm event={data.event} eventTypes={data.eventTypes}/>
        </div>
      </dialog>
    </>
  )
}