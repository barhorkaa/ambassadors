'use server';

import { createMotivation } from '@/database/repository/motivation';
import { motivationModel } from '@/models/motivation-models';
import { redirect } from 'next/navigation';

export async function createMotivationAction(formData: FormData) {
  try {
    const motivationForm = {
      why: formData.get('why'),
      who: formData.get('who'),
      goals: formData.get('goals'),
      preferredEvents: formData.get('preferredEvents'),
      time: formData.get('time'),
      userId: formData.get('userId'),
    };

    const parsedData = motivationModel.parse(motivationForm);
    await createMotivation(parsedData);
  } catch (error) {
    return 'Something went wrong';
  }
  redirect('/motivation/success');
}
