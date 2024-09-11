'use server';

import { emailManagerNewRegistrationAction } from '@/app/lib/actions/nodemailer';
import { handleError } from '@/app/lib/actions/utils';
import { createUser } from '@/database/repository/user';
import { userCreateSchema } from '@/models/user-models';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

export async function createUserAction(prevState: any, formData: FormData) {
  try {
    const newUserForm = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      uco: formData.get('uco'),
      phone_number: formData.get('phoneNumber'),
    };

    const parsedData = userCreateSchema.parse(newUserForm);

    const salt = await bcrypt.genSalt(10);
    parsedData.password = await bcrypt.hash(parsedData.password, salt);

    const userId = await createUser(parsedData);
    await emailManagerNewRegistrationAction(userId);
  } catch (error) {
    console.error(error);
    return handleError(error);
  }
  redirect(`/register/success`);
}
