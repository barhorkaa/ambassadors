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
    // console.log("form data is", formData)
    // const bla = {
    //   why: formData.get("why"),
    //   who: formData.get("who"),
    //   goals: formData.get("goals"),
    //   preferredEvents: formData.get("preferredEvents"),
    //   time: formData.get("time"),
    //   ambassadorId: formData.get("user_id"),
    // }
    //
    // console.log("bla user id is: ", bla.ambassadorId)

    // const res = MotivationFormModel.safeParse(bla)
    // console.log("parsed from bla is: ", res)
    const re = MotivationFormModel.safeParse(formData)

    console.log("parsing raw form data: ", re)
    if (re.success) {
      console.log("res data is: ", re.data)
      // console.log("type of data is: ", typeof (res.data.why))

      // const data: MotivationFormData = {
      //   why: bla.why as string,
      //   who: bla.who as string,
      //   goals: bla.goals as string,
      //   preferred_events: bla.preferredEvents as string,
      //   time: bla.time as string,
      //   user_id: bla.ambassadorId as string
      // }
      await createMotivation({data: re.data});
    }
    // TODO prevalidovat typy cez zod a az potom posielat


    // if (!why || !who || !goals || !preferredEvents || !time || !ambassadorId){
    //   return "All fields must be filled out"
    // }

    // const zodData = {
    //   why,
    //   who,
    //   goals,
    //   preferredEvents,
    //   time,
    //   ambassadorId
    // }

    // const res = MotivationFormModel.safeParse(zodData)
    // console.log("safe parse from raw data is: ", res)
    // console.log("\n", res, "\n")

    // const data: MotivationFormData = {
    //   why: why as string,
    //   who: who as string,
    //   goals: goals as string,
    //   preferred_events: preferredEvents as string,
    //   time: time as string,
    //   user_id: ambassadorId as string
    // }

    // console.log(data)
    //
    // await createMotivation(data);
  }
  catch (error) {
    return "Something went wrong"
  }
  redirect("/motivation/success")
}
