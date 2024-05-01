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

    const parsedData = eventTypeDefaultModel.parse(eventTypeForm);
    await editEventType(parsedData);
  } catch (e) {
    console.error(e);
  }
}

export async function createEventTypeAction(formData: FormData) {
  try {
    const eventTypeForm = {
      name: formData.get('name'),
      description: formData.get('description'),
      instructions: formData.get('instructions'),
    };

    const parsedData = eventTypeCreateModel.parse(eventTypeForm);
    await createEventType(parsedData);
  } catch (e) {
    console.error(e);
  }
}
