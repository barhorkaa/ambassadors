import { EventList } from '@/app/ui/utils/event-list';
import { auth } from '@/auth';
import { getUserSignUps, getUserSubstitutes } from '@/database/repository/event-user';
import { EventModel } from '@/models/event/event-model';

export default async function MyEvents() {
  const session = await auth();

  let userEvents: EventModel[] = [];
  let userSubstitutes: EventModel[] = [];
  if (session) {
    console.log('user id on MyEvents is: ', session.user.id);
    const userEvents_: EventModel[] | undefined = await getUserSignUps(session.user.id);
    if (userEvents_) {
      userEvents = userEvents_;
    }
    const userSubstitutes_: EventModel[] | undefined = await getUserSubstitutes(session.user.id);
    if (userSubstitutes_) {
      userSubstitutes = userSubstitutes_;
    }
    console.log('events of this user are: ', userEvents);
  }

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
