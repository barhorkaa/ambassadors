'use server';

import { createMotivation } from '@/database/repository/motivation';
import { MotivationFormModel } from '@/models/motivation/motivation-form-model';
import { redirect } from 'next/navigation';

export async function createMotivationAction(formData: FormData) {
  let result: boolean | undefined = false;
  try {
    const parse = MotivationFormModel.safeParse(formData);

    if (parse.success) {
      result = await createMotivation(parse.data);
    }
  } catch (error) {
    return 'Something went wrong';
  }
  if (result) {
    redirect('/motivation/success');
  }
}
