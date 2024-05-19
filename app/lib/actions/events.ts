'use server';

import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { approveEvent, createEvent, deleteEvent, updateEvent } from '@/database/repository/events';
import { eventSchema } from '@/models/event-models';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function createEventAction(prevState: any, formData: FormData) {
  try {
    const data = {
      name: formData.get('name'),
      date: formData.get('date') == '' ? null : formData.get('date'),
      eventTypeId: formData.get('eventTypeId'),
      limit: formData.get('limit'),
    };

    const parsedData = eventSchema.parse(data);

    const session = await auth();
    if (session?.user.role === UserRoles.manager) {
      parsedData.approved = true;
    }

    await createEvent({ event: parsedData });
  } catch (e) {
    console.error(e);
    if (e instanceof z.ZodError) {
      return {
        errors: e.issues,
        generic: undefined,
      };
    } else
      return {
        errors: [],
        generic: 'Something went wrong',
      };
  }
  redirect('/events/success');
}

export async function updateEventAction(prevState: any, formData: FormData) {
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
    if (e instanceof z.ZodError) {
      return {
        errors: e.issues,
        generic: undefined,
      };
    } else
      return {
        errors: [],
        generic: 'Something went wrong',
      };
  }
  revalidatePath('/events/[id]/page');
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
