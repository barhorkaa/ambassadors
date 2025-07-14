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

  const allManagers: UserModel[] = await getAllFilteredUsers(UserRoles.manager, query, currentPage);
  const managersPages = await getAllFilteredUsersCount(UserRoles.manager, query);

  return (
    <SearchPaginationLayout
      title="Manažeři"
      totalPages={managersPages}
      query={query}
      currentPage={currentPage}
      placeHolder={'Vyhledat uživatele'}
      includeDateSearch={false}
    >
      <UserList
        title={''}
        list={allManagers}
        emptyMessage={
          query !== null
            ? 'Nemáme žádného uživatele, který by vyhovoval hledanému pojmu.'
            : 'Aplikace nýní nemá, žádné manažery.'
        }
      />
    </SearchPaginationLayout>
  );
}
