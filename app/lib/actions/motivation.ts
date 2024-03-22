'use server'

import {createMotivation} from "@/database/repository/motivation";
import {redirect} from "next/navigation";
import {MotivationFormModel} from "@/models/motivation/motivation-form-model";

export async function createMotivationForm(formData: FormData) {
  try {
    const parse = MotivationFormModel.safeParse(formData)

    if (parse.success) {
      await createMotivation({data: parse.data});
    }
  }
  catch (error) {
    return "Something went wrong"
  }
  redirect("/motivation/success")
}
