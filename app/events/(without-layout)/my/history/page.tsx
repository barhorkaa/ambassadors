import DateSearch from '@/app/ui/search/date-search';
import Pagination from '@/app/ui/search/pagination';
import Search from '@/app/ui/search/search';
import { EventList } from '@/app/ui/utils/content-list';
import { TableSkeleton } from '@/app/ui/utils/skeletons';
import { auth } from '@/auth';
import { getUserSignUps, getUserSignUpsCount } from '@/database/repository/event-user';
import { Suspense } from 'react';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: string;
  }>;
}) {
  const session = await auth();

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const dateFrom = new Date(searchParams?.dateFrom || '2000-01-01');
  const dateTo = new Date(searchParams?.dateTo || '3000-01-01');
  const currentPage = Number(searchParams?.page) || 1;

  const userEvents = await getUserSignUps(session!.user.id, false, false, query, currentPage, dateFrom, dateTo);
  const eventsPages = await getUserSignUpsCount(session!.user.id, false, false, query, dateFrom, dateTo);

  return (
    <>
      <h2 className="pb-2">Historie mých přihlášení</h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-2">
        <Search placeholder={'Vyhledat akci'} />
        <DateSearch />
      </div>
      <Pagination totalPages={eventsPages} />
      <Suspense key={query + currentPage + dateFrom + dateTo} fallback={<TableSkeleton />}>
        <EventList
          title={'Akce, kde jsem přihlášen/a'}
          list={userEvents}
          emptyMessage={
            searchParams ? 'Žádná tvá akce nevyhovuje hledanému pojmu.' : 'Zatím jsi nebyl/a na žádné akci.'
          }
        />
      </Suspense>
      <Pagination totalPages={eventsPages} />
    </>
  );
}
