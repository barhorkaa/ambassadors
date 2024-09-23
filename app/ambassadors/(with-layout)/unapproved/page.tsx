import { UserList } from '@/app/ui/utils/content-list';
import { getNotApprovedUsers } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';

export default async function Page() {
  const unapprovedAmbassadors: UserModel[] = await getNotApprovedUsers();

  return (
    <UserList
      title={'Nepotvrzení uživatelé'}
      list={unapprovedAmbassadors}
      emptyMessage={'V součastné době nejsou v aplikaci žádní uživatelé, kteřý by čekali na potvrzení.'}
    />
  );
}
