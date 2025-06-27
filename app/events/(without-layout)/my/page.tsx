import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import { EventList } from '@/app/ui/utils/content-list';
import { auth } from '@/auth';
import { getUserSignUps } from '@/database/repository/event-user';
import { EventUserStateModel } from '@/models/event-models';

export default async function Page() {
  const session = await auth();

  const userEvents: EventUserStateModel[] = await getUserSignUps(session!.user.id, false, true);

  if (userEvents.length === 0) return <SignUpPrompt />;

  return (
    <>
      <EventList
        title={'Akce, kde jsem přihlášen/a'}
        list={userEvents}
        emptyMessage={'Zatím nejsi přihlášen/a na žádnou akci.'}
      />
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
