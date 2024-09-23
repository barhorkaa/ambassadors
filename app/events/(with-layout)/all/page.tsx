import { EventList } from '@/app/ui/utils/content-list';
import { TableSkeleton } from '@/app/ui/utils/skeletons';
import { getAllActiveEvents } from '@/database/repository/event';
import { EventModel } from '@/models/event-models';
import { Suspense } from 'react';

export default async function Page() {
  const allEvents: EventModel[] = await getAllActiveEvents(true);

  return (
    <Suspense fallback={<TableSkeleton />}>
      <EventList
        title={'Aktivní akce'}
        list={allEvents}
        emptyMessage={
          'Momentálně nejsou k dispozici žádné akce. Jestli chceš někam jet, vytvoř návrh na novou akci stlačením tlačítka Přidat.'
        }
      />
    </Suspense>
  );
}
