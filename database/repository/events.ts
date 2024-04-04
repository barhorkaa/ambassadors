import {db} from "@/database/database";
import {EventBasicModel} from "@/models/event/event-basic-model";

export async function getAllEvents() {
  try {
    return await db.selectFrom("event")
      .fullJoin("eventType", "eventType.id", "event_type_id")
      .select(["event.name as name", "eventType.name as event_type_name", "event_type_id", "date", "event.id as id"])
      .execute();
  } catch (e) {
    console.log(e)
  }
}

export async function getEventById(id: string) {
  try {
    return await db.selectFrom("event").where("id", "=", id).selectAll().executeTakeFirstOrThrow();
  } catch (e) {
    console.log(e)
  }
}

export async function createEvent({event} : {event: EventBasicModel}) {
  try {
    console.log("new event is: ", event)
    await db.insertInto("event").values(event).execute();
  } catch (e) {
    console.log(e)
  }
}