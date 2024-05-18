import EventUserTable from '@/app/ui/event-user/event-user-table';
import EventCard from '@/app/ui/event/event-card';
import EventTable from '@/app/ui/event/event-table';
import UserCard from '@/app/ui/user/user-card';
import UserTable from '@/app/ui/user/user-table';
import { EventModel } from '@/models/event-models';
import { EventUserBasicModel } from '@/models/event-user-models';
import { UserModel } from '@/models/user-models';

export function EventList({ title, list, emptyMessage }: { title: string; list: EventModel[]; emptyMessage: string }) {
  return (
    <>
      <h2>{title}</h2>
      {list.length === 0 ? (
        <p className="text-lg py-2">{emptyMessage}</p>
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

export function UserList({ title, list }: { title: string; list: UserModel[] }) {
  return (
    <>
      <h2>{title}</h2>
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
}

export function SignUpList(props: { title: string; list: EventUserBasicModel[] }) {
  return (
    <div>
      <h2>{props.title}</h2>
      <EventUserTable eventUsers={props.list} />
    </div>
  );
}
