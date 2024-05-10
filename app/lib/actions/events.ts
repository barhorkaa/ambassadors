'use server';

import { auth } from '@/auth';
import { approveEvent, createEvent, deleteEvent, updateEvent } from '@/database/repository/events';
import { eventSchema } from '@/models/event-models';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createEventAction(formData: FormData) {
  try {
    const data = {
      name: formData.get('name'),
      date: formData.get('date') == '' ? null : formData.get('date'),
      eventTypeId: formData.get('eventTypeId'),
      limit: formData.get('limit'),
    };

    const parsedData = eventSchema.parse(data);

    const session = await auth();
    if (session?.user.role === 'manager') {
      parsedData.approved = true;
    }
    // console.log('before append: ', formData);
    // formData.append('approved', String(session?.user.role === 'manager'));
    // console.log('after append: ', formData);
    // const p = eventFormModel.parse(formData);
    // console.log('parse is: ', p);

    // if (p.success) {
    //   console.log('parse on new is: ', p.data);
    // }

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
      eventTypeId: formData.get('eventTypeId'),
      id: formData.get('id'),
      limit: formData.get('limit'),
    };

    const parsedData = eventSchema.parse(data);

    await updateEvent(parsedData);
  } catch (e) {
    console.error(e);
    return 'Something went wrong'; // TODO decide if like this or throw
  }
  revalidatePath('/events/[id]/page');
}

export async function approveEventAction(id: string) {
  try {
    await approveEvent(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/[id]/page');
}

export async function deleteEventAction(id: string) {
  try {
    await deleteEvent(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/[id]/page');
}
