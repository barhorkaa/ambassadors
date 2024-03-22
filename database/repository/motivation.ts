import {db} from "@/database/database";
import {MotivationFormData} from "@/app/lib/actions/motivation";
import {setUserMotivatedStatus} from "@/database/repository/user";
import {MotivationModel} from "@/models/motivation/motivation-model";

export async function createMotivation({data}: { data: MotivationModel }) {
  console.log("Got to repository")
  console.log("Data on repo is: ", data)
  try {
    await db.insertInto("motivationForm").values(data).execute();
    await setUserMotivatedStatus(data.user_id);
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

export async function getMotivationById(id: string) {
  try {
    return await db.selectFrom("motivationForm").where("user_id", "=", id).selectAll().executeTakeFirstOrThrow();
  } catch (e) {
    console.log(e)
  }
}