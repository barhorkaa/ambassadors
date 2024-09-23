import EventTypeDetail from '@/app/ui/event-type/event-type-detail';
import EventUserTable from '@/app/ui/event-user/event-user-table';
import EventCard from '@/app/ui/event/event-card';
import EventTable from '@/app/ui/event/event-table';
import MaterialDetail from '@/app/ui/material/material-detail';
import UserCard from '@/app/ui/user/user-card';
import UserTable from '@/app/ui/user/user-table';
import { EventTypeDetailModel } from '@/models/event-type-models';
import { CheckIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ComponentListProps {
  title: string;
  list: any[];
  emptyMessage: string;
}

const EmptyMessage = ({ message }: { message: string }) => <p className="text-lg py-2">{message}</p>;

export function EventList({ title, list, emptyMessage }: ComponentListProps) {
  return (
    <>
      <h2>{title}</h2>
      {list.length === 0 ? (
        <EmptyMessage message={emptyMessage} />
      ) : (
        <>
          <div className="flex md:hidden flex-wrap justify-center gap-4 ">
            {list.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="py-2 hidden md:block">
            <EventTable events={list} />
          </div>
        </>
      )}
      <hr />
    </>
  );
}

export function UserList({ title, list, emptyMessage }: ComponentListProps) {
  return (
    <>
      <h2>{title}</h2>
      {list.length === 0 ? (
        <EmptyMessage message={emptyMessage} />
      ) : (
        <>
          <div className="hidden md:block">
            <UserTable users={list} />
          </div>
          <div className="flex md:hidden flex-wrap justify-center gap-4">
            {list.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export function SignUpList({ title, list, emptyMessage }: ComponentListProps) {
  return (
    <>
      {list.length === 0 ? (
        <EmptyMessage message={emptyMessage} />
      ) : (
        <>
          <h2>{title}</h2>
          <EventUserTable eventUsers={list} />
        </>
      )}
    </>
  );
}

export function EventUserList({ title, list, emptyMessage }: ComponentListProps) {
  return (
    <>
      {list.length !== 0 ? (
        <>
          <h3 className="card-title">{title}</h3>
          {list.map((user) => (
            <div key={user.userId} className="flex flex-row gap-4 items-baseline">
              {user.approved ? (
                <CheckIcon title={'Registrace potvrzena'} className="h-6" />
              ) : (
                <ClockIcon title={'Čeká se na potvrzení'} className="h-6" />
              )}
              <Link href={`/ambassadors/${user.userId}`} key={user.userId} className="flex flex-row gap-4 py-2">
                <UserIcon className="h-6" />
                <p className="text-lg">{user.userName}</p>
              </Link>
            </div>
          ))}
        </>
      ) : (
        <EmptyMessage message={emptyMessage} />
      )}
    </>
  );
}

export function MaterialList({ title, list, emptyMessage }: ComponentListProps) {
  return (
    <>
      <h2>{title}</h2>
      {list.length === 0 ? (
        <EmptyMessage message={emptyMessage} />
      ) : (
        <div className="flex flex-col gap-6">
          {list.map((material) => (
            <MaterialDetail key={material.id} material={material} />
          ))}
        </div>
      )}
    </>
  );
}

export function EventTypeList({
  eventTypes,
  emptyMessage,
}: {
  eventTypes: EventTypeDetailModel[];
  emptyMessage: string;
}) {
  return (
    <>
      {eventTypes.length === 0 ? (
        <EmptyMessage message={emptyMessage} />
      ) : (
        <div className="flex flex-col gap-6">
          {eventTypes.map((eventType) => (
            <EventTypeDetail key={eventType.id} eventType={eventType} />
          ))}
        </div>
      )}
    </>
  );
}
