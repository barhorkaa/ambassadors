import SideBar from '@/app/ui/layout/side-bar';
import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

export default async function NavBarUser() {
  const session = await auth();

  return (
    <div className="navbar bg-fi-300">
      <div className="navbar-start">
        <div className="dropdown max-h-fit min-h-fit">
          <SideBar userRole={session?.user.role!} />
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-xl" href={'/'}>
          <Image className="" src="/logo_transparent.svg" alt="logo" width={40} height={40} />
          <p className="hidden md:block">AmbassadorsFIMU</p>
        </Link>
      </div>
      <div className="navbar-end">
        {/*<button className="btn btn-ghost btn-circle">*/}
        {/*  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>*/}
        {/*</button>*/}
        <Link className="hidden md:flex flex-row gap-4" href={'/me'}>
          Vítej: <h3>{session?.user.name}</h3>
        </Link>
      </div>
    </div>
  );
}
