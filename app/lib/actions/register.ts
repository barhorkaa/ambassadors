'use server';

import { createUser } from '@/database/repository/user';
import { RegistrationModel, registrationModel } from '@/models/auth/registration-model';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

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

    const newUser = registrationModel.parse(newUserForm);
    newUser.password = await bcrypt.hash(newUser.password, 10); // TODO change salt to random

    console.log('new user post hash is: ', newUser);
    await createUser(newUser);
  } catch (error) {
    console.log(error);
    return 'Something went wrong, error';
  }
  redirect(`/register/success`);
}
