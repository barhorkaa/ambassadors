import { UserList } from '@/app/ui/utils/user-list';
import { getNotApprovedUsers } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';

export default async function Unapproved() {
  let unapprovedAmbassadors: UserModel[] = await getNotApprovedUsers();

  return (
    <div>
      <UserList title={'Nepotvrzení uživatelé'} list={unapprovedAmbassadors} />
    </div>
  );
}
