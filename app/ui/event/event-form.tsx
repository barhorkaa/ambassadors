import React from "react";
import SubmitButton from "@/app/ui/button/submit-button";
import EventTypeSelect from "@/app/ui/event-type/event-type-select";
import {EventTypeBasicModel} from "@/models/event-type/event-type-basic";
import {getAllEventTypesBasics} from "@/database/repository/event-type";
import {createNewEvent} from "@/app/lib/actions/event";

export default async function EventForm() {

  let eventTypes: EventTypeBasicModel[] | undefined = await getAllEventTypesBasics();
  if (eventTypes === undefined) {
    eventTypes = [];
  }

  return(
    <div className="card">
      <form action={createNewEvent} className="card-body">
        <div className="form-control">
          <label className="label"
                 htmlFor="name">
            <span className="label-text">Název akce</span>
          </label>
          <input id="name" type="text" name="name" placeholder="Gymnázium Třídy Kapitána Jaroše" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="who">
            <span className="label-text">Datum akce (může zůstat nevyplněno)</span>
          </label>
          <input id="date" type="date" name="date" placeholder="" className="input input-bordered" />
        </div>
        <EventTypeSelect eventTypes={eventTypes}/>
        <SubmitButton/>
      </form>
    </div>
  )
}