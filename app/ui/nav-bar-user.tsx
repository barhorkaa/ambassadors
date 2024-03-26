import Link from "next/link";
import {signOut} from "@/auth";

export default function NavBarUser() {
  return(
    <div className="navbar bg-fi">
      <div className="navbar-start">
        <div className="dropdown max-h-fit min-h-fit">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href={""}>Můj účet</Link></li>
            <hr/>
            <li><Link href={""}>Moje akce</Link></li>
            <li><Link href={"/events"}>Všechny akce</Link></li>
            <li><Link href={""}>Historie akcií</Link></li>
            <hr/>
            <li><Link href={"/"}>O programu</Link></li>
            <li><Link href={""}>Kontakty</Link></li>
            <li><Link href={""}>Pomocník</Link></li>
            <hr/>
            <form action={async () => {
              'use server';
              await signOut();
            }}>
              <button>Odhlásit se</button>
            </form>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-xl" href={"/"}>AmbassadorsFIMU</Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    </div>
  );
}