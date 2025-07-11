import PageNavigation from '@/app/ui/layout/page-navigation';
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
      <PageNavigation pages={signupsPages} infoPageUrl="/signups/info" />
      <div className="content">{children}</div>
    </section>
  );
}
