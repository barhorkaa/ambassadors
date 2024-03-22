'use server'

import {createMotivation} from "@/database/repository/motivation";
import {redirect} from "next/navigation";
import {MotivationModel} from "@/models/motivation/motivation-model";
import {MotivationFormModel} from "@/models/motivation/motivation-form-model";

export type MotivationFormData = {
  why: string | null,
  who: string | null,
  goals: string | null,
  preferred_events: string | null,
  time: string | null,
  user_id: string
}

export async function createMotivationForm(formData: FormData) {
  try {
    const re = MotivationFormModel.safeParse(formData)

    if (re.success) {
      await createMotivation({data: re.data});
    }
  }
  catch (error) {
    return "Something went wrong"
  }
  redirect("/motivation/success")
}
