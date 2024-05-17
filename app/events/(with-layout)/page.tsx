import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Events() {
  return (
    <>
      <div className="flex flex-row justify-between items-end content">
        <h1>Akce</h1>
        <Link className="btn" href={'/events/new'}>
          <PlusIcon className="h-5" />
          <p className="hidden md:block">Přidat akci</p>
        </Link>
      </div>
      <hr className="w-full" />
    </>
  );
}
