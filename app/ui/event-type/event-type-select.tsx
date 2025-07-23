'use client';

import { EventTypeMinModel } from '@/models/event-type-models';
import { useState } from 'react';

interface EventTypeSelectProps {
  eventTypes: EventTypeMinModel[];
  selectedEvent: string | undefined;
  errorMessage: string;
}

export default function EventTypeSelect({ eventTypes, selectedEvent, errorMessage }: EventTypeSelectProps) {
  const [eventType, setEventType] = useState(selectedEvent);

  const handleEventTypeChange = (event: any) => {
    setEventType(event.target.value);
  };

  return (
    <div className="form-control">
      <label className="label" htmlFor="event_type">
        <span className="label-text">Typ akce</span>
      </label>
      <select
        className="select select-bordered w-full"
        id="eventType"
        name="eventTypeId"
        value={eventType}
        onChange={handleEventTypeChange}
      >
        <option>Vyberte typ akce</option>
        {eventTypes.map((event) => (
          <option key={event.id} value={event.id}>
            {event.name}
          </option>
        ))}
      </select>
      {errorMessage && (
        <div className="label pb-0">
          <span className="label-text-alt text-error">{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
