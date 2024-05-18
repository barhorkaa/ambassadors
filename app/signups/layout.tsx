import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Přihlášení na akce | AmbassadorsFIMU',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1 className="content">Přihlášení na akce</h1>
      <hr className="w-full mb-0" />
      <ul className="page-menu">
        <li>
          <Link href={'/signups'}>Informace</Link>
        </li>
        <li>
          <Link href={'/signups/all'}>Všechna aktuání přihlášení</Link>
        </li>
        <li>
          <Link href={'/signups/unapproved'}>Nepotvrzené přihlášení</Link>
        </li>
      </ul>
      <div className="content">{children}</div>
    </section>
  );
}
