import { UserList } from '@/app/ui/utils/content-list';
import { getAllAmbassadors } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';

export default async function Page() {
  const allAmbassadors: UserModel[] = await getAllAmbassadors();

  return (
    <UserList
      title={'Ambasadoři'}
      list={allAmbassadors}
      emptyMessage={'V aplikaci zatím nejsou registrovaní žádní ambasadoři.'}
    />
  );
}
