"use server"

import {approveEventSignUp} from "@/database/repository/event-user";

export async function approveUserEvent(id: string) {
  try {
    await approveEventSignUp(id)
  } catch (e) {
    console.log(e)
  }
}