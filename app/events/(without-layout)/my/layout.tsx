import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Moje akce | AmbassadorsFIMU',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="content flex items-end">
        <h1>Moje akce</h1>
      </div>
      <hr className="w-full mb-0" />
      <ul className="page-menu">
        <li>
          <Link href={'/events/my'}>Informace</Link>
        </li>
        <li>
          <Link href={'/events/my/current'}>Aktuální přihlášení</Link>
        </li>
        <li>
          <Link href={'/events/my/history'}>Historie přihlášení</Link>
        </li>
      </ul>
      <div className="content">{children}</div>
    </section>
  );
}
