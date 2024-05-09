'use server';

import { approveSignUp, createSignUp, deleteSignUp, getSignUpsForEvent } from '@/database/repository/event-user';
import { getEventById } from '@/database/repository/events';
import { revalidatePath } from 'next/cache';

export async function approveSignUpAction(id: string) {
  try {
    await approveSignUp(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/[id]/page');
}

export async function createSignUpAction(event_id: string, user_id: string) {
  try {
    const event = await getEventById(event_id);
    const eventLimit = Number(event.limit!);

    const signedForEvent = await getSignUpsForEvent(event_id);

    await createSignUp(event_id, user_id, !(eventLimit > signedForEvent.length));
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/[id]/page');
}

export async function deleteSignUpAction(event_id: string, user_id: string) {
  try {
    await deleteSignUp(event_id, user_id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/[id]/page');
}
