'use server';

import { createEventType, deleteEventType, editEventType, reviveEventType } from '@/database/repository/event-type';
import { eventTypeSchema } from '@/models/event-type-models';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

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
    if (e instanceof z.ZodError) {
      return {
        success: false,
        errors: e.issues,
        generic: undefined,
      };
    } else
      return {
        success: false,
        errors: [],
        generic: 'Something went wrong',
      };
  }
  revalidatePath('/events/types');
  return { success: true, errors: [], generic: undefined };
}

export async function createEventTypeAction(prevState: any, formData: FormData) {
  try {
    console.log('called create action');
    const eventTypeForm = {
      name: formData.get('name'),
      description: formData.get('description'),
      instructions: formData.get('instructions'),
    };

    const parsedData = eventTypeSchema.parse(eventTypeForm);
    await createEventType(parsedData);
  } catch (e) {
    console.error(e);
    if (e instanceof z.ZodError) {
      return {
        success: false,
        errors: e.issues,
        generic: undefined,
      };
    } else return { success: false, errors: [], generic: 'Something went wrong' };
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
