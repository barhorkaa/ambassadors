import PageNavigation from '@/app/ui/layout/page-navigation';
import CreateEventTypeModal from '@/app/ui/modals/create/create-event-type-modal';
import { BaseLayoutProps } from '@/app/utils/interface-props';
import { PageUrl } from '@/app/utils/pages';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Druhy akcí | AmbassadorsFIMU',
};

const eventTypePages: PageUrl[] = [
  { name: 'Informace', url: '/events/types/info' },
  { name: 'Dostupné druhy akcí', url: '/events/types' },
];

export default async function Layout({ children }: BaseLayoutProps) {
  const session = await auth();
  const isManager = session?.user.role === UserRoles.manager;

  if (isManager) {
    eventTypePages.push({ name: 'Vymazané druhy akcí', url: '/events/types/deleted' });
  }

  return (
    <section>
      <div className="flex flex-row justify-between content items-end">
        <h1>Druhy akcí</h1>
        {isManager && <CreateEventTypeModal />}
      </div>
      <hr className="w-full mb-0" />
      <PageNavigation pages={eventTypePages} />
      <div className="content">{children}</div>
    </section>
  );
}
