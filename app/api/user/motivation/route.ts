import {NextRequest} from "next/server";
import {createMotivation} from "@/database/repository/motivation";

export type MotivationFormData = {
  why: string,
  who: string,
  goals: string,
  preferred_events: string,
  time: string,
  ambassador_id: string
}

export async function POST(request: NextRequest) {
  console.log("im here")
  const body = await request.json() as MotivationFormData;
  console.log(body)

  try {
    await createMotivation(body);
  }
  catch (e) {
    console.log(e)
  }

  return Response.json(true)

}