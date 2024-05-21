'use server';

import { handleError } from '@/app/lib/actions/utils';
import { createUser } from '@/database/repository/user';
import { userCreateSchema } from '@/models/user-models';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

export async function createUserAction(prevState: any, formData: FormData) {
  try {
    console.log('form data is: ', formData);
    const newUserForm = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      uco: formData.get('uco'),
      phone_number: formData.get('phoneNumber'),
    };

    const newUser = userCreateSchema.parse(newUserForm);

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    console.log('new user post hash is: ', newUser);
    await createUser(newUser);
  } catch (error) {
    console.log(error);
    return handleError(error);
  }
  redirect(`/register/success`);
}
