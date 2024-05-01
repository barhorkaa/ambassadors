import EventCard from '@/app/ui/event/event-card';
import EventTable from '@/app/ui/event/event-table';
import { getAllEvents, getAllUnapprovedEvents } from '@/database/repository/events';
import { EventModel } from '@/models/event/event-model';
import { PlusIcon } from '@heroicons/react/24/outline';
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
    <>
      <div className="flex flex-row justify-between">
        <h1>Akce</h1>
        <Link className="btn" href={'/events/new'}>
          <PlusIcon className="h-5" />
          <p className="hidden md:block">Přidat akci</p>
        </Link>
      </div>
      <hr className="w-full" />
      <h2>Nepotvrzené akce</h2>
      <div className="flex md:hidden flex-wrap justify-center gap-4 ">
        {allUnapprovedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <div className="py-2 hidden md:block">
        <EventTable events={allUnapprovedEvents} />
      </div>
      <hr />
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
    </>
  );
}
  );
}
