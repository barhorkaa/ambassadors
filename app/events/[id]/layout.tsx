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
      <div className="flex flex-col gap-4">
        {event}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-9 md:grid-rows-2">
          <div className="row-start-2 md:row-start-1 md:col-start-1 md:col-span-6">{type}</div>
          <div className="row-start-1 md:col-start-7 md:col-span-3 md:row-span-2">{users}</div>
          <div className="md:col-start-2 md:row-start-2 md:row-end-2 md:col-span-5 ">{report}</div>
        </div>
      </div>
    </section>
  );
}
