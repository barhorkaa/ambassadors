'use server';

import {AuthError} from 'next-auth';
import {signIn} from "@/auth";
import bcrypt from 'bcryptjs';
import {Selectable} from "kysely";
import {User} from "kysely-codegen";
import {redirect} from "next/navigation";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function createUser(prevState: string | undefined, formData: FormData) {
  let id = null;

  try {
    console.log("Successfully called createUser");
    console.log(formData.values());

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const password_hashed = await bcrypt.hash(password, 10);
    const uco = Number(formData.get("uco") as string);
    const phone_number = formData.get("phone_number") as string;

    console.log("Calling fetch");

    // TODO change so that POST uses `body: {}` instead of URL params
    const response: Response = await fetch(`http://localhost:3000/api/user?name=${name}&email=${email}&password=${password_hashed}&uco=${uco}&phone_number=${phone_number}`,
      {
        method: 'POST',
      });
    console.log("Fetch complete");

    const id_object = await response.json() as {id: string | null}
    id = id_object.id;
    console.log("id post registration", id)

    if (!id) {
      return "Something went wrong"
    }
    // TODO maybe change to better parsing, rn like this for form call
  } catch (error) {
    console.log(error)
    return "Something went wrong, error"
  }

  redirect(`/register/motivation/${id}`)
}

async function GetUserId(email: string) {
  const response = await fetch(`http://localhost:3000/api/user?email=${email}`)
  const user = await response.json() as (Selectable<User> | undefined);

  return user?.id
}

export async function createMotivationForm(prevState: string | undefined, formData: FormData) {
  try {
    const why = formData.get("why");
    const who = formData.get("who");
    const goals = formData.get("goals");
    const preferred_events = formData.get("preferred_events");
    const time = formData.get("time");
    const ambassador_id = formData.get("id");

    if (!why || !who || !goals || !preferred_events || !time || !ambassador_id){
      return "All fields must be filled out"
    }

    console.log(formData)

    const resp = await fetch("http://localhost:3000/api/user/motivation", {
      method: 'POST',
      body: JSON.stringify({
        why: why,
        who: who,
        goals: goals,
        preferred_events: preferred_events,
        time: time,
        ambassador_id: ambassador_id,
      })
    })
  }
  catch (error) {
    return "Something went wrong"
  }
  redirect("/register/success")
}