import { EventList } from '@/app/ui/utils/content-list';
import { auth } from '@/auth';
import { getUserSignUps } from '@/database/repository/event-user';
import { EventModel } from '@/models/event-models';

export default async function Page() {
  const session = await auth();

  const userEvents: EventModel[] = await getUserSignUps(session!.user.id, false, false);
  const userSubstitutes: EventModel[] = await getUserSignUps(session!.user.id, true, false);

  return (
    <>
      <EventList
        title={'Akce, kde jsem byl přihlášen'}
        list={userEvents}
        emptyMessage={'Zatím jste nebyli na žádné akci.'}
      />
      <EventList
        title={'Akce, kde jsem byl náhradník'}
        list={userSubstitutes}
        emptyMessage={'Zatím jste nebyli nahraníkem na žádné akci.'}
      />
    </>
  );
}
