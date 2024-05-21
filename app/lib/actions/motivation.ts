'use server';

import { handleError } from '@/app/ui/utils/form-errors';
import { createMotivation } from '@/database/repository/motivation';
import { motivationSchema } from '@/models/motivation-models';
import { redirect } from 'next/navigation';

export async function createMotivationAction(prevState: any, formData: FormData) {
  try {
    const motivationForm = {
      why: formData.get('why'),
      who: formData.get('who'),
      goals: formData.get('goals'),
      preferredEvents: formData.get('preferredEvents'),
      time: formData.get('time'),
      userId: formData.get('userId'),
    };

    const parsedData = motivationSchema.parse(motivationForm);
    await createMotivation(parsedData);
  } catch (error) {
    console.error(error);
    return handleError(error);
  }
  redirect('/motivation/success');
}
