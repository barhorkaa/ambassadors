import { auth } from '@/auth';
import { getSignUpsForEvent } from '@/database/repository/event-user';
import { EventDetailModel } from '@/models/event/event-detail-model';
import { CalendarDaysIcon, CheckCircleIcon, UserGroupIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default async function EventDetail({ event }: { event: EventDetailModel }) {
  let signedUpForEvent = await getSignUpsForEvent(event.id!);
  if (signedUpForEvent === undefined) {
    signedUpForEvent = [];
  }

  const session = await auth();
  return (
    <div className="w-full">
      <h2 className="text-5xl">{event.name}</h2>
      <hr className="divider " />
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="flex flex-row gap-2">
          <CalendarDaysIcon className="h-7" />
          <p className="text-lg">{event.date?.toLocaleDateString()}</p>
        </div>
        <div className="flex flex-row gap-2">
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
            <p className="text-lg">Vytvořeno: {event.created_at.toLocaleDateString()}</p>
            <p className="text-lg">Upraveno: {event.updated_at.toLocaleDateString()}</p>
            <p className="text-lg">
              Smazáno: {event.deleted_at === null ? 'Ne' : event.deleted_at.toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
