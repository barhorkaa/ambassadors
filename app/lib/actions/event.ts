"use server"

import {redirect} from "next/navigation";
import {createEvent} from "@/database/repository/events";
import {eventBasicModel} from "@/models/event/event-basic-model";

export async function createNewEvent(formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      date: formData.get("date") == "" ? null : formData.get("date"),
      event_type_id: formData.get("event_type_id")
    }

    const parse = eventBasicModel.safeParse(data)

    if (parse.success) {
      await createEvent({event: parse.data});
    }
  }
  catch (error) {
    return "Something went wrong"
  }
  redirect("/events/success")
}