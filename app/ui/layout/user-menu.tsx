'use client';

import { signOutAction } from '@/app/lib/actions/authentication';
import { ArrowLeftStartOnRectangleIcon, CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const UserMenu = ({ id, name }: { id: string; name: string }) => {
  return (
    <div className="dropdown dropdown-end dropdown-hover">
      <div tabIndex={0} role="button" className="btn shadow-none border-none">
        <h3 className="hidden md:flex flex-row">{name}</h3>
        <div className="flex md:hidden">
          <UserIcon className="h-6" />
        </div>
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-1 w-80 shadow-sm">
        <li>
          <Link href="/me">
            <UserIcon className="h-4" /> Můj účet
          </Link>
        </li>
        <hr className="w-full mx-0" />
        <li>
          <div className="py-0 gap-2">
            <CalendarDaysIcon className="h-4" />
            <h2 className="menu-title p-0">Moje přihlášení</h2>
          </div>
          <ul>
            <li>
              <Link href="/events/my">Aktuální akce</Link>
            </li>
            <li>
              <Link href="/events/my/history">Historie akcí</Link>
            </li>
          </ul>
        </li>
        <hr className="w-full mx-0" />
        <li>
          <form action={signOutAction}>
            <button className="flex flex-row gap-x-2">
              <ArrowLeftStartOnRectangleIcon className="h-4" />
              <>Odhlásit se</>
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
