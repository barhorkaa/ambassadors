import React from "react";
import Link from "next/link";
import {signOut} from "@/auth";
import {eventsPages, managerPages, programPages} from "@/app/utils/pages";

export default function SideBar() {
  return(
    <div className="drawer z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content py-8">
          {/*<li><p>&nbsp;</p></li>*/}
          <li><Link href={""}>Můj účet</Link></li>
          <hr/>
          {eventsPages.map((page) => (
            <li><Link href={page.url}>{page.name}</Link></li>
          ))}
          <hr/>
          {programPages.map((page) => (
            <li><Link href={page.url}>{page.name}</Link></li>
          ))}
          <hr/>
          <li>
            <form action={async () => {
              'use server';
              await signOut();
            }}>
              <button>Odhlásit se</button>
            </form>
          </li>

        </ul>
      </div>
    </div>
  )
}