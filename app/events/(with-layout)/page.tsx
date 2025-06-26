import Pagination from '@/app/ui/search/pagination';
import Search from '@/app/ui/search/search';
import { EventList } from '@/app/ui/utils/content-list';
import { TableSkeleton } from '@/app/ui/utils/skeletons';
import { getAllFilteredActiveEvents, getAllFilteredActiveEventsCount } from '@/database/repository/event';
import { EventModel } from '@/models/event-models';
import { Suspense } from 'react';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const allFilteredEvents: EventModel[] = await getAllFilteredActiveEvents(true, query, currentPage);
  const eventsPages = await getAllFilteredActiveEventsCount(true, query);

  return (
    <>
      <h2 className="pb-2">Aktivní akce</h2>
      <div className="flex flex-col gap-2">
        <Search placeholder={'Vyhledat akci'} />
      </div>
      <Pagination totalPages={eventsPages} />
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <EventList
          title={'Aktivní akce'}
          list={allFilteredEvents}
          emptyMessage={
            query !== null
              ? 'Nemáme žádnou akci, ktrá by vyhovovala hledanému pojmu.'
              : 'Momentálně nejsou k dispozici žádné akce. Jestli chceš někam jet, vytvoř návrh na novou akci stlačením tlačítka Přidat.'
          }
        />
      </Suspense>
      <Pagination totalPages={eventsPages} />
    </>
  );
}
