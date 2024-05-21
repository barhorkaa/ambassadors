import PageNavigation from '@/app/ui/layout/page-navigation';
import { PageUrl } from '@/app/utils/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moje akce | AmbassadorsFIMU',
};

const myEventsPages: PageUrl[] = [
  { name: 'Informace', url: '/events/my' },
  { name: 'Aktuální přihlášení', url: '/events/my/current' },
  { name: 'Historie přihlášení', url: '/events/my/history' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="content flex items-end">
        <h1>Moje akce</h1>
      </div>
      <hr className="w-full mb-0" />
      <PageNavigation pages={myEventsPages} />
      <div className="content">{children}</div>
    </section>
  );
}
