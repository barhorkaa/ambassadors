import { EventList } from '@/app/ui/utils/content-list';
import { auth } from '@/auth';
import { getUserSignUps } from '@/database/repository/event-user';
import { EventModel } from '@/models/event-models';
import Link from 'next/link';

export default async function Page() {
  const session = await auth();

  const userEvents: EventModel[] = await getUserSignUps(session!.user.id, false, true);
  const userSubstitutes: EventModel[] = await getUserSignUps(session!.user.id, true, true);

  return (
    <>
      {userSubstitutes.length === 0 && userEvents.length === 0 ? (
        <SignUpPrompt />
      ) : (
        <>
          <EventList
            title={'Akce, kde jsem přihlášen/a'}
            list={userEvents}
            emptyMessage={'Zatím nejsi přihlášen/a na žádnou akci.'}
          />
          <EventList
            title={'Akce, kde jsem náhradník/nice'}
            list={userSubstitutes}
            emptyMessage={'Nejsi nahraníkem na žádné akci.'}
          />{' '}
        </>
      )}
    </>
  );
}

function SignUpPrompt() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div>
          <h1 className="hero-title">Zatím nejsi přihlášen/a na žádnou akci</h1>
          <p className="py-6">Najdi tu správnou pro tebe a přihlaš se!</p>
          <Link className="btn" href={'/events'}>
            Podívat se na akce
          </Link>
        </div>
      </div>
    </div>
  );
}
