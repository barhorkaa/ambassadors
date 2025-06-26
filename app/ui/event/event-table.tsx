import { LinkWrappedTableCell } from '@/app/ui/utils/component-table';
import { EventModel } from '@/models/event-models';

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
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="hover:bg-base-300">
              <LinkWrappedTableCell href={`/events/${event.id}`}>{event.name}</LinkWrappedTableCell>
              <LinkWrappedTableCell href={`/events/${event.id}`}>
                <div className="badge bg-fi-100">{event.eventTypeName}</div>
              </LinkWrappedTableCell>
              <LinkWrappedTableCell href={`/events/${event.id}`}>
                {event.date !== null ? event.date.toLocaleDateString('cs-CZ') : 'Nezadáno'}
              </LinkWrappedTableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
