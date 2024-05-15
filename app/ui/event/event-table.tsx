import { EventModel } from '@/models/event-models';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function EventTable({ events }: { events: EventModel[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-fixed">
        <thead>
          <tr>
            <th>Název</th>
            <th>Typ</th>
            <th>Datum</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr className="hover" key={event.id}>
              <td>{event.name}</td>
              <td>
                <div className="badge bg-fi-100">{event.eventTypeName}</div>
                {/*{event.event_type_name}*/}
              </td>
              <td>{event.date !== null ? event.date.toLocaleDateString() : 'Nezadáno'}</td>
              <td>
                <Link href={`/events/${event.id}`} prefetch={false} rel="noopener noreferrer" target="_blank">
                  <ArrowTopRightOnSquareIcon className="h-5" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
