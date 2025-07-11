import { EventDetailModel } from '@/models/event-models';
import { CalendarDaysIcon, CheckCircleIcon, UserGroupIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface EventDetailProps {
  event: EventDetailModel;
  attendees: number;
  isManager: boolean;
}

export default function EventDetail({ event, attendees, isManager }: EventDetailProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="flex flex-row gap-2">
          <CalendarDaysIcon className="h-7" />
          <p className="text-lg">{event.date === null ? 'Nezadáno' : event.date.toLocaleDateString('cs-CZ')}</p>
        </div>
        <ApprovalStatus approved={event.approved} />
        <div title="Limit" className="flex flex-row gap-2">
          <UserGroupIcon className="h-7" />
          <p className="text-lg">
            {attendees}/{event.limit}
          </p>
        </div>
      </div>
      {isManager && (
        <>
          <hr className="w-full" />
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <p className="text-lg">Vytvořeno: {event.createdAt.toLocaleDateString()}</p>
            <p className="text-lg">Upraveno: {event.updatedAt.toLocaleDateString()}</p>
            <p className="text-lg">Smazáno: {event.deletedAt === null ? 'Ne' : event.deletedAt.toLocaleDateString()}</p>
          </div>
        </>
      )}
    </div>
  );
}

const ApprovalStatus = ({ approved }: { approved: boolean }) => (
  <div className="flex flex-row justify-between">
    {approved ? (
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
);
