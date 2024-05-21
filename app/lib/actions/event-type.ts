'use server';

import { handleError } from '@/app/lib/actions/form-errors';
import { createEventType, deleteEventType, editEventType, reviveEventType } from '@/database/repository/event-type';
import { eventTypeSchema } from '@/models/event-type-models';
import { revalidatePath } from 'next/cache';

export async function editEventTypeAction(prevState: any, formData: FormData) {
  try {
    const eventTypeForm = {
      name: formData.get('name'),
      description: formData.get('description'),
      instructions: formData.get('instructions'),
      id: formData.get('id'),
    };

    const parsedData = eventTypeSchema.parse(eventTypeForm);
    await editEventType(parsedData);
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  revalidatePath('/events/types');
  return { success: true, errors: [], generic: undefined };
}

export async function createEventTypeAction(prevState: any, formData: FormData) {
  try {
    const eventTypeForm = {
      name: formData.get('name'),
      description: formData.get('description'),
      instructions: formData.get('instructions'),
    };

    const parsedData = eventTypeSchema.parse(eventTypeForm);
    await createEventType(parsedData);
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  revalidatePath('/events/types');
  return { success: true, errors: [], generic: undefined };
}

export async function deleteEventTypeAction(id: string) {
  try {
    await deleteEventType(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/types');
}

export async function reviveEventTypeAction(id: string) {
  try {
    await reviveEventType(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/types');
}
