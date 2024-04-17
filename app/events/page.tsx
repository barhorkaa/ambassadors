import EventCard from '@/app/ui/event/event-card';
import EventTable from '@/app/ui/event/event-table';
import { getAllEvents } from '@/database/repository/events';
import { EventModel } from '@/models/event/event-model';
import Link from 'next/link';

export default async function Events() {
  let allEvents: EventModel[] | undefined = await getAllEvents();
  console.log('all events are: ', allEvents);
  if (allEvents === undefined) {
    allEvents = [];
  }

  return (
    <div className="page">
      <div className="flex flex-row justify-between p-4">
        <h1>Akce</h1>
        <button>
          <Link href={'/events/new'}>Přidat akci</Link>
        </button>
      </div>
      <div className="flex md:hidden flex-wrap justify-center gap-4 ">
        {allEvents.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
      <div className="py-2 hidden md:block">
        <EventTable events={allEvents} />
      </div>
    </div>
  );
}
