import { approveEventAction } from '@/app/lib/actions/events';
import ApproveButton from '@/app/ui/button/approve-button';
import EventSignUpButton from '@/app/ui/button/event-sign-up-button';
import EventTypeDetail from '@/app/ui/event-type/event-type-detail';
import { EventUserDetail } from '@/app/ui/event-user/event-user-detail';
import EventDetail from '@/app/ui/event/event-detail';
import EditEventModal from '@/app/ui/modals/edit-event-modal';
import { auth } from '@/auth';
import { getAllEventTypesBasics, getEventTypeById } from '@/database/repository/event-type';
import { userSignUpForEventStatus } from '@/database/repository/event-user';
import { getEventById } from '@/database/repository/events';
import { EventDetailModel } from '@/models/event-models';
import { EventTypeDetailModel, EventTypeMinModel } from '@/models/event-type-models';
import { redirect } from 'next/navigation';

export default async function Event({ params }: { params: { id: string } }) {
  const event: EventDetailModel = await getEventById(params.id);
  const eventType: EventTypeDetailModel | undefined = await getEventTypeById(event.eventTypeId);

  const session = await auth();
  if (!session) {
    redirect('/login');
  }
  const userStatus = await userSignUpForEventStatus(event.id, session.user.id);

  const eventTypes: EventTypeMinModel[] = await getAllEventTypesBasics();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <h1>Detail akce</h1>
        <div className="flex flex-row gap-4">
          {!event.approved && session?.user.role == 'manager' && (
            <ApproveButton fun={approveEventAction} id={event.id} />
          )}
          {session && (
            <fieldset disabled={!event.approved}>
              <EventSignUpButton
                isSignedOnEvent={userStatus !== undefined}
                event_id={event.id}
                user_id={session.user.id}
              />
            </fieldset>
          )}
          {(session?.user.role === 'manager' ||
            (userStatus !== undefined && !userStatus.substitute && new Date() <= event.date!)) && (
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
    </>
  );
}
