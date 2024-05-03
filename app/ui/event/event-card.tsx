import { getSignUpsForEvent } from '@/database/repository/event-user';
import { EventModel } from '@/models/event-models';
import { CalendarDaysIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function EventCard({ event }: { event: EventModel }) {
  let signedUpForEvent = await getSignUpsForEvent(event.id!);
  if (signedUpForEvent === undefined) {
    signedUpForEvent = [];
  }

  return (
    <div className="card w-5/6 bg-base-100 shadow-lg">
      <Link href={`/events/${event.id}`}>
        <div className="card-body">
          <h2 className="">{event.name}</h2>
          <div className="badge bg-fi-100">{event.eventTypeName}</div>
          <div className="flex flex-row gap-2">
            <CalendarDaysIcon className="h-5" />
            <p className="">{event.date !== null ? event.date.toLocaleDateString() : 'Nezadáno'}</p>
          </div>
          <div className="flex flex-row gap-2">
            <UserGroupIcon className="h-5" />
            <p>
              {signedUpForEvent.length} / {event.limit}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
