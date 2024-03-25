import {db} from "@/database/database";

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