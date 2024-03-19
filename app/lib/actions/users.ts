"use server"

import {approveUser} from "@/database/repository/user";

export async function approveUserWithId(formData: FormData) {
  try {
    console.log("called action in user")
    const userId = formData.get("id") as string
    console.log("approve user with id: ", userId)
    await approveUser(userId)
  } catch (e) {
    console.log(e)
  }
}