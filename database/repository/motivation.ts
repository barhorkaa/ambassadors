import {db} from "@/database/database";
import {MotivationFormData} from "@/app/lib/actions/motivation";

export async function createMotivation(data: MotivationFormData) {
  console.log("Got to repository")
  console.log("Data on repo is: ", data)
  try {
    await db.insertInto("motivationForm").values(data).execute()
  } catch (e) {
    console.log(e)
  }
}

export async function isUserMotivated(user_id: string) {
  try {
    const userMotivation = await db.selectFrom("motivationForm").where("user_id", "=", user_id).select("id").executeTakeFirst();
    return userMotivation != undefined;
  } catch (e) {
    console.log(e)
  }
}