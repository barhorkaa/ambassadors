import CreateMaterialModal from '@/app/ui/modals/create/create-material-modal';
import { BaseLayoutProps } from '@/app/utils/interface-props';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Materiály | AmbassadorsFIMU',
};

export default async function Layout({ children }: BaseLayoutProps) {
  const session = await auth();

  return (
    <section>
      <div className="flex flex-row justify-between content items-end">
        <h1>Materiály</h1>
        {session?.user.role === UserRoles.manager && <CreateMaterialModal />}
      </div>
      <hr className="w-full mb-0" />
      <ul className="page-menu">
        <li>
          <Link href={'/materials'}>Informace</Link>
        </li>
        <li>
          <Link href={'/materials/all'}>Dostupné materiály</Link>
        </li>
        {session?.user.role === UserRoles.manager && (
          <li>
            <Link href={'/materials/deleted'}>Vymazané materiály</Link>
          </li>
        )}
      </ul>
      <div className="content">{children}</div>
    </section>
  );
}
