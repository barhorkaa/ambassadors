import { auth } from '@/auth';
import { EventDetailModel } from '@/models/event/event-detail-model';
import { CalendarDaysIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default async function EventDetail({ event }: { event: EventDetailModel }) {
  const session = await auth();
  return (
    <div className="w-full">
      <h2 className="text-5xl">{event.name}</h2>
      <hr className="divider w-full" />
      <div className="flex flex-row gap-10 sm:flex-col sm:gap-4">
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
        {session?.user.role === 'manager' && (
          <div className="flex flex-row gap-10 sm:flex-col sm:gap-4">
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
