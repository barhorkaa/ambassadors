'use server';

import { createMotivation } from '@/database/repository/motivation';
import { MotivationFormModel } from '@/models/motivation/motivation-form-model';
import { redirect } from 'next/navigation';

export async function createMotivationAction(formData: FormData) {
  let result: boolean | undefined = false;
  try {
    const parsedData = MotivationFormModel.parse(formData);

    result = await createMotivation(parsedData);
  } catch (error) {
    return 'Something went wrong';
  }
  if (result) {
    redirect('/motivation/success');
  }
}
