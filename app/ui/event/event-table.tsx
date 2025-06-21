import { EventModel } from '@/models/event-models';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface EventTableProps {
  events: EventModel[];
}

export default function EventTable({ events }: EventTableProps) {
  return (
    <div className="overflow-x-auto data-display p-4">
      <table className="table">
        <thead>
          <tr>
            <th>Název</th>
            <th>Typ</th>
            <th>Datum akce</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr className="hover" key={event.id}>
              <td>
                <Link href={`/events/${event.id}`} rel="noopener noreferrer" target="_blank">
                  {event.name}
                </Link>
              </td>
              <td>
                <div className="badge bg-fi-100">{event.eventTypeName}</div>
              </td>
              <td>{event.date !== null ? event.date.toLocaleDateString('cs-CZ') : 'Nezadáno'}</td>
              <td>
                <Link href={`/events/${event.id}`} rel="noopener noreferrer" target="_blank">
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
