'use server';

import {AuthError} from 'next-auth';
import {signIn} from "@/auth";
import bcrypt from 'bcryptjs';
import {Selectable} from "kysely";
import {User} from "kysely-codegen";
import {redirect} from "next/navigation";
import {createMotivation} from "@/database/repository/motivation";
import {createNewUser} from "@/database/repository/user";

export type MotivationFormData = {
  why: string,
  who: string,
  goals: string,
  preferred_events: string,
  time: string,
  ambassador_id: string
}

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

    const maybeId = await createNewUser(name, email, password_hashed, Number(uco), phone_number);

    if (!maybeId) {
      return "Something went wrong"
    }

    id = maybeId.id;
    console.log("id post registration", id)

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
    // TODO prevalidovat typy cez zod a az potom posielat
    const why = formData.get("why");
    const who = formData.get("who");
    const goals = formData.get("goals");
    const preferred_events = formData.get("preferred_events");
    const time = formData.get("time");
    const ambassador_id = formData.get("id");
    // TODO nepouzivat _

    if (!why || !who || !goals || !preferred_events || !time || !ambassador_id){
      return "All fields must be filled out"
    }

    const data: MotivationFormData = {
      why: why as string,
      who: who as string,
      goals: goals as string,
      preferred_events: preferred_events as string,
      time: time as string,
      ambassador_id: ambassador_id as string
    }

    console.log(data)

    await createMotivation(data);
  }
  catch (error) {
    return "Something went wrong"
  }
  redirect("/register/success")
}