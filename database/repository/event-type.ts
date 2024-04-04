import {db} from "@/database/database";

export async function getEventTypeById(id: string) {
  try {
    return await db.selectFrom("eventType").where("id", "=", id).selectAll().executeTakeFirstOrThrow();
  } catch (e) {
    console.log(e)
  }
}

export async function getAllEventTypesBasics() {
  try {
    return await db.selectFrom("eventType").select(["name", "id"]).execute()
  } catch (e) {
    console.log(e)
  }
}