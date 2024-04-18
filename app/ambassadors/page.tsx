import UserCard from '@/app/ui/user/user-card';
import UserTable from '@/app/ui/user/user-table';
import { getAllAmbassadors, getAllManagers, getNotApprovedUsers } from '@/database/repository/user';
import { UserModel } from '@/models/userModel';

export default async function Ambassadors() {
  let allAmbassadors: UserModel[] | undefined = await getAllAmbassadors();
  if (allAmbassadors === undefined) {
    allAmbassadors = [];
  }

  let allManagers: UserModel[] | undefined = await getAllManagers();
  if (allManagers === undefined) {
    allManagers = [];
  }

  let unapprovedAmbassadors: UserModel[] | undefined = await getNotApprovedUsers();
  if (unapprovedAmbassadors === undefined) {
    unapprovedAmbassadors = [];
  }

  return (
    <div className="page">
      <h1>Uživatelé</h1>
      <hr className="divider w-full" />
      <h2>Nepotvrzení uživatelé</h2>
      <div className="hidden md:block">
        <UserTable users={unapprovedAmbassadors} />
      </div>
      <div className="flex md:hidden flex-wrap justify-center gap-4">
        {unapprovedAmbassadors.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
      <hr className="divider" />
      <h2>Manažeři</h2>
      <div className="hidden md:block">
        <UserTable users={allManagers} />
      </div>
      <div className="flex md:hidden flex-wrap justify-center gap-4">
        {allManagers.map((manager) => (
          <UserCard user={manager} />
        ))}
      </div>
      <hr className="divider" />
      <h2>Ambasadoři</h2>
      <div className="hidden md:block">
        <UserTable users={allAmbassadors} />
      </div>
      <div className="flex md:hidden flex-wrap justify-center gap-4">
        {allAmbassadors.map((ambassador) => (
          <UserCard user={ambassador} />
        ))}
      </div>
    </div>
  );
}
