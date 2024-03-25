import {getEventById} from "@/database/repository/events";
import EventDetail from "@/app/ui/event/event-detail";
import {EventDetailModel} from "@/models/event/event-detail-model";
import EventTypeDetail from "@/app/ui/event/event-type-detail";
import {getEventTypeById} from "@/database/repository/event-type";
import {EventTypeDetailModel} from "@/models/event-type/event-type-detail-model";

export default async function Event({params}: { params: { id: string }}) {
  const event: EventDetailModel | undefined = await getEventById(params.id);
  if (event === undefined) {
    return (
      <div>
        Unable to get the event
      </div>
    )
  }

  const eventType: EventTypeDetailModel | undefined = await getEventTypeById(event.event_type_id);

  return(
    <div >
      <div>
        <h1>
          Detail akce
        </h1>

      </div>
      <div className="flex flex-row justify-start gap-10 sm:flex-col">
        <EventDetail event={event}/>
        <EventTypeDetail eventType={eventType}/>
      </div>
    </div>
  )
}