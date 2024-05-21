import { PlusIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Akce | AmbassadorsFIMU',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="flex flex-row justify-between items-end content">
        <h1>Akce</h1>
        <Link className="btn" href={'/events/new'} prefetch={false}>
          <PlusIcon className="h-5" />
          <p className="hidden md:block">Přidat akci</p>
        </Link>
      </div>
      <hr className="w-full mb-0" />
      <ul className="page-menu">
        <li>
          <Link href={'/events'}>Informace</Link>
        </li>
        <li>
          <Link href={'/events/all'}>Aktivní akce</Link>
        </li>
        <li>
          <Link href={'/events/unapproved'}>Nepotvrzené akce</Link>
        </li>
      </ul>
      <div className="content">{children}</div>
    </section>
  );
}
