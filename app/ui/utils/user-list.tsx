import UserCard from '@/app/ui/user/user-card';
import UserTable from '@/app/ui/user/user-table';
import { UserModel } from '@/models/user-models';

export function UserList({ title, list }: { title: string; list: UserModel[] }) {
  return (
    <>
      <hr className="w-full" />
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
