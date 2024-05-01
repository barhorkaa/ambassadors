import { approveEventAction } from '@/app/lib/actions/events';
import ApproveButton from '@/app/ui/button/approve-button';
import EventSignUpButton from '@/app/ui/button/event-sign-up-button';
import EventTypeDetail from '@/app/ui/event-type/event-type-detail';
import { EventUserDetail } from '@/app/ui/event-user/event-user-detail';
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
  const event: EventDetailModel = await getEventById(params.id);
  const eventType: EventTypeDetailModel = await getEventTypeById(event.event_type_id);

  const session = await auth();
  let isSignedOnEvent: boolean | undefined = false;
  if (session) {
    isSignedOnEvent = await isUserSignedUpForEvent(event.id, session.user.id);
    if (isSignedOnEvent == undefined) {
      isSignedOnEvent = false;
    }
  }

  const eventTypes: EventTypeBasicModel[] = await getAllEventTypesBasics();

  return (
    <div className="page flex flex-col gap-4">
      <div className="flex flex-col md:flex-row justify-between">
        <h1>Detail akce</h1>
        <div className="flex flex-row gap-4">
          {!event.approved && session?.user.role == 'manager' && (
            <ApproveButton fun={approveEventAction} id={event.id} />
          )}
          {session && (
            <fieldset disabled={!event.approved}>
              <EventSignUpButton isSignedOnEvent={isSignedOnEvent} event_id={event.id} user_id={session.user.id} />
            </fieldset>
          )}
          {(session?.user.role === 'manager' || isSignedOnEvent) && (
            <EditEventModal event={event} eventTypes={eventTypes} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <EventDetail event={event} />
        <EventUserDetail event_id={event.id} />
        <hr />
        <EventTypeDetail eventType={eventType} />
      </div>
    </div>
  );
}
