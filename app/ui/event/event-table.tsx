import {EventModel} from "@/models/event/event-model";
import Link from "next/link";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";

export default function EventTable({events} : {events: EventModel[]}) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
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
              <div className="badge bg-amber-300">{event.event_type_name}</div>
              {/*{event.event_type_name}*/}
            </td>
            <td>{event.date !== null ? event.date.toLocaleString() : "Nezadáno"}</td>
            <td>
              <Link href={`events/${event.id}`}>
                <ArrowTopRightOnSquareIcon className="h-5"/>
              </Link>
            </td>
          </tr>
        ))}

        </tbody>
      </table>
    </div>
  )
}