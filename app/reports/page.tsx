import { EventList } from '@/app/ui/utils/content-list';
import SearchPaginationLayout from '@/app/ui/utils/search-pagination-layout';
import { BasePageSearchProps, DatePageSearchProps } from '@/app/utils/interface-props';
import { getAllHistoryEvents, getAllHistoryEventsCount } from '@/database/repository/event';
import { MAX_DATE, MIN_DATE } from '@/database/repository/utils/consts';

export default async function Page(props: BasePageSearchProps & DatePageSearchProps & { params: { id: string } }) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const dateFrom = new Date(searchParams?.dateFrom || MIN_DATE);
  const dateTo = new Date(searchParams?.dateTo || MAX_DATE);
  const currentPage = Number(searchParams?.page) || 1;

  const allFilteredEvents = await getAllHistoryEvents(false, query, currentPage, dateFrom, dateTo);
  const eventsPages = await getAllHistoryEventsCount(true, query, dateFrom, dateTo);

  return (
    <SearchPaginationLayout
      totalPages={eventsPages!}
      query={query}
      currentPage={currentPage}
      placeHolder="Vyhledat akci"
      includeDateSearch={true}
      dateFrom={dateFrom}
      dateTo={dateTo}
    >
      <EventList
        list={allFilteredEvents!}
        emptyMessage={
          query !== null
            ? 'Nemáme žádnou akci, ktrá by vyhovovala hledanému pojmu.'
            : 'V tento moment jsou všechny zprávy potvrzeny!'
        }
      />
    </SearchPaginationLayout>
  );
}
