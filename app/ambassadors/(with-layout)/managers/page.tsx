import { UserList } from '@/app/ui/utils/content-list';
import { getAllManagers } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';

export default async function Page() {
  const allManagers: UserModel[] = await getAllManagers();

  return <UserList title={'Manažeři'} list={allManagers} emptyMessage={'Aplikace nýní nemá, žádné manažery.'} />;
}
