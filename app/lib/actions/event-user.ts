'use server';

import { approveSignUp, createSignUp } from '@/database/repository/event-user';

export async function approveSignUpAction(id: string) {
  try {
    await approveSignUp(id);
  } catch (e) {
    console.log(e);
  }
}

export async function createEventSignUp(event_id: string, user_id: string) {
  try {
    await createSignUp(event_id, user_id);
  } catch (e) {
    console.log(e);
  }
}
