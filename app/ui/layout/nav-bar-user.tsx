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
        <Link className="btn btn-ghost text-xl" href={'/'} prefetch={false}>
          <Image className="" src="/logo_transparent.svg" alt="logo" width={40} height={40} />
          <p className="hidden md:block">AmbassadorsFIMU</p>
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="hidden md:flex flex-row gap-4 text-black" href={'/me'} prefetch={false}>
          <h3>{session?.user.name}</h3>
        </Link>
      </div>
    </div>
  );
}
