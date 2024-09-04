import { approveUserById } from '@/app/lib/actions/user';
import ApproveButton from '@/app/ui/button/approve-button';
import EditNotificationsModal from '@/app/ui/modals/edit/edit-notifications-modal';
import EditUserModal from '@/app/ui/modals/edit/edit-user-modal';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { getUserById } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const user: UserModel = await getUserById(params.id);

  const session = await auth();
  if (session?.user.role !== UserRoles.manager && params.id !== session?.user.id) {
    redirect('/denied/role');
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between content md:items-end">
        <h1 className="truncate">{user!.name}</h1>
        <div className="flex flex-row gap-2">
          {!user!.approved && <ApproveButton fun={approveUserById} id={user!.id} />}
          {session?.user.role === UserRoles.manager ? (
            <EditUserModal user={user!} full={true} />
          ) : (
            session?.user.id === params.id && <EditUserModal user={user!} full={false} />
          )}
          <EditNotificationsModal user={user!} />
        </div>
      </div>
      <hr className="w-full" />
    </div>
  );
}
