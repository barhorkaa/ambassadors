import DateSearch from '@/app/ui/search/date-search';
import Pagination from '@/app/ui/search/pagination';
import Search from '@/app/ui/search/search';
import { EventList } from '@/app/ui/utils/content-list';
import { TableSkeleton } from '@/app/ui/utils/skeletons';
import { BasePageSearchProps, DatePageSearchProps } from '@/app/utils/interface-props';
import { auth } from '@/auth';
import { getUserSignUps, getUserSignUpsCount } from '@/database/repository/event-user';
import { MAX_DATE, MIN_DATE } from '@/database/repository/utils/consts';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Page(props: BasePageSearchProps & DatePageSearchProps & { params: { id: string } }) {
  const session = await auth();

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const dateFrom = new Date(searchParams?.dateFrom || MIN_DATE);
  const dateTo = new Date(searchParams?.dateTo || MAX_DATE);
  const currentPage = Number(searchParams?.page) || 1;

  const userEvents = await getUserSignUps(props.params.id, false, false, query, currentPage, dateFrom, dateTo);
  const eventsPages = await getUserSignUpsCount(props.params.id, false, false, query, dateFrom, dateTo);

  return (
    <>
      <div className="flex flex-row gap-2">
        <h2 className="pb-2">Historie přihlášení</h2>
        <Link
          href={`/ambassadors/${props.params.id}/events/info`}
          className="self-center tooltip tooltip-bottom pb-2"
          data-tip="Informace o sekci"
        >
          <QuestionMarkCircleIcon className="h-5" />
        </Link>
      </div>
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
