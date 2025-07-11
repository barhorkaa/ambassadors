import Pagination from '@/app/ui/search/pagination';
import Search from '@/app/ui/search/search';
import { SignUpList } from '@/app/ui/utils/content-list';
import { TableSkeleton } from '@/app/ui/utils/skeletons';
import { getAllSignUps, getAllSignUpsPages } from '@/database/repository/event-user';
import { EventUserBasicModel } from '@/models/event-user-models';
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

  const allSignUps: EventUserBasicModel[] = await getAllSignUps(false, query, currentPage);
  const signUpsPages = await getAllSignUpsPages(false, query);

  return (
    <>
      <h2 className="pb-2">Nepotvrzená přihlášení</h2>
      <Search placeholder={'Vyhledat akci'} />
      <Pagination totalPages={signUpsPages} />
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <SignUpList
          title={''}
          list={allSignUps}
          emptyMessage={
            query !== null
              ? 'Nemáme žádné príhlšení, která by vyhovovala hledanému pojmu.'
              : 'V součastné době nejsou v aplikaci žádné přihlášení na akce, které nejsou potvrzeny.'
          }
        />
      </Suspense>
      <Pagination totalPages={signUpsPages} />
    </>
  );
}
