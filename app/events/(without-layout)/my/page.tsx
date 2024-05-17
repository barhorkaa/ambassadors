import { EventList } from '@/app/ui/utils/event-list';
import { auth } from '@/auth';
import { getUserSignUps } from '@/database/repository/event-user';
import { EventModel } from '@/models/event-models';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function MyEvents() {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }

  const userEvents: EventModel[] = await getUserSignUps(session.user.id, false);
  const userSubstitutes: EventModel[] = await getUserSignUps(session.user.id, true);

  return (
    <div className="content">
      {userSubstitutes.length === 0 && userEvents.length === 0 ? (
        <SignUpPrompt />
      ) : (
        <>
          <EventList
            title={'Akce, kde jsem přihlášen'}
            list={userEvents}
            emptyMessage={'Zatím nejste přihlášen na žádnou akci. Přihlásit se můžete v sekci Akce ve vaší aplikaci.'}
          />
          <EventList
            title={'Akce, kde jsem náhradník'}
            list={userSubstitutes}
            emptyMessage={'Nejste nahraníkem na žádné akci.'}
          />{' '}
        </>
      )}
    </div>
  );
}

function SignUpPrompt() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div>
          <h1 className="hero-title">Zatím nejste přihlášen na žádnou akci</h1>
          <p className="py-6">Najděte tu správnou pro sebe a přihlašte se!</p>
          <Link className="btn" href={'/events'}>
            Podívat se na akce
          </Link>
        </div>
      </div>
    </div>
  );
}
