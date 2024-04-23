'use client';

import { signOutAction } from '@/app/lib/actions/authentication';
import { eventsPages, managerPages, programPages } from '@/app/utils/pages';
import Link from 'next/link';
import { useState } from 'react';

export default function SideBar({ userRole }: { userRole: string }) {
  // const session = await auth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="drawer z-10">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
      </div>
      <div className="drawer-side min-h-screen">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content py-8">
          {/*<li><p>&nbsp;</p></li>*/}
          <li>
            <Link onClick={() => setIsOpen(false)} href={'/me'}>
              Můj účet
            </Link>
          </li>
          <hr className="w-full mx-0" />
          {eventsPages.map((page, index) => (
            <li key={index}>
              <Link onClick={() => setIsOpen(false)} href={page.url}>
                {page.name}
              </Link>
            </li>
          ))}
          <hr className="w-full mx-0" />
          {programPages.map((page, index) => (
            <li key={index}>
              <Link onClick={() => setIsOpen(false)} href={page.url}>
                {page.name}
              </Link>
            </li>
          ))}
          <hr className="w-full mx-0" />
          {userRole === 'manager' && (
            <div>
              {managerPages.map((page, index) => (
                <li key={index}>
                  <Link onClick={() => setIsOpen(false)} href={page.url}>
                    {page.name}
                  </Link>
                </li>
              ))}
              <hr className="w-full mx-0" />
            </div>
          )}
          <li>
            <form action={signOutAction}>
              <button>Odhlásit se</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}
