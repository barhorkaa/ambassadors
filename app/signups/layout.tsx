import PageNavigation from '@/app/ui/layout/page-navigation';
import InfoSignupsModal from '@/app/ui/modals/info/info-signups-modal';
import { BaseLayoutProps } from '@/app/utils/interface-props';
import { PageUrl } from '@/app/utils/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Přihlášení na akce | AmbassadorsFIMU',
};

const signupsPages: PageUrl[] = [
  { name: 'Všechna aktuální přihlášení', url: '/signups' },
  { name: 'Nepotvrzená přihlášení', url: '/signups/unapproved' },
];

export default function Layout({ children }: BaseLayoutProps) {
  return (
    <section>
      <h1 className="content">Přihlášení na akce</h1>
      <hr className="w-full mb-0" />
      <PageNavigation pages={signupsPages} modal={<InfoSignupsModal />} />
      <div className="content">{children}</div>
    </section>
  );
}
