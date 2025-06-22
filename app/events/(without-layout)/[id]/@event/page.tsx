import { approveEventAction } from '@/app/lib/actions/event';
import ApproveButton from '@/app/ui/button/approve-button';
import EventDetail from '@/app/ui/event/event-detail';
import DeleteEventModal from '@/app/ui/modals/delete/delete-event-modal';
import EditEventModal from '@/app/ui/modals/edit/edit-event-modal';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { getEventById } from '@/database/repository/event';
import { getAllEventTypesBasics } from '@/database/repository/event-type';
import { getSignUpsForEvent, userSignUpForEventStatus } from '@/database/repository/event-user';
import { EventDetailModel } from '@/models/event-models';
import { EventTypeMinModel } from '@/models/event-type-models';

export default async function Page({ params }: { params: { id: string } }) {
  const event: EventDetailModel = await getEventById(params.id);

  const session = await auth();
  const isManager = session?.user.role === UserRoles.manager;
  const userStatus = await userSignUpForEventStatus(event.id, session?.user.id!);

  const eventTypes: EventTypeMinModel[] = await getAllEventTypesBasics();

  const attendees = await getSignUpsForEvent(event.id!, false);
  const substitutes = await getSignUpsForEvent(event.id!, true);

  const buttonsShown =
    isManager ||
    (userStatus !== undefined &&
      !userStatus.substitute &&
      userStatus.approved &&
      (event.date === null || new Date() <= event.date));

  return (
    <div className="data-display">
      <div className="card-body">
        <div className={'flex flex-col' + (buttonsShown ? ' gap-4' : '')}>
          <h1 className="w-full">{event.name}</h1>
          {event.deletedAt === null && (
            <div className="flex flex-row gap-4">
              {isManager && !event.approved && <ApproveButton fun={approveEventAction} id={event.id} />}
              {(isManager ||
                (userStatus !== undefined &&
                  !userStatus.substitute &&
                  userStatus.approved &&
                  (event.date === null || new Date() <= event.date))) && (
                <EditEventModal event={event} eventTypes={eventTypes} />
              )}
              {isManager && <DeleteEventModal eventId={event.id} />}
            </div>
          )}
        </div>
        <hr className="w-full" />
        <EventDetail event={event} attendees={attendees.length + substitutes.length} isManager={isManager} />
      </div>
    </div>
  );
}
