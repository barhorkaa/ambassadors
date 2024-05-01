'use server';

import { auth } from '@/auth';
import { approveEvent, createEvent, updateEvent } from '@/database/repository/events';
import { eventBasicModel } from '@/models/event/event-basic-model';
import { redirect } from 'next/navigation';

export async function createEventAction(formData: FormData) {
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
      await createEvent({ event: parse.data });
    }
  } catch (e) {
    console.error(e);
    return 'Something went wrong';
  }
  redirect('/events/success');
}

export async function updateEventAction(formData: FormData) {
  try {
    const data = {
      name: formData.get('name'),
      date: formData.get('date') == '' ? null : formData.get('date'),
      event_type_id: formData.get('event_type_id'),
      id: formData.get('id'),
      limit: formData.get('limit'),
    };

    const parse = eventBasicModel.safeParse(data);

    if (parse.success) {
      await updateEvent(parse.data);
    }
  } catch (e) {
    console.error(e);
    return 'Something went wrong';
  }
}

export async function approveEventAction(id: string) {
  try {
    await approveEvent(id);
  } catch (e) {
    console.error(e);
  }
}
