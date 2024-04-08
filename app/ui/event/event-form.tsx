import React from "react";
import SubmitButton from "@/app/ui/button/submit-button";
import EventTypeSelect from "@/app/ui/event-type/event-type-select";
import {EventTypeBasicModel} from "@/models/event-type/event-type-basic";
import {createNewEvent, updateEventWithId} from "@/app/lib/actions/event";
import {EventModel} from "@/models/event/event-model";
import {EventDetailModel} from "@/models/event/event-detail-model";

export default async function EventForm(data: {eventTypes: EventTypeBasicModel[], event: EventDetailModel | null}) {

  return(
    <form action={data.event === null ? createNewEvent : updateEventWithId} className="card-body">
      <div className="form-control">
        <label className="label"
               htmlFor="name">
          <span className="label-text">Název akce</span>
        </label>
        <input id="name" value={data.event?.name} type="text" name="name" placeholder="Gymnázium Třídy Kapitána Jaroše" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="who">
          <span className="label-text">Datum akce (může zůstat nevyplněno)</span>
        </label>
        <input id="date"  type="date" name="date" placeholder="" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="who">
          <span className="label-text">Datum akce (může zůstat nevyplněno)</span>
        </label>
        <input id="id" value={data.event?.id} type="hidden" name="id" className="input input-bordered" />
      </div>
      <EventTypeSelect eventTypes={data.eventTypes}/>
      <SubmitButton/>
    </form>
  )
}