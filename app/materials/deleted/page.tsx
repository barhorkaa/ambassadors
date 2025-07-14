import { MaterialList } from '@/app/ui/utils/content-list';
import SearchPaginationLayout from '@/app/ui/utils/search-pagination-layout';
import { BasePageSearchProps } from '@/app/utils/interface-props';
import { getAllFilteredMaterials, getAllFilteredMaterialsCount } from '@/database/repository/material';

export default async function Page(props: BasePageSearchProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const allMaterials = await getAllFilteredMaterials(true, query, currentPage);
  const materialsPages = await getAllFilteredMaterialsCount(true, query);

  return (
    <SearchPaginationLayout
      title="Vymazané materiály"
      totalPages={materialsPages}
      query={query}
      currentPage={currentPage}
      placeHolder="Vyhledat materiál"
    >
      <MaterialList
        title={''}
        list={allMaterials}
        emptyMessage={
          query !== null
            ? 'Nemáme žádnou akci, ktrá by vyhovovala hledanému pojmu.'
            : 'Aktuálně jsou všechny materiály používány.'
        }
      />
    </SearchPaginationLayout>
  );
}
