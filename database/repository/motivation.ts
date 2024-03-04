import {db} from "@/database/database";
import {MotivationFormData} from "@/app/lib/actions";

export async function createMotivation(data: MotivationFormData) {
  await db.insertInto("motivationForm").values(data).execute()
}