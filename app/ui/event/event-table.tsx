import { EventModel } from '@/models/event-models';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface EventTableProps {
  events: EventModel[];
}

export default function EventTable({ events }: EventTableProps) {
  return (
    <div className="overflow-x-auto data-display p-4">
      <div className="table">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell">Název</div>
            <div className="table-cell">Typ</div>
            <div className="table-cell">Datum akce</div>
            <div className="table-cell">Detail</div>
          </div>
        </div>
        <div className="table-row-group">
          {events.map((event) => (
            <Link
              href={`/events/${event.id}`}
              className="table-row hover:bg-base-300"
              key={event.id}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="table-cell">{event.name}</div>
              <div className="table-cell">
                <div className="badge bg-fi-100">{event.eventTypeName}</div>
              </div>
              <div className="table-cell">
                {event.date !== null ? event.date.toLocaleDateString('cs-CZ') : 'Nezadáno'}
              </div>
              <div className="table-cell">
                <ArrowTopRightOnSquareIcon className="h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
