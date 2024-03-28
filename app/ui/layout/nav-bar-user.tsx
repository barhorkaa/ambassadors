import Link from "next/link";
import {signOut} from "@/auth";
import SideBar from "@/app/ui/layout/side-bar";

export default function NavBarUser() {
  return(
    <div className="navbar bg-fi-300">
      <div className="navbar-start">
        <div className="dropdown max-h-fit min-h-fit">
          <SideBar/>
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