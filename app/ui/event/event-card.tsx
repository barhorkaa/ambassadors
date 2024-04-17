import { EventModel } from '@/models/event/event-model';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function EventCard({ event }: { event: EventModel }) {
  return (
    <div className="card w-5/6 bg-base-100 shadow-lg">
      <Link href={`/events/${event.id}`}>
        <div className="card-body">
          <h2 className="">{event.name}</h2>
          <div className="badge bg-fi-100">{event.event_type_name}</div>
          <div className="flex flex-row gap-2">
            <CalendarDaysIcon className="h-5" />
            <p className="">{event.date !== null ? event.date.toLocaleDateString() : 'Nezadáno'}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
