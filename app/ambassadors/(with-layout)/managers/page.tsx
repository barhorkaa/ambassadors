import { UserList } from '@/app/ui/utils/content-list';
import { getAllManagers } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';

export default async function Managers() {
  const allManagers: UserModel[] = await getAllManagers();

  return (
    <div className="content">
      <UserList title={'Manažeři'} list={allManagers} />
    </div>
  );
}
