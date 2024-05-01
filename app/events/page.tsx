import EventCard from '@/app/ui/event/event-card';
import EventTable from '@/app/ui/event/event-table';
import { getAllEvents, getAllUnapprovedEvents } from '@/database/repository/events';
import { EventModel } from '@/models/event/event-model';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function Events() {
  const allEvents: EventModel[] = await getAllEvents();
  const allUnapprovedEvents: EventModel[] = await getAllUnapprovedEvents();

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
    </>
  );
}

function EventList(props: { title: string; list: EventModel[]; emptyMessage: string }) {
  return (
    <>
      <h2>{props.title}</h2>
      {props.list.length === 0 ? (
        <p className="text-lg py-2">{props.emptyMessage}</p>
      ) : (
        <>
          <div className="flex md:hidden flex-wrap justify-center gap-4 ">
            {props.list.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="py-2 hidden md:block">
            <EventTable events={props.list} />
          </div>
        </>
      )}
      <hr />
    </>
  );
}
