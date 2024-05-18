import { UserList } from '@/app/ui/utils/user-list';
import { getAllAmbassadors } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';

export default async function AmbassadorsSlot() {
  const allAmbassadors: UserModel[] = await getAllAmbassadors();

  return (
    <div className="content">
      <UserList title={'Ambasadoři'} list={allAmbassadors} />
    </div>
  );
}
