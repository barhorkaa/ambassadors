import { UserList } from '@/app/ui/utils/user-list';
import { getNotApprovedUsers } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';

export default async function Unapproved() {
  const unapprovedAmbassadors: UserModel[] = await getNotApprovedUsers();

  return (
    <div className="content">
      <UserList title={'Nepotvrzení uživatelé'} list={unapprovedAmbassadors} />
    </div>
  );
}
