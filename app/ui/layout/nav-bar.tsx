import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="navbar bg-fi-300">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href={'/'}>
          <Image src="logo_transparent.svg" alt="logo" width={40} height={40} />
          <p className="hidden md:block">AmbassadorsFIMU</p>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={'/login'} className="text-black">
              Přihlásit
            </Link>
          </li>
          <li>
            <Link href={'/register'} className="text-black">
              Registrovat
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
