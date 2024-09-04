import { approveUserById } from '@/app/lib/actions/user';
import ApproveButton from '@/app/ui/button/approve-button';
import EditNotificationsModal from '@/app/ui/modals/edit/edit-notifications-modal';
import EditUserModal from '@/app/ui/modals/edit/edit-user-modal';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { getUserNotifications, getUserNotificationsManager } from '@/database/repository/notifications';
import { getUserById } from '@/database/repository/user';
import { ManagerNotifications, UserNotifications } from '@/models/notifications-models';
import { UserModel } from '@/models/user-models';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const user: UserModel = await getUserById(params.id);

  const session = await auth();
  if (session?.user.role !== UserRoles.manager && params.id !== session?.user.id) {
    redirect('/denied/role');
  }

  const userNotifications: UserNotifications = await getUserNotifications(user.id);

  let managerNotifications: ManagerNotifications | undefined = undefined;
  if (user.role === UserRoles.manager) {
    managerNotifications = await getUserNotificationsManager(user.id);
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
          {params.id === session?.user.id && (
            <EditNotificationsModal managerNotifications={managerNotifications} notifications={userNotifications} />
          )}
        </div>
      </div>
      <hr className="w-full" />
    </div>
  );
}
