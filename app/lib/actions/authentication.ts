'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { isRedirectError } from 'next/dist/client/components/redirect';

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', formData, { redirectTo: '/events' });
  } catch (error) {
    if (!isRedirectError(error)) {
      console.error('SignIn error is: ', error);
    }
    if (error instanceof AuthError) {
      if (error.cause && error.cause.err && error.cause.err.name === 'EMAIL_NOT_VERIFIED')
        return 'Váš e-mail ještě nebyl potvrzen';
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

export async function signOutAction() {
  await signOut({ redirectTo: '/login' });
}
