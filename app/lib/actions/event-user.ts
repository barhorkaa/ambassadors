'use server';

import { approveSignUp, createSignUp } from '@/database/repository/event-user';

export async function approveSignUpAction(id: string) {
  try {
    await approveSignUp(id);
  } catch (e) {
    console.log(e);
  }
}

export async function createSignUpAction(event_id: string, user_id: string) {
  try {
    await createSignUp(event_id, user_id);
    const event = await getEventById(event_id);
    if (event === undefined) {
      return 'Invalid event';
    }
    const eventLimit = Number(event.limit!);

    const signedForEvent = await getSignUpsForEvent(event_id);
    if (signedForEvent === undefined) {
      return 'something went wrong';
    }

    if (eventLimit < signedForEvent.length) {
      await createSignUp(event_id, user_id, false);
    } else {
      await createSignUp(event_id, user_id, true);
    }
  } catch (e) {
    console.log(e);
  }
}
  } catch (e) {
    console.log(e);
  }
}
