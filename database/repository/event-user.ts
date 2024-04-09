import {db} from "@/database/database";

export async function getUserEvents(user_id: string) {
  try {
    console.log("user id is: ", user_id)
    return await db.selectFrom("eventUser").where("user_id", "=", user_id)
      .fullJoin("event", "eventUser.event_id", "event.id")
      .select([
        "event.id as id",
        // "eventUser.approved as event_user_approved",
        "event.name as name",
        "event.event_type_id as event_type_id",
        "event.date as date",
      ])
      .fullJoin("eventType", "event.event_type_id", "eventType.id")
      .select(["eventType.name as event_type_name"])
      .execute();
  } catch (e) {
    console.log(e)
  }
}

export async function signUpUserForEvent(event_id: string, user_id: string) {
  try {
    await db.insertInto("eventUser").values({user_id: user_id, event_id: event_id}).execute();
  } catch (e) {
    console.log(e)
  }
}

export async function isUserSignedUpForEvent(event_id: string, user_id: string) {
  try {
    const record = await db.selectFrom("eventUser").where("event_id", "=", event_id).where("user_id", "=", user_id).select("eventUser.id").executeTakeFirst()
    return record !== undefined
  } catch (e) {
    console.log(e)
  }
}

export async function getAllUnapprovedSignUps() {
  try {
    return await db.selectFrom("eventUser")
      .fullJoin("user", "user.id", "user_id")
      .select(["user.name as user_name", "eventUser.id as id", "eventUser.event_id as event_id", "eventUser.user_id as user_id"])
      .leftJoin("event", "event.id", "event_id")
      .select("event.name as event_name")
      .execute();
  } catch (e) {
    console.log(e)
  }
}