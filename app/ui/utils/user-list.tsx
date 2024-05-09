import UserCard from '@/app/ui/user/user-card';
import UserTable from '@/app/ui/user/user-table';
import { UserModel } from '@/models/user-models';

export function UserList(props: { title: string; list: UserModel[] }) {
  return (
    <>
      <h2>{props.title}</h2>
      <hr className="w-full" />
      <div className="hidden md:block">
        <UserTable users={props.list} />
      </div>
      <div className="flex md:hidden flex-wrap justify-center gap-4">
        {props.list.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
