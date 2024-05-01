'use server';

import { createMotivation } from '@/database/repository/motivation';
import { MotivationFormModel } from '@/models/motivation/motivation-form-model';
import { redirect } from 'next/navigation';

export async function createMotivationAction(formData: FormData) {
  try {
    const parsedData = MotivationFormModel.parse(formData);
    await createMotivation(parsedData);
  } catch (error) {
    return 'Something went wrong';
  }
  redirect('/motivation/success');
}
