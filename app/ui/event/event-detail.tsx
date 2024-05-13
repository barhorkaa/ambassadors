import { approveEventAction } from '@/app/lib/actions/events';
import ApproveButton from '@/app/ui/button/approve-button';
import DeleteEventModal from '@/app/ui/modals/delete/delete-event-modal';
import EditEventModal from '@/app/ui/modals/edit/edit-event-modal';
import { auth } from '@/auth';
import { getAllEventTypesBasics } from '@/database/repository/event-type';
import { getSignUpsForEvent, userSignUpForEventStatus } from '@/database/repository/event-user';
import { EventDetailModel } from '@/models/event-models';
import { EventTypeMinModel } from '@/models/event-type-models';
import { CalendarDaysIcon, CheckCircleIcon, UserGroupIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default async function EventDetail({ event }: { event: EventDetailModel }) {
  let signedUpForEvent = await getSignUpsForEvent(event.id!, false);

  const session = await auth();
  const userStatus = await userSignUpForEventStatus(event.id, session?.user.id!);
  const eventTypes: EventTypeMinModel[] = await getAllEventTypesBasics();

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="w-1/2">{event.name}</h1>
        {event.deletedAt === null && (
          <div className="flex flex-row gap-4 ">
            {!event.approved && session?.user.role == 'manager' && (
              <ApproveButton fun={approveEventAction} id={event.id} />
            )}
            {(session?.user.role === 'manager' ||
              (userStatus !== undefined &&
                !userStatus.substitute &&
                userStatus.approved &&
                (event.date === null || new Date() <= event.date))) && (
              <EditEventModal event={event} eventTypes={eventTypes} />
            )}
            {session?.user.role === 'manager' && <DeleteEventModal eventId={event.id} />}
          </div>
        )}
      </div>
      <hr className="w-full" />
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="flex flex-row gap-2">
          <CalendarDaysIcon className="h-7" />
          <p className="text-lg">{event.date === null ? 'Nezadáno' : event.date.toLocaleDateString()}</p>
        </div>
        <div className="flex flex-row justify-between">
          {event.approved ? (
            <div className="flex flex-row gap-2">
              <CheckCircleIcon className="h-7" />
              <p className="text-lg">Potvrzeno</p>
            </div>
          ) : (
            <div className="flex flex-row gap-2">
              <XCircleIcon className="h-7" />
              <p className="text-lg">Nepotvrzeno</p>
            </div>
          )}
        </div>
        <div title="Limit" className="flex flex-row gap-2">
          <UserGroupIcon className="h-7" />
          <p className="text-lg">
            {signedUpForEvent.length}/{event.limit}
          </p>
        </div>
        {session?.user.role === 'manager' && (
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <p className="text-lg">Vytvořeno: {event.createdAt.toLocaleDateString()}</p>
            <p className="text-lg">Upraveno: {event.updatedAt.toLocaleDateString()}</p>
            <p className="text-lg">Smazáno: {event.deletedAt === null ? 'Ne' : event.deletedAt.toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
