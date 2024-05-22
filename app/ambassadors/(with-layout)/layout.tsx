import PageNavigation from '@/app/ui/layout/page-navigation';
import { PageUrl } from '@/app/utils/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uživatelé | AmbassadorsFIMU',
};

const ambassadorPages: PageUrl[] = [
  { name: 'Informace', url: '/ambassadors' },
  { name: 'Nepotvrzení uživatelé', url: '/ambassadors/unapproved' },
  { name: 'Ambasadoři', url: '/ambassadors/ambassadors' },
  { name: 'Manažeři', url: '/ambassadors/managers' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1 className="content">Uživatelé</h1>
      <hr className="w-full mb-0" />
      <PageNavigation pages={ambassadorPages} />
      {children}
    </section>
  );
}
