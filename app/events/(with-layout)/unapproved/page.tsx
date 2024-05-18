import { EventList } from '@/app/ui/utils/content-list';
import TableSkeleton from '@/app/ui/utils/skeletons';
import { getAllActiveEvents } from '@/database/repository/events';
import { EventModel } from '@/models/event-models';
import { Suspense } from 'react';

export default async function Page() {
  console.log('calling get all unapproved events at: ', new Date());
  const allUnapprovedEvents: EventModel[] = await getAllActiveEvents(false);
  console.log('got result in component from get all unapproved events at: ', new Date());

  return (
    <Suspense fallback={<TableSkeleton />}>
      <div className="content pt-4">
        <EventList title={'Nepotvrzené akce'} list={allUnapprovedEvents} emptyMessage={'Všechny akce jsou potvrzeny'} />
      </div>
    </Suspense>
  );
}
