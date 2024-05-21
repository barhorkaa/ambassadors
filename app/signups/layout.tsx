import PageNavigation from '@/app/ui/layout/page-navigation';
import { PageUrl } from '@/app/utils/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Přihlášení na akce | AmbassadorsFIMU',
};

const signupsPages: PageUrl[] = [
  { name: 'Informace', url: '/signups' },
  { name: 'Všechna aktuální přihlášení', url: '/signups/all' },
  { name: 'Nepotvrzená přihlášení', url: '/signups/unapproved' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1 className="content">Přihlášení na akce</h1>
      <hr className="w-full mb-0" />
      <PageNavigation pages={signupsPages} />
      <div className="content">{children}</div>
    </section>
  );
}
