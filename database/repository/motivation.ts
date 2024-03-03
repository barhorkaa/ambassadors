import {MotivationFormData} from "@/app/api/user/motivation/route";
import {db} from "@/database/database";

export async function createMotivation(data: MotivationFormData) {
  await db.insertInto("motivationForm").values(data).execute()
}