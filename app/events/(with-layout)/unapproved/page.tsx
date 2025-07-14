import { EventList } from '@/app/ui/utils/content-list';
import SearchPaginationLayout from '@/app/ui/utils/search-pagination-layout';
import { BasePageSearchProps, DatePageSearchProps } from '@/app/utils/interface-props';
import { getAllFilteredActiveEvents, getAllFilteredActiveEventsCount } from '@/database/repository/event';
import { MAX_DATE, MIN_DATE } from '@/database/repository/utils/consts';
import { EventModel } from '@/models/event-models';

export default async function Page(props: BasePageSearchProps & DatePageSearchProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const dateFrom = new Date(searchParams?.dateFrom || MIN_DATE);
  const dateTo = new Date(searchParams?.dateTo || MAX_DATE);
  const currentPage = Number(searchParams?.page) || 1;

  const allFilteredEvents: EventModel[] = await getAllFilteredActiveEvents(false, query, currentPage, dateFrom, dateTo);
  const eventsPages = await getAllFilteredActiveEventsCount(false, query, dateFrom, dateTo);

  return (
    <SearchPaginationLayout
      title="Nepotvrzené akce"
      totalPages={eventsPages}
      query={query}
      currentPage={currentPage}
      placeHolder="Vyhledat akci"
      includeDateSearch={true}
      dateFrom={dateFrom}
      dateTo={dateTo}
    >
      <EventList
        title={'Aktivní akce'}
        list={allFilteredEvents}
        emptyMessage={
          query !== null ? 'Nemáme žádnou akci, ktrá by vyhovovala hledanému pojmu.' : 'Všechny akce jsou potvrzené!'
        }
      />
    </SearchPaginationLayout>
  );
}
