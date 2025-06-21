import BackNavigation from '@/app/ui/layout/back-navigation';
import { BaseLayoutProps } from '@/app/utils/interface-props';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { getUserById } from '@/database/repository/user';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informace o uživateli | AmbassadorsFIMU',
};

interface LayoutProps {
  motivation: React.ReactNode;
  user: React.ReactNode;
  signups: React.ReactNode;
  params: { id: string };
}

export default async function Layout({ children, motivation, user, signups, params }: BaseLayoutProps & LayoutProps) {
  const session = await auth();
  const shownUser = await getUserById(params.id);

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
      {children}
      <div className="grid grid-cols-1 grid-rows-[min-content_min-content] md:grid-cols-2 md:grid-rows-1 gap-4 md:px-6">
        {user}
        {motivation}
      </div>
      {session?.user.role === UserRoles.manager && (
        <div className="md:px-6">
          <hr />
          {signups}
        </div>
      )}
    </section>
  );
}
