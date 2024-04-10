'use server';

import { auth } from '@/auth';
import { approveEvent, createEvent, updateEvent } from '@/database/repository/events';
import { eventBasicModel } from '@/models/event/event-basic-model';
import { redirect } from 'next/navigation';

export async function creatEventAction(formData: FormData) {
  let result: boolean | undefined = false;
  try {
    const data = {
      name: formData.get('name'),
      date: formData.get('date') == '' ? null : formData.get('date'),
      event_type_id: formData.get('event_type_id'),
    };

    const parse = eventBasicModel.safeParse(data);

    if (parse.success) {
      const session = await auth();
      if (session?.user.role === 'manager') {
        parse.data.approved = true;
      }
      result = await createEvent({ event: parse.data });
    }
  } catch (error) {
    return 'Something went wrong';
  }
  if (result) {
    redirect('/events/success');
  }
}

export async function updateEventWithId(formData: FormData) {
  try {
    const data = {
      name: formData.get('name'),
      date: formData.get('date') == '' ? null : formData.get('date'),
      event_type_id: formData.get('event_type_id'),
      id: formData.get('id'),
    };

    const parse = eventBasicModel.safeParse(data);

    if (parse.success) {
      await updateEvent({ event: parse.data });
    }
  } catch (error) {
    return 'Something went wrong';
  }
}

export async function approveEventWithId(id: string) {
  try {
    await approveEvent(id);
  } catch (e) {
    console.log(e);
  }
}
