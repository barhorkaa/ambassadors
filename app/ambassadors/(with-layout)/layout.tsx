import PageNavigation from '@/app/ui/layout/page-navigation';
import { BaseLayoutProps } from '@/app/utils/interface-props';
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

export default function Layout({ children }: BaseLayoutProps) {
  return (
    <section>
      <h1 className="content">Uživatelé</h1>
      <hr className="w-full mb-0" />
      <PageNavigation pages={ambassadorPages} />
      <div className="content">{children}</div>
    </section>
  );
}
