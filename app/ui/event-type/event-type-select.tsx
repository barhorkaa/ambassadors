'use client'

import React, {useState} from "react";
import {EventTypeBasicModel} from "@/models/event-type/event-type-basic";

export default function EventTypeSelect(props: {eventTypes: EventTypeBasicModel[], selectedEvent: string | undefined}) {
  const [eventType, setEventType] = useState(props.selectedEvent);

  const handleEventTypeChange = (event: any) => {
    setEventType(event.target.value);
    console.log("\n\n\n\n", event.target.value)
  };

  return(
    <div className="form-control">
      <label className="label" htmlFor="event_type">
        <span className="label-text">Typ akce</span>
      </label>
      <select className="select select-bordered w-full max-w-xs" id='eventType' name="event_type_id" value={eventType} onChange={handleEventTypeChange}>
        <option selected>Vyberte typ akce</option>
        {eventTypes.map((event) =>
        {props.eventTypes.map((event) =>
          <option key={event.id} value={event.id}>{event.name}</option>
        )}
      </select>
    </div>
  )
}