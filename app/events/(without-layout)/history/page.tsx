import DateSearch from '@/app/ui/search/date-search';
import Pagination from '@/app/ui/search/pagination';
import Search from '@/app/ui/search/search';
import { EventList } from '@/app/ui/utils/content-list';
import { TableSkeleton } from '@/app/ui/utils/skeletons';
import { BasePageSearchProps, DatePageSearchProps } from '@/app/utils/interface-props';
import { getAllHistoryEvents, getAllHistoryEventsCount } from '@/database/repository/event';
import { MAX_DATE, MIN_DATE } from '@/database/repository/utils/consts';
import { Suspense } from 'react';

export default async function Page(props: BasePageSearchProps & DatePageSearchProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const dateFrom = new Date(searchParams?.dateFrom || MIN_DATE);
  const dateTo = new Date(searchParams?.dateTo || MAX_DATE);
  const currentPage = Number(searchParams?.page) || 1;

  const allFilteredEvents = await getAllHistoryEvents(true, query, currentPage, dateFrom, dateTo);
  const eventsPages = await getAllHistoryEventsCount(true, query, dateFrom, dateTo);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:gap-2">
        <Search placeholder={'Vyhledat akci'} />
        <DateSearch />
      </div>
      <Pagination totalPages={eventsPages!} />
      <Suspense key={query + currentPage + dateFrom + dateTo} fallback={<TableSkeleton />}>
        <EventList
          title={'Aktivní akce'}
          list={allFilteredEvents!}
          emptyMessage={
            query !== null ? 'Nemáme žádnou akci, ktrá by vyhovovala hledanému pojmu.' : 'V historii nic zatím nemáme'
          }
        />
      </Suspense>
      <Pagination totalPages={eventsPages!} />
    </>
  );
}
