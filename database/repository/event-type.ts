import {db} from "@/database/database";

export async function getEventTypeById(id: string) {
  try {
    return await db.selectFrom("eventType").where("id", "=", id).selectAll().executeTakeFirstOrThrow();
  } catch (e) {
    console.log(e)
  }
}