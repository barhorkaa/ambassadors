import { approveUserById } from '@/app/lib/actions/users';
import ApproveButton from '@/app/ui/button/approve-button';
import EditUserModal from '@/app/ui/modals/edit/edit-user-modal';
import { auth } from '@/auth';
import { getUserById } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';
import { redirect } from 'next/navigation';

export default async function User({ params }: { params: { id: string } }) {
  const user: UserModel = await getUserById(params.id);

  const session = await auth();
  if (session?.user.role !== 'manager' && params.id !== session?.user.id) {
    redirect('/denied/role');
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-end">
        <h1>{user!.name}</h1>
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
    </div>
  );
}
