import { UserList } from '@/app/ui/utils/user-list';
import { getAllManagers } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';

export default async function Managers() {
  let allManagers: UserModel[] = await getAllManagers();

  return (
    <div>
      <UserList title={'Manažeři'} list={allManagers} />
    </div>
  );
}
