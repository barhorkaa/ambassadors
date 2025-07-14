import { UserList } from '@/app/ui/utils/content-list';
import SearchPaginationLayout from '@/app/ui/utils/search-pagination-layout';
import { BasePageSearchProps } from '@/app/utils/interface-props';
import { UserRoles } from '@/app/utils/user-roles';
import { getAllFilteredUsers, getAllFilteredUsersCount } from '@/database/repository/user';
import { UserModel } from '@/models/user-models';

export default async function Page(props: BasePageSearchProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const allAmbassadors: UserModel[] = await getAllFilteredUsers(UserRoles.ambassador, query, currentPage);
  const ambassadorPages = await getAllFilteredUsersCount(UserRoles.ambassador, query);

  return (
    <SearchPaginationLayout
      title="Ambasadoři"
      totalPages={ambassadorPages}
      query={query}
      currentPage={currentPage}
      placeHolder="Vyhladat uživatele"
      includeDateSearch={false}
    >
      <UserList
        title={''}
        list={allAmbassadors}
        emptyMessage={
          query !== null
            ? 'Nemáme žádného uživatele, který by vyhovoval hledanému pojmu.'
            : 'V aplikaci zatím nejsou registrovaní žádní ambasadoři.'
        }
      />
    </SearchPaginationLayout>
  );
}
