import {EventModel} from "@/models/event/event-model";

export default function EventCard({ event }: {event: EventModel}) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{event.name}
          </h2>
          <div className="badge badge-secondary">{event.event_type_name}</div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Detail</button>
          </div>
        </div>
      </div>
    </>
  )
}