import {getEventById} from "@/database/repository/events";
import EventDetail from "@/app/ui/event/event-detail";
import {EventDetailModel} from "@/models/event/event-detail-model";
import EventTypeDetail from "@/app/ui/event/event-type-detail";
import {getEventTypeById} from "@/database/repository/event-type";
import {EventTypeDetailModel} from "@/models/event-type/event-type-detail-model";
import {auth} from "@/auth";
import ApproveButton from "@/app/ui/button/approve-button";
import {approveEventWithId} from "@/app/lib/actions/event";
import EventSignUpButton from "@/app/ui/button/event-sign-up-button";

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

  const session = await auth();
  return(
    <div >
      <div className="flex flex-row justify-between">
        <h1>Detail akce</h1>
        <div>
          {(!event.approved && session?.user.role == "manager") &&
              <ApproveButton fun={await approveEventWithId(event.id)}/>}
          {event.approved &&
              <EventSignUpButton props={{event_id: event.id, user_id: session?.user.id!}}/>}
        </div>

      </div>
      <div className="flex flex-row justify-start gap-10 sm:flex-col py-4">
        <EventDetail event={event}/>
        <EventTypeDetail eventType={eventType}/>
      </div>
    </div>
  )
}