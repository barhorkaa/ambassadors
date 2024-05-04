'use client';

import { EventTypeMinModel } from '@/models/event-type-models';
import { useState } from 'react';

export default function EventTypeSelect(props: { eventTypes: EventTypeMinModel[]; selectedEvent: string | undefined }) {
  const [eventType, setEventType] = useState(props.selectedEvent);

  const handleEventTypeChange = (event: any) => {
    setEventType(event.target.value);
    console.log('\n\n\n\n', event.target.value);
  };

  return (
    <div className="form-control">
      <label className="label" htmlFor="event_type">
        <span className="label-text">Typ akce</span>
      </label>
      <select
        className="select select-bordered w-full max-w-xs"
        id="eventType"
        name="eventTypeId"
        value={eventType}
        onChange={handleEventTypeChange}
      >
        <option>Vyberte typ akce</option>
        {props.eventTypes.map((event) => (
          <option key={event.id} value={event.id}>
            {event.name}
          </option>
        ))}
      </select>
    </div>
  );
}
