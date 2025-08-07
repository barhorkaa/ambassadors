import InfoMyEventsHistoryModal from '@/app/ui/modals/info/info-my-events-history-modal';
import { EventList } from '@/app/ui/utils/content-list';
import SearchPaginationLayout from '@/app/ui/utils/search-pagination-layout';
import { BasePageSearchProps, DatePageSearchProps } from '@/app/utils/interface-props';
import { getUserSignUps, getUserSignUpsCount } from '@/database/repository/event-user';
import { MAX_DATE, MIN_DATE } from '@/database/repository/utils/consts';

export default async function Page(props: BasePageSearchProps & DatePageSearchProps & { params: { id: string } }) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const dateFrom = new Date(searchParams?.dateFrom || MIN_DATE);
  const dateTo = new Date(searchParams?.dateTo || MAX_DATE);
  const currentPage = Number(searchParams?.page) || 1;

  const userEvents = await getUserSignUps(props.params.id, false, false, query, currentPage, dateFrom, dateTo);
  const eventsPages = await getUserSignUpsCount(props.params.id, false, false, query, dateFrom, dateTo);

  return (
    <>
      <div className="flex flex-row gap-2 pb-2">
        <h2>Historie přihlášení</h2>
        <InfoMyEventsHistoryModal />
      </div>
      <SearchPaginationLayout
        totalPages={eventsPages}
        query={query}
        currentPage={currentPage}
        placeHolder="Vyhledat akci"
        includeDateSearch={true}
        dateFrom={dateFrom}
        dateTo={dateTo}
      >
        <EventList
          list={userEvents}
          emptyMessage={
            searchParams ? 'Žádná tvá akce nevyhovuje hledanému pojmu.' : 'Zatím jsi nebyl/a na žádné akci.'
          }
        />
      </SearchPaginationLayout>
    </>
  );
}
