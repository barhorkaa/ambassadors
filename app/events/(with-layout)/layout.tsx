import TableSkeleton from '@/app/ui/utils/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Akce | AmbassadorsFIMU',
};

export default function Layout({
  children,
  all,
  unapproved,
}: {
  children: React.ReactNode;
  all: React.ReactNode;
  unapproved: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <Suspense fallback={<TableSkeleton />}>
        <div className="content">{unapproved}</div>
      </Suspense>
      <Suspense fallback={<TableSkeleton />}>
        <div className="content">{all}</div>
      </Suspense>
    </section>
  );
}
