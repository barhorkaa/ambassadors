'use server';

import { createUser } from '@/database/repository/user';
import { userCreateSchema } from '@/models/user-models';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function createUserAction(prevState: string | undefined, formData: FormData) {
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
    newUser.password = await bcrypt.hash(newUser.password, 10); // TODO change salt to random

    console.log('new user post hash is: ', newUser);
    await createUser(newUser);
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return error.issues.map((issue) => {
        return issue.message;
      })[0];
    } else return 'Something went wrong';
  }
  redirect(`/register/success`);
}
