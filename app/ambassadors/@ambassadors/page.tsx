import { UserList } from '@/app/ui/utils/user-list';
import { getAllAmbassadors } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';

export default async function AmbassadorsSlot() {
  let allAmbassadors: UserModel[] = await getAllAmbassadors();

  return (
    <div>
      <UserList title={'Ambasadoři'} list={allAmbassadors} />
    </div>
  );
}
