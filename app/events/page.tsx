import EventCard from '@/app/ui/event/event-card';
import EventTable from '@/app/ui/event/event-table';
import { getAllEvents, getAllUnapprovedEvents } from '@/database/repository/events';
import { EventModel } from '@/models/event/event-model';
import Link from 'next/link';

export default async function Events() {
  let allEvents: EventModel[] | undefined = await getAllEvents();
  console.log('all events are: ', allEvents);
  if (allEvents === undefined) {
    allEvents = [];
  }

  let allUnapprovedEvents: EventModel[] | undefined = await getAllUnapprovedEvents();
  console.log('all Unapproved Events are: ', allUnapprovedEvents);
  if (allUnapprovedEvents === undefined) {
    allUnapprovedEvents = [];
  }

  return (
    <div className="page">
      <div className="flex flex-row justify-between p-4">
        <h1>Akce</h1>
        <button>
          <Link href={'/events/new'}>Přidat akci</Link>
        </button>
      </div>
      <hr className="divider w-full" />
      <h2>Nepotvrzené akce</h2>
      <div className="flex md:hidden flex-wrap justify-center gap-4 ">
        {allUnapprovedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <div className="py-2 hidden md:block">
        <EventTable events={allUnapprovedEvents} />
      </div>
      <hr className="divider" />
      <h2>Všechny akce</h2>
      <div className="flex md:hidden flex-wrap justify-center gap-4 ">
        {allEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <div className="py-2 hidden md:block">
        <EventTable events={allEvents} />
      </div>
    </div>
  );
}
