import { EventTypeList } from '@/app/ui/utils/content-list';
import SearchPaginationLayout from '@/app/ui/utils/search-pagination-layout';
import { BasePageSearchProps } from '@/app/utils/interface-props';
import { getAllFilteredEventTypes, getAllFilteredEventTypesCount } from '@/database/repository/event-type';
import { EventTypeDetailModel } from '@/models/event-type-models';

export default async function Page(props: BasePageSearchProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const allEventTypes: EventTypeDetailModel[] = await getAllFilteredEventTypes(false, query, currentPage);
  const typesPages = await getAllFilteredEventTypesCount(false, query);

  return (
    <SearchPaginationLayout
      title="Dostupné druhy akcí"
      totalPages={typesPages}
      query={query}
      currentPage={currentPage}
      placeHolder="Vyhledat druh akce"
    >
      <EventTypeList
        list={allEventTypes}
        emptyMessage={
          query !== null
            ? 'Nemáme žádnou akci, ktrá by vyhovovala hledanému pojmu.'
            : 'Aktuálně nejsou k dispoici žádné druhy akcí.'
        }
      />
    </SearchPaginationLayout>
  );
}
