import EditUserModal from '@/app/ui/modals/edit-user-modal';
import MotivationDetail from '@/app/ui/motivation/motivation-detail';
import UserDetail from '@/app/ui/user/user-detail';
import { auth } from '@/auth';
import { getUserMotivation } from '@/database/repository/motivation';
import { getUserById } from '@/database/repository/user';
import { MotivationModel } from '@/models/motivation/motivation-model';
import { UserModel } from '@/models/userModel';

export default async function Me() {
  const session = await auth();

  const user: UserModel | undefined = await getUserById(session?.user.id!);
  if (user === undefined) {
    return <div>no details</div>;
  }

  const motivation: MotivationModel | undefined = await getUserMotivation(session?.user.id!);

  return (
    <div className="page">
      <div className="flex flex-row justify-between">
        <h1>Moje informace</h1>
        <EditUserModal user={user} />
      </div>

      <hr className="divider w-full" />
      <div className="flex flex-row gap-20 sm:flex-col sm:gap-2">
        <UserDetail user={user} />
        <MotivationDetail motivation={motivation} />
      </div>
    </div>
  );
}
