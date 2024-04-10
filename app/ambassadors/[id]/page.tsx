import { approveUserById } from '@/app/lib/actions/users';
import ApproveButton from '@/app/ui/button/approve-button';
import MotivationDetail from '@/app/ui/motivation/motivation-detail';
import UserDetail from '@/app/ui/user/user-detail';
import { getUserMotivation } from '@/database/repository/motivation';
import { getUserById } from '@/database/repository/user';
import { MotivationModel } from '@/models/motivation/motivation-model';
import { UserModel } from '@/models/userModel';

export default async function User({ params }: { params: { id: string } }) {
  const user: UserModel | undefined = await getUserById(params.id);
  if (user === undefined) {
    return <div>failed to get userto</div>;
  }

  const userMotivation: MotivationModel | undefined = await getUserMotivation(params.id);

  return (
    <div className="page flex flex-col">
      <div className="flex flex-row">
        <h1>Informace o uživateli: {user.name}</h1>
      </div>
      <hr className="" />
      <div className="flex flex-row justify-start gap-10 sm:flex-col py-4 ">
        <div>
          <div className="flex flex-row justify-between">
            <h2>Detail uživatele</h2>
            {!user.approved && <ApproveButton fun={approveUserById} id={user.id} />}
          </div>
          <UserDetail user={user} />
        </div>
        <div>
          <h2>Motivační formulář</h2>
          <MotivationDetail motivation={userMotivation} />
        </div>
      </div>
    </div>
  );
}
