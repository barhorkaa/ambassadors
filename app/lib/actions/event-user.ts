'use server';

import { emailManagerNewSignupAction, emailSignupApprove } from '@/app/lib/actions/nodemailer';
import { getEventById } from '@/database/repository/event';
import { approveSignUp, createSignUp, deleteSignUp, getSignUpsForEvent } from '@/database/repository/event-user';
import { revalidatePath } from 'next/cache';

export async function approveSignUpAction(id: string) {
  try {
    const signup = await approveSignUp(id);
    await emailSignupApprove(signup.user_id, signup.event_id, signup.substitute);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/[id]/page', 'page');
}

export async function createSignUpAction(event_id: string, user_id: string) {
  try {
    const event = await getEventById(event_id);
    const eventLimit = Number(event.limit!);

    const signedForEvent = await getSignUpsForEvent(event_id, false);
    const isSubstitute = !(eventLimit > signedForEvent.length);

    await createSignUp(event_id, user_id, isSubstitute);
    await emailManagerNewSignupAction(event_id, user_id, isSubstitute);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/[id]/page', 'page');
}

export async function deleteSignUpAction(event_id: string, user_id: string) {
  try {
    await deleteSignUp(event_id, user_id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/[id]/page', 'page');
}
