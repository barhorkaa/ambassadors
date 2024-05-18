import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Uživatelé | AmbassadorsFIMU',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end ">
        <h1 className="content">
          <Link href={'/ambassadors'} prefetch={false}>
            Uživatelé
          </Link>
        </h1>
      </div>
      <hr className="w-full mb-0" />
      <ul className="menu menu-vertical lg:menu-horizontal bg-fi-100 text-black font-semibold w-full mb-4">
        <li>
          <Link href={'/ambassadors'}>Informace</Link>
        </li>
        <li>
          <Link href={'/ambassadors/unapproved'}>Nepotvrzení uživatelé</Link>
        </li>
        <li>
          <Link href={'/ambassadors/ambassadors'}>Ambasadoři</Link>
        </li>
        <li>
          <Link href={'/ambassadors/managers'}>Manažeři</Link>
        </li>
      </ul>
      {children}
    </section>
  );
}
