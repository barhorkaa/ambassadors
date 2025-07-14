import { MaterialList } from '@/app/ui/utils/content-list';
import SearchPaginationLayout from '@/app/ui/utils/search-pagination-layout';
import { BasePageSearchProps } from '@/app/utils/interface-props';
import { getAllFilteredMaterials, getAllFilteredMaterialsCount } from '@/database/repository/material';

export default async function Page(props: BasePageSearchProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const allMaterials = await getAllFilteredMaterials(false, query, currentPage);
  const materialsPages = await getAllFilteredMaterialsCount(false, query);

  return (
    <SearchPaginationLayout
      totalPages={materialsPages}
      currentPage={currentPage}
      title="Dostupné materiály"
      query={query}
      placeHolder="Vyhledat materiál"
    >
      <MaterialList
        list={allMaterials}
        emptyMessage={
          query !== null
            ? 'Nemáme žádnou akci, ktrá by vyhovovala hledanému pojmu.'
            : 'Aktuálně nejsou k dispoici žádné materiály.'
        }
      />
    </SearchPaginationLayout>
  );
}
