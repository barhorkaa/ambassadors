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
      limit: formData.get('limit'),
    };

    const parsedData = eventBasicModel.parse(data);

    const session = await auth();
    if (session?.user.role === 'manager') {
      parsedData.approved = true;
    }
    await createEvent({ event: parsedData });
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
    return 'Something went wrong'; // TODO decide if like this or throw
  }
}

export async function approveEventAction(id: string) {
  try {
    await approveEvent(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
