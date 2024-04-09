import EventTable from '@/app/ui/event/event-table';
import { auth } from '@/auth';
import { getUserEvents } from '@/database/repository/event-user';
import { EventModel } from '@/models/event/event-model';

export default async function MyEvents() {
  const session = await auth();

  let userEvents: EventModel[] = [];
  if (session) {
    console.log('user id on MyEvents is: ', session.user.id);
    const userEvents_: EventModel[] | undefined = await getUserEvents(session.user.id);
    if (userEvents_) {
      userEvents = userEvents_;
    }
    console.log('events of this user are: ', userEvents);
  }

  return (
    <div>
      <h1>Moje akce</h1>
      <EventTable events={userEvents} />
    </div>
  );
}
