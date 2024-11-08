import { EventList } from '@/app/ui/utils/content-list';
import { getUserSignUps } from '@/database/repository/event-user';
import { EventModel } from '@/models/event-models';

export default async function Page({ params }: { params: { id: string } }) {
  const userEvents: EventModel[] = await getUserSignUps(params.id, false, true);
  const userSubstitutes: EventModel[] = await getUserSignUps(params.id, true, true);

  return (
    <div className="data-display">
      <div className="card-body">
        <EventList title={'Akce kde je ambasador přihlášen'} list={userEvents} emptyMessage={''} />
        <EventList title={'Akce kde je ambasador zástup'} list={userSubstitutes} emptyMessage={''} />
      </div>
    </div>
  );
}
