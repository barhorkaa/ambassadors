'use server';

import { handleError } from '@/app/lib/actions/utils';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { approveEvent, createEvent, deleteEvent, updateEvent } from '@/database/repository/event';
import { eventSchema } from '@/models/event-models';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createEventAction(prevState: any, formData: FormData) {
  try {
    const eventForm = {
      name: formData.get('name'),
      date: formData.get('date') === '' ? null : formData.get('date'),
      eventTypeId: formData.get('eventTypeId'),
      limit: formData.get('limit'),
    };

    const parsedData = eventSchema.parse(eventForm);

    const session = await auth();
    if (session?.user.role === UserRoles.manager) {
      parsedData.approved = true;
    }

    await createEvent(parsedData);
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  redirect('/events/success');
}

export async function updateEventAction(prevState: any, formData: FormData) {
  try {
    const eventForm = {
      name: formData.get('name'),
      date: formData.get('date') === '' ? null : formData.get('date'),
      eventTypeId: formData.get('eventTypeId'),
      id: formData.get('id'),
      limit: formData.get('limit'),
    };

    const parsedData = eventSchema.parse(eventForm);
    await updateEvent(parsedData);
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  revalidatePath('/events/[id]/page', 'page');
  return {
    errors: [],
    generic: undefined,
  };
}

export async function approveEventAction(id: string) {
  try {
    await approveEvent(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/[id]/page', 'page');
}

export async function deleteEventAction(id: string) {
  try {
    await deleteEvent(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/[id]/page', 'layout');
}
