import UserCard from '@/app/ui/user/user-card';
import UserTable from '@/app/ui/user/user-table';
import { getAllAmbassadors, getAllManagers, getNotApprovedUsers } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';

export default async function Ambassadors() {
  let allAmbassadors: UserModel[] = await getAllAmbassadors();
  let allManagers: UserModel[] = await getAllManagers();
  let unapprovedAmbassadors: UserModel[] = await getNotApprovedUsers();

  return (
    <>
      <h1>Uživatelé</h1>
      <hr className="w-full" />
      <UserList title={'Nepotvrzení uživatelé'} list={unapprovedAmbassadors} />
      <UserList title={'Manažeři'} list={allManagers} />
      <UserList title={'Ambasadoři'} list={allAmbassadors} />
    </>
  );
}

function UserList(props: { title: string; list: UserModel[] }) {
  return (
    <>
      <h2>{props.title}</h2>
      <div className="hidden md:block">
        <UserTable users={props.list} />
      </div>
      <div className="flex md:hidden flex-wrap justify-center gap-4">
        {props.list.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <hr />
    </>
  );
}
