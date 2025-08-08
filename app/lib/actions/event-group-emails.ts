'use server';

import { emailCustomEmailAction } from '@/app/lib/actions/nodemailer';
import { handleError } from '@/app/lib/actions/utils';
import { createEventGroupEmail } from '@/database/repository/event-group-emails';
import { getEventGroupEmailRecipients } from '@/database/repository/notifications';
import { revalidatePath } from 'next/cache';

export async function creteGroupEmailAction(prevState: any, formData: FormData) {
  try {
    const eventGroupEmailForm = {
      eventId: formData.get('eventId') as string,
      title: formData.get('title') as string,
      subject: formData.get('subject') === '' ? null : formData.get('subject'),
      quill: formData.get('content') as string,
    };

    const emailToArchive = {
      eventId: eventGroupEmailForm.eventId,
      contents: eventGroupEmailForm.quill,
    };

    const recipients = await getEventGroupEmailRecipients(eventGroupEmailForm.eventId);
    await emailCustomEmailAction(eventGroupEmailForm.quill, eventGroupEmailForm.title, recipients);

    await createEventGroupEmail(emailToArchive);
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
