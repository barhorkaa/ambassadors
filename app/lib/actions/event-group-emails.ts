'use server';

import { emailEventChange } from '@/app/lib/actions/nodemailer';
import { handleError } from '@/app/lib/actions/utils';
import { updateEvent } from '@/database/repository/event';
import { eventSchema } from '@/models/event-models';
import { revalidatePath } from 'next/cache';

export async function creteGroupEmailAction(prevState: any, formData: FormData) {
  try {
    const eventGroupEmailForm = {
      title: formData.get('title') as string,
      date: formData.get('date') === '' ? null : formData.get('date'),
      contents: formData.get('contents') as string,
    };

    const parsedData = eventSchema.parse(eventGroupEmailForm);
    const oldEvent = await updateEvent(parsedData);
    await emailEventChange(oldEvent, parsedData.id!);
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  revalidatePath('/events/[id]/page', 'page');
  return {
    success: true,
    errors: [],
    generic: undefined,
  };
}
