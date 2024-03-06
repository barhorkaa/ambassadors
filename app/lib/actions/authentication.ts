'use server'

import {signIn} from "@/auth";
import {AuthError} from "next-auth";
import {getUserApproval} from "@/database/repository/user";

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

export async function isUserApproved(id: string) {
  return await getUserApproval(id);
}