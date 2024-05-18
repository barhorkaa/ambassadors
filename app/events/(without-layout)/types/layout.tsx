import CreateEventTypeModal from '@/app/ui/modals/create/create-event-type-modal';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Druhy akcí | AmbassadorsFIMU',
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <section>
      <div className="flex flex-row justify-between content items-end">
        <h1>Druhy akcí</h1>
        {session?.user.role === UserRoles.manager && <CreateEventTypeModal />}
      </div>
      <hr className="w-full mb-0" />
      <ul className="page-menu"></ul>
      {children}
    </section>
  );
}
