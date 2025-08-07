import { InfoPartialUserInfoModal } from '@/app/ui/modals/info/info-users-modal';
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
    <>
      <div className="flex flex-row gap-2 items-center pb-2">
        <h2>Ambasadoři</h2>
        <InfoPartialUserInfoModal type="ambassadors" />
      </div>
      <SearchPaginationLayout
        totalPages={ambassadorPages}
        query={query}
        currentPage={currentPage}
        placeHolder="Vyhledat uživatele"
      >
        <UserList
          list={allAmbassadors}
          emptyMessage={
            query !== null
              ? 'Nemáme žádného uživatele, který by vyhovoval hledanému pojmu.'
              : 'V aplikaci zatím nejsou registrovaní žádní ambasadoři.'
          }
        />
      </SearchPaginationLayout>
    </>
  );
}
