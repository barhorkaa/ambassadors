'use server';

import { approveEventUser, createUserEvent } from '@/database/repository/event-user';

export async function approveUserEventAction(id: string) {
  try {
    await approveEventUser(id);
  } catch (e) {
    console.log(e);
  }
}

export async function createEventSignUp(event_id: string, user_id: string) {
  try {
    await createUserEvent(event_id, user_id);
  } catch (e) {
    console.log(e);
  }
}
