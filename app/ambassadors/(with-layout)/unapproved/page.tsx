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

  const allUnapproved: UserModel[] = await getAllFilteredUsers(UserRoles.ambassador, query, currentPage, true);
  const unapprovedPages = await getAllFilteredUsersCount(UserRoles.ambassador, query, true);

  return (
    <SearchPaginationLayout
      title="Nepotvrzení uživatelé"
      totalPages={unapprovedPages}
      query={query}
      currentPage={currentPage}
      placeHolder="Vyhledat uživatele"
      includeDateSearch={false}
    >
      <UserList
        title={''}
        list={allUnapproved}
        emptyMessage={
          query !== null
            ? 'Nemáme žádného uživatele, který by vyhovoval hledanému pojmu.'
            : 'V součastné době nejsou v aplikaci žádní uživatelé, kteřý by čekali na potvrzení.'
        }
      />
    </SearchPaginationLayout>
  );
}
