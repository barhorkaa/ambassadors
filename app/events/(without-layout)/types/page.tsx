import Pagination from '@/app/ui/search/pagination';
import Search from '@/app/ui/search/search';
import { EventTypeList } from '@/app/ui/utils/content-list';
import { TableSkeleton } from '@/app/ui/utils/skeletons';
import { BasePageSearchProps } from '@/app/utils/interface-props';
import { getAllFilteredEventTypes, getAllFilteredEventTypesCount } from '@/database/repository/event-type';
import { EventTypeDetailModel } from '@/models/event-type-models';
import { Suspense } from 'react';

export default async function Page(props: BasePageSearchProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const allEventTypes: EventTypeDetailModel[] = await getAllFilteredEventTypes(false, query, currentPage);
  const typesPages = await getAllFilteredEventTypesCount(false, query);

  return (
    <>
      <Search placeholder={'Vyhledat druh akce'} />
      <Pagination totalPages={typesPages} />
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <EventTypeList
          title={''}
          list={allEventTypes}
          emptyMessage={
            query !== null
              ? 'Nemáme žádnou akci, ktrá by vyhovovala hledanému pojmu.'
              : 'Aktuálně nejsou k dispoici žádné druhy akcí.'
          }
        />
      </Suspense>
      <Pagination totalPages={typesPages} />
    </>
  );
}
