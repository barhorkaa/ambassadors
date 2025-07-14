import { SignUpList } from '@/app/ui/utils/content-list';
import SearchPaginationLayout from '@/app/ui/utils/search-pagination-layout';
import { BasePageSearchProps } from '@/app/utils/interface-props';
import { getAllSignUps, getAllSignUpsPages } from '@/database/repository/event-user';
import { EventUserBasicModel } from '@/models/event-user-models';

export default async function Page(props: BasePageSearchProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const allSignUps: EventUserBasicModel[] = await getAllSignUps(true, query, currentPage);
  const signUpsPages = await getAllSignUpsPages(true, query);

  return (
    <SearchPaginationLayout
      title="Všechna aktuání přihlášení"
      totalPages={signUpsPages}
      query={query}
      currentPage={currentPage}
      placeHolder="Vyhledat přihlášení"
    >
      <SignUpList
        title={''}
        list={allSignUps}
        emptyMessage={
          query !== null
            ? 'Nemáme žádné príhlšení, která by vyhovovala hledanému pojmu.'
            : 'V součastné době nejsou v aplikaci žádné akivní přihlášení na akce.'
        }
      />
    </SearchPaginationLayout>
  );
}
