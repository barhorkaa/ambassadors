import { approveUserById } from '@/app/lib/actions/users';
import ApproveButton from '@/app/ui/button/approve-button';
import EditUserModal from '@/app/ui/modals/edit-user-modal';
import MotivationDetail from '@/app/ui/motivation/motivation-detail';
import UserDetail from '@/app/ui/user/user-detail';
import { auth } from '@/auth';
import { getUserMotivation } from '@/database/repository/motivation';
import { getUserById } from '@/database/repository/user';
import { MotivationModel } from '@/models/motivation-models';
import { UserModel } from '@/models/user-models';

export default async function User({ params }: { params: { id: string } }) {
  const user: UserModel = await getUserById(params.id);
  const userMotivation: MotivationModel | undefined = await getUserMotivation(params.id);

  const session = await auth();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <h1>Informace o uživateli: {user!.name}</h1>
        <div className="flex flex-row gap-2">
          {!user!.approved && <ApproveButton fun={approveUserById} id={user!.id} />}
          {session?.user.role === 'manager' ? (
            <EditUserModal user={user!} full={true} />
          ) : (
            session?.user.id === params.id && <EditUserModal user={user!} full={false} />
          )}
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex flex-col md:flex-row justify-start gap-20 py-4 ">
        <div>
          <h2>Detail uživatele</h2>
          <UserDetail user={user!} />
        </div>
        <div>
          <h2>Motivační formulář</h2>
          <MotivationDetail motivation={userMotivation} />
        </div>
      </div>
    </div>
  );
}
