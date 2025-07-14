import EventTypeDetail from '@/app/ui/event-type/event-type-detail';
import EventUserTable from '@/app/ui/event-user/event-user-table';
import EventCard from '@/app/ui/event/event-card';
import EventTable from '@/app/ui/event/event-table';
import MaterialDetail from '@/app/ui/material/material-detail';
import UserCard from '@/app/ui/user/user-card';
import UserTable from '@/app/ui/user/user-table';
import { CheckIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ComponentListProps {
  list: any[];
  emptyMessage: string;
}

const EmptyMessage = ({ message }: { message: string }) => <p className="text-lg py-2">{message}</p>;

export const EventList = ({ list, emptyMessage }: ComponentListProps) =>
  list.length === 0 ? (
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
  );

export const UserList = ({ list, emptyMessage }: ComponentListProps) =>
  list.length === 0 ? (
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
  );

export const SignUpList = ({ list, emptyMessage }: ComponentListProps) =>
  list.length === 0 ? <EmptyMessage message={emptyMessage} /> : <EventUserTable eventUsers={list} />;

const EventUserIcon = ({ approved }: { approved: boolean }) =>
  approved ? (
    <CheckIcon title={'Registrace potvrzena'} className="h-6" />
  ) : (
    <ClockIcon title={'Čeká se na potvrzení'} className="h-6" />
  );

export const EventUserList = ({ title, list, emptyMessage }: ComponentListProps & { title: string }) =>
  list.length === 0 ? (
    <EmptyMessage message={emptyMessage} />
  ) : (
    <>
      <h3 className="card-title">{title}</h3>
      {list.map((user) => (
        <div key={user.userId} className="flex flex-row gap-4 items-baseline">
          <EventUserIcon approved={user.approved} />
          <Link href={`/ambassadors/${user.userId}`} key={user.userId} className="flex flex-row gap-4 py-2">
            <UserIcon className="h-6" />
            <p className="text-lg">{user.userName}</p>
          </Link>
        </div>
      ))}
    </>
  );

export const MaterialList = ({ list, emptyMessage }: ComponentListProps) =>
  list.length === 0 ? (
    <EmptyMessage message={emptyMessage} />
  ) : (
    <div className="flex flex-col gap-6">
      {list.map((material) => (
        <MaterialDetail key={material.id} material={material} />
      ))}
    </div>
  );

export const EventTypeList = ({ list, emptyMessage }: ComponentListProps) =>
  list.length === 0 ? (
    <EmptyMessage message={emptyMessage} />
  ) : (
    <div className="flex flex-col gap-6">
      {list.map((eventType) => (
        <EventTypeDetail key={eventType.id} eventType={eventType} />
      ))}
    </div>
  );
