import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Detail akce | AmbassadorsFIMU',
};

export default function Layout({
  children,
  event,
  type,
  users,
  report,
}: {
  children: React.ReactNode;
  event: React.ReactNode;
  type: React.ReactNode;
  users: React.ReactNode;
  report: React.ReactNode;
}) {
  return (
    <section>
      <div className="align-text-base flex flex-row gap-4">
        <Link href={'/events'}>
          <ArrowLeftIcon title="Zpátky na Akce" className="h-5" />
        </Link>
        <h1 className="font-light text-xl">Detail akce</h1>
      </div>
      {children}
      <div>
        {event}
        <div className="grid grid-cols-3 grid-rows-3">
          {type}
          {users}
          {report}
        </div>
      </div>
    </section>
  );
}
