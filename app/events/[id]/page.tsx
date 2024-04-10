import { approveEventAction } from '@/app/lib/actions/events';
import ApproveButton from '@/app/ui/button/approve-button';
import EventSignUpButton from '@/app/ui/button/event-sign-up-button';
import EventTypeDetail from '@/app/ui/event-type/event-type-detail';
import EventDetail from '@/app/ui/event/event-detail';
import EditEventModal from '@/app/ui/modals/edit-event-modal';
import { auth } from '@/auth';
import { getAllEventTypesBasics, getEventTypeById } from '@/database/repository/event-type';
import { isUserSignedUpForEvent } from '@/database/repository/event-user';
import { getEventById } from '@/database/repository/events';
import { EventTypeBasicModel } from '@/models/event-type/event-type-basic';
import { EventTypeDetailModel } from '@/models/event-type/event-type-detail-model';
import { EventDetailModel } from '@/models/event/event-detail-model';

export default async function Event({ params }: { params: { id: string } }) {
  const event: EventDetailModel | undefined = await getEventById(params.id);
  if (event === undefined) {
    return <div>Unable to get the event</div>;
  }

  const eventType: EventTypeDetailModel | undefined = await getEventTypeById(event.event_type_id);

  const session = await auth();
  let disabled = false;
  let isSignedOnEvent: boolean | undefined = false;
  if (session) {
    isSignedOnEvent = await isUserSignedUpForEvent(event.id, session.user.id);
    if (isSignedOnEvent == undefined) {
      isSignedOnEvent = false;
    }
    disabled = isSignedOnEvent! || !event.approved;
  }

  let eventTypes: EventTypeBasicModel[] | undefined = await getAllEventTypesBasics();
  if (eventTypes === undefined) {
    eventTypes = [];
  }

  return (
    <div className="page flex flex-col gap-4">
      <div className="flex flex-row sm:flex-col justify-between">
        <h1>Detail akce</h1>
        <div className="flex flex-row gap-4">
          {!event.approved && session?.user.role == 'manager' && (
            <ApproveButton fun={approveEventAction} id={event.id} />
          )}
          {session && <EventSignUpButton disabled={disabled} event_id={event.id} user_id={session.user.id} />}
          {(session?.user.role === 'manager' || isSignedOnEvent) && (
            <EditEventModal event={event} eventTypes={eventTypes} />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-start gap-10 sm:flex-col py-4">
        <EventDetail event={event} />
        <EventTypeDetail eventType={eventType} />
      </div>
    </div>
  );
}
