import Link from "next/link";

export default function NavBar() {
  return(
    <nav className="navbar bg-fi-300">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href={"/"}>AmbassadorsFIMU</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href={"/login"}>Login</Link></li>
          <li><Link href={"/register"}>Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}