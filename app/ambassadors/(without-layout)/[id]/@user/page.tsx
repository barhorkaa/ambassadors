import UserDetail from '@/app/ui/user/user-detail';
import { getUserById } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';

export default async function User({ params }: { params: { id: string } }) {
  const user: UserModel = await getUserById(params.id);

  return (
    <div className="data-display h-fit">
      <div className="card-body">
        <h2 className="card-title">Detail uživatele</h2>
        <UserDetail user={user!} />
      </div>
    </div>
  );
}
