import { EventList } from '@/app/ui/utils/content-list';
import { TableSkeleton } from '@/app/ui/utils/skeletons';
import { getAllActiveEvents } from '@/database/repository/event';
import { EventModel } from '@/models/event-models';
import { Suspense } from 'react';

export default async function Page() {
  const allUnapprovedEvents: EventModel[] = await getAllActiveEvents(false);

  return (
    <Suspense fallback={<TableSkeleton />}>
      <EventList title={'Nepotvrzené akce'} list={allUnapprovedEvents} emptyMessage={'Všechny akce jsou potvrzené!'} />
    </Suspense>
  );
}
