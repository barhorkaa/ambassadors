import PageNavigation from '@/app/ui/layout/page-navigation';
import { PageUrl } from '@/app/utils/pages';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Akce | AmbassadorsFIMU',
};

const eventPages: PageUrl[] = [
  { name: 'Informace', url: '/events' },
  { name: 'Aktivní akce', url: '/events/all' },
  { name: 'Nepotvrzené akce', url: '/events/unapproved' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="flex flex-row justify-between items-end content">
        <h1>Akce</h1>
        <Link className="btn" href={'/events/new'}>
          <PlusIcon className="h-5" />
          <p className="hidden md:block">Přidat akci</p>
        </Link>
      </div>
      <hr className="w-full mb-0" />
      <PageNavigation pages={eventPages} />
      <div className="content">{children}</div>
    </section>
  );
}
