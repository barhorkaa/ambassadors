'use server';

import { approveSignUp, createSignUp, deleteSignUp, getSignUpsForEvent } from '@/database/repository/event-user';
import { getEventById } from '@/database/repository/events';

export async function approveSignUpAction(id: string) {
  try {
    await approveSignUp(id);
  } catch (e) {
    console.error(e);
  }
}

export async function createSignUpAction(event_id: string, user_id: string) {
  try {
    const event = await getEventById(event_id);
    if (event === undefined) {
      return 'Invalid event';
    }
    const eventLimit = Number(event.limit!);

    const signedForEvent = await getSignUpsForEvent(event_id);
    if (signedForEvent === undefined) {
      return 'something went wrong';
    }

    if (eventLimit > signedForEvent.length) {
      await createSignUp(event_id, user_id, false);
    } else {
      await createSignUp(event_id, user_id, true);
    }
  } catch (e) {
    console.error(e);
  }
}

export async function deleteSignUpAction(event_id: string, user_id: string) {
  try {
    await deleteSignUp(event_id, user_id);
  } catch (e) {
    console.error(e);
  }
}
