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