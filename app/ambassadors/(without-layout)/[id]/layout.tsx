import { approveUserById } from '@/app/lib/actions/user';
import ApproveButton from '@/app/ui/button/approve-button';
import BackNavigation from '@/app/ui/layout/back-navigation';
import PageNavigation from '@/app/ui/layout/page-navigation';
import EditNotificationsModal from '@/app/ui/modals/edit/edit-notifications-modal';
import EditUserModal from '@/app/ui/modals/edit/edit-user-modal';
import { BaseLayoutProps } from '@/app/utils/interface-props';
import { PageUrl } from '@/app/utils/pages';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { getUserNotifications, getUserNotificationsManager } from '@/database/repository/notifications';
import { getUserById } from '@/database/repository/user';
import { ManagerNotifications, UserNotifications } from '@/models/notifications-models';
import { UserModel } from '@/models/user-models';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Informace o uživateli | AmbassadorsFIMU',
};

interface LayoutProps {
  params: { id: string };
}

export default async function Layout({ children, params }: BaseLayoutProps & LayoutProps) {
  const session = await auth();
  const shownUser = await getUserById(params.id);

  const userShown: UserModel = await getUserById(params.id);

  const userDetailPages: PageUrl[] = [
    { name: 'Osobní informace', url: `/ambassadors/${params.id}/detail` },
    { name: 'Aktuální přihlášení', url: `/ambassadors/${params.id}/events` },
    { name: 'Historie přihlášení', url: `/ambassadors/${params.id}/events/history` },
  ];

  if (session?.user.role !== UserRoles.manager && params.id !== session?.user.id) {
    redirect('/denied/role');
  }

  const userNotifications: UserNotifications = await getUserNotifications(userShown.id);

  let managerNotifications: ManagerNotifications | undefined = undefined;
  if (userShown.role === UserRoles.manager) {
    managerNotifications = await getUserNotificationsManager(userShown.id);
  }

  return (
    <section>
      <div className="align-text-bottom flex flex-row gap-4">
        {session?.user.role === UserRoles.manager && (
          <BackNavigation
            href={shownUser.role === UserRoles.ambassador ? '/ambassadors' : '/ambassadors/managers'}
            tooltip={'Zpátky na Uživatele'}
          />
        )}
        <h1 className="font-light text-xl">Informace o uživateli</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between content md:items-end">
          <h1 className="truncate">{userShown!.name}</h1>
          <div className="flex flex-row gap-2">
            {!userShown!.approved && <ApproveButton fun={approveUserById} id={userShown!.id} />}
            {session?.user.role === UserRoles.manager ? (
              <EditUserModal user={userShown!} full={true} canEditPassword={session?.user.id === params.id} />
            ) : (
              session?.user.id === params.id && <EditUserModal user={userShown!} full={false} canEditPassword={true} />
            )}
            {params.id === session?.user.id && (
              <EditNotificationsModal managerNotifications={managerNotifications} notifications={userNotifications} />
            )}
          </div>
        </div>
        <hr className="w-full mb-0" />
        <PageNavigation pages={userDetailPages} infoPageUrl="" />
      </div>
      {children}
    </section>
  );
}
