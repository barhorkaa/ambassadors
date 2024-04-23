'use server';

import { createEventType, editEventType } from '@/database/repository/event-type';
import { eventTypeCreateModel } from '@/models/event-type/event-type-create-model';
import { eventTypeDefaultModel } from '@/models/event-type/event-type-default-model';

export async function editEventTypeAction(formData: FormData) {
  try {
    const eventTypeForm = {
      name: formData.get('name'),
      description: formData.get('description'),
      instructions: formData.get('instructions'),
      id: formData.get('id'),
    };

    const parse = eventTypeDefaultModel.safeParse(eventTypeForm);

    if (parse.success) {
      await editEventType(parse.data);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function createEventTypeAction(formData: FormData) {
  try {
    const eventTypeForm = {
      name: formData.get('name'),
      description: formData.get('description'),
      instructions: formData.get('instructions'),
    };

    const parse = eventTypeCreateModel.safeParse(eventTypeForm);

    if (parse.success) {
      await createEventType(parse.data);
    }
  } catch (e) {
    console.log(e);
  }
}