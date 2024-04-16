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
      <UserTable users={unapprovedAmbassadors} />
      <hr className="divider" />
      <h2>Manažeři</h2>
      <UserTable users={allManagers} />
      {/*<div className="flex space-x-4 space-y-4">*/}
      {/*  {allManagers.map((manager) => (<UserCard user={manager}/>) )}*/}
      {/*</div>*/}
      <hr className="divider" />
      <h2>Ambasadoři</h2>
      <UserTable users={allAmbassadors} />
      {/*<div className="flex flex-wrap md:justify-between   space-y-4">*/}
      {/*  {allAmbassadors.map((ambassador) => (<UserCard user={ambassador}/>) )}*/}
      {/*</div>*/}
    </div>
  );
}
