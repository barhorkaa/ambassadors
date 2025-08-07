import PageNavigation from '@/app/ui/layout/page-navigation';
import CreateMaterialModal from '@/app/ui/modals/create/create-material-modal';
import InfoMaterialsModal from '@/app/ui/modals/info/info-materials-modal';
import { BaseLayoutProps } from '@/app/utils/interface-props';
import { PageUrl } from '@/app/utils/pages';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Materiály | AmbassadorsFIMU',
};

const materialsPages: PageUrl[] = [{ name: 'Dostupné materiály', url: '/materials' }];

export default async function Layout({ children }: BaseLayoutProps) {
  const session = await auth();
  const isManager = session?.user.role === UserRoles.manager;

  if (isManager && !materialsPages.some((e) => e.name === 'Vymazané materiály')) {
    materialsPages.push({ name: 'Vymazané materiály', url: '/materials/deleted' });
  }

  return (
    <section>
      <div className="flex flex-row justify-between content items-end">
        <h1>Materiály</h1>
        {isManager && <CreateMaterialModal />}
      </div>
      <hr className="w-full mb-0" />
      <PageNavigation pages={materialsPages} modal={<InfoMaterialsModal />} />
      <div className="content">{children}</div>
    </section>
  );
}
