'use server';

import { approveEventUser } from '@/database/repository/event-user';

export async function approveUserEventAction(id: string) {
  try {
    await approveEventUser(id);
  } catch (e) {
    console.log(e);
  }
}
