import { EventModel } from '@/models/event-models';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function EventCard({ event }: { event: EventModel }) {
  return (
    <Link href={`/events/${event.id}`} className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{event.name}</h2>
        <div className="badge bg-fi-100">{event.eventTypeName}</div>
        <div className="flex flex-row gap-2">
          <CalendarDaysIcon className="h-5" />
          <p>{event.date !== null ? event.date.toLocaleDateString('cs-CZ') : 'Nezadáno'}</p>
        </div>
      </div>
    </Link>
  );
}
