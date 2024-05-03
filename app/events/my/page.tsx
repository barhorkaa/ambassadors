import { EventList } from '@/app/ui/utils/event-list';
import { auth } from '@/auth';
import { getUserSignUps, getUserSubstitutes } from '@/database/repository/event-user';
import { EventModel } from '@/models/event/event-model';
import { getUserSignUps } from '@/database/repository/event-user';
import { redirect } from 'next/navigation';

export default async function MyEvents() {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }

  const userEvents: EventModel[] = await getUserSignUps(session.user.id, false);
  const userSubstitutes: EventModel[] = await getUserSignUps(session.user.id, true);

  return (
    <>
      <h1>Moje akce</h1>
      <hr className="w-full" />
      <EventList
        title={'Akce, kde jsem přihlášen'}
        list={userEvents}
        emptyMessage={'Zatím nejste přihlášen na žádnou akci. Přihlásit se můžete v sekci Akce ve vaší aplikaci.'}
      />
      <EventList
        title={'Akce, kde jsem náhradník'}
        list={userSubstitutes}
        emptyMessage={'Nejste nahraníkem na žádné akci.'}
      />
    </>
  );
}
