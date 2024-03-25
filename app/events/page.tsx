import {getAllEvents} from "@/database/repository/events";
import {EventModel} from "@/models/event/event-model";
import EventTable from "@/app/ui/event/event-table";

export default async function Events(){
  let allEvents: EventModel[] | undefined = await getAllEvents();
  console.log("all events are: ", allEvents)
  if (allEvents === undefined) {
    allEvents = []
  }

  return(
    <>
      <div className="flex flex-row justify-between p-4">
        <h1 className="text-2xl">
          Akce
        </h1>
        <button className="btn">
          Přidat akci
        </button>
      </div>
      {/*<div>*/}
      {/*  {allEvents.map((event) =>*/}
      {/*    (<EventCard event={event}/>)*/}
      {/*  )}*/}
      {/*</div>*/}
      <div className="py-2">
        <EventTable events={allEvents}/>
      </div>
    </>
  );
}