import UserCard from '@/app/ui/user/user-card';
import UserTable from '@/app/ui/user/user-table';
import { getAllAmbassadors, getAllManagers, getNotApprovedUsers } from '@/database/repository/user';
import { UserModel } from '@/models/userModel';

export default async function Ambassadors() {
  let allAmbassadors: UserModel[] = await getAllAmbassadors();

  let allManagers: UserModel[] = await getAllManagers();

  let unapprovedAmbassadors: UserModel[] = await getNotApprovedUsers();

  return (
    <>
      <h1>Uživatelé</h1>
      <hr className="w-full" />
      <h2>Nepotvrzení uživatelé</h2>
      <div className="hidden md:block">
        <UserTable users={unapprovedAmbassadors} />
      </div>
      <div className="flex md:hidden flex-wrap justify-center gap-4">
        {unapprovedAmbassadors.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <hr />
      <h2>Manažeři</h2>
      <div className="hidden md:block">
        <UserTable users={allManagers} />
      </div>
      <div className="flex md:hidden flex-wrap justify-center gap-4">
        {allManagers.map((manager) => (
          <UserCard key={manager.id} user={manager} />
        ))}
      </div>
      <hr />
      <h2>Ambasadoři</h2>
      <div className="hidden md:block">
        <UserTable users={allAmbassadors} />
      </div>
      <div className="flex md:hidden flex-wrap justify-center gap-4">
        {allAmbassadors.map((ambassador) => (
          <UserCard key={ambassador.id} user={ambassador} />
        ))}
      </div>
    </>
  );
}
