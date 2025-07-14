import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import { EventList } from '@/app/ui/utils/content-list';
import SearchPaginationLayout from '@/app/ui/utils/search-pagination-layout';
import { BasePageSearchProps, DatePageSearchProps } from '@/app/utils/interface-props';
import { getUserSignUps, getUserSignUpsCount } from '@/database/repository/event-user';
import { MAX_DATE, MIN_DATE } from '@/database/repository/utils/consts';
import { EventUserStateModel } from '@/models/event-models';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function Page(props: BasePageSearchProps & DatePageSearchProps & { params: { id: string } }) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const dateFrom = new Date(searchParams?.dateFrom || MIN_DATE);
  const dateTo = new Date(searchParams?.dateTo || MAX_DATE);
  const currentPage = Number(searchParams?.page) || 1;

  const userEvents: EventUserStateModel[] = await getUserSignUps(
    props.params.id,
    false,
    true,
    query,
    currentPage,
    dateFrom,
    dateTo
  );
  const eventsPages = await getUserSignUpsCount(props.params.id, false, true, query, dateFrom, dateTo);

  if (userEvents.length === 0 && !searchParams) return <SignUpPrompt />;

  return (
    <>
      <div className="flex flex-row gap-2">
        <h2 className="pb-2">Aktuální přihlášení</h2>
        <Link
          href={`/ambassadors/${props.params.id}/events/info`}
          className="self-center tooltip tooltip-bottom pb-2"
          data-tip="Informace o sekci"
        >
          <QuestionMarkCircleIcon className="h-5" />
        </Link>
      </div>
      <SearchPaginationLayout
        totalPages={eventsPages}
        query={query}
        currentPage={currentPage}
        placeHolder="Vyhledat akci"
        includeDateSearch={true}
        dateFrom={dateFrom}
        dateTo={dateTo}
      >
        <EventList
          title={'Akce, kde jsem přihlášen/a'}
          list={userEvents}
          emptyMessage={
            searchParams ? 'Žádná tvá akce nevyhovuje hledanému pojmu.' : 'Zatím nejsi přihlášen/a na žádnou akci.'
          }
        />
      </SearchPaginationLayout>
    </>
  );
}

function SignUpPrompt() {
  return (
    <HeroCenterLayout
      title={'Zatím nejsi přihlášen/a na žádnou akci'}
      url={'/events'}
      buttonTitle={'Podívat se na akce'}
    >
      <p className="py-6">Najdi tu správnou pro tebe a přihlaš se!</p>
    </HeroCenterLayout>
  );
}
