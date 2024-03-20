'use server'

import {createMotivation} from "@/database/repository/motivation";
import {redirect} from "next/navigation";

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
    // TODO prevalidovat typy cez zod a az potom posielat
    const why = formData.get("why");
    const who = formData.get("who");
    const goals = formData.get("goals");
    const preferredEvents = formData.get("preferredEvents");
    const time = formData.get("time");
    const ambassadorId = formData.get("id");

    if (!why || !who || !goals || !preferredEvents || !time || !ambassadorId){
      return "All fields must be filled out"
    }

    const data: MotivationFormData = {
      why: why as string,
      who: who as string,
      goals: goals as string,
      preferred_events: preferredEvents as string,
      time: time as string,
      user_id: ambassadorId as string
    }

    console.log(data)

    await createMotivation(data);
  }
  catch (error) {
    return "Something went wrong"
  }
  redirect("/motivation/success")
}
