import Pagination from '@/app/ui/search/pagination';
import Search from '@/app/ui/search/search';
import { MaterialList } from '@/app/ui/utils/content-list';
import { TableSkeleton } from '@/app/ui/utils/skeletons';
import { BasePageSearchProps } from '@/app/utils/interface-props';
import { getAllFilteredMaterials, getAllFilteredMaterialsCount } from '@/database/repository/material';
import { Suspense } from 'react';

export default async function Page(props: BasePageSearchProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const allMaterials = await getAllFilteredMaterials(false, query, currentPage);
  const materialsPages = await getAllFilteredMaterialsCount(false, query);

  return (
    <>
      <h2 className="pb-2">Dostupné materiály</h2>
      <Search placeholder={'Vyhledat materiál'} />
      <Pagination totalPages={materialsPages} />
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <MaterialList
          title={''}
          list={allMaterials}
          emptyMessage={
            query !== null
              ? 'Nemáme žádnou akci, ktrá by vyhovovala hledanému pojmu.'
              : 'Aktuálně nejsou k dispoici žádné materiály.'
          }
        />
      </Suspense>
      <Pagination totalPages={materialsPages} />
    </>
  );
}
