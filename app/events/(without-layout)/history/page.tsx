import { EventList } from '@/app/ui/utils/content-list';
import { TableSkeleton } from '@/app/ui/utils/skeletons';
import { getAllHistoryEvents } from '@/database/repository/event';
import { Suspense } from 'react';

export default async function Page() {
  const eventsWithApprovedReports = await getAllHistoryEvents(true);

  return (
    <Suspense fallback={<TableSkeleton />}>
      <EventList title={''} list={eventsWithApprovedReports!} emptyMessage={'V historii nic zatím nemáme'} />
    </Suspense>
  );
}
