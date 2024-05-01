import EventCard from '@/app/ui/event/event-card';
import EventTable from '@/app/ui/event/event-table';
import { EventModel } from '@/models/event/event-model';

export function EventList(props: { title: string; list: EventModel[]; emptyMessage: string }) {
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
