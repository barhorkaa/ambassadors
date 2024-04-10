'use server';

import { createNewUser } from '@/database/repository/user';
import { RegistrationModel, registrationModel } from '@/models/auth/registration-model';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

export async function createUserAction(prevState: string | undefined, formData: FormData) {
  let result: boolean | undefined = false;

  try {
    const newUserForm = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      uco: formData.get('uco'),
      phone_number: formData.get('phoneNumber'),
    };

    const parse = registrationModel.safeParse(newUserForm);

    if (parse.success) {
      let newUser: RegistrationModel = parse.data;
      newUser.password = await bcrypt.hash(newUser.password, 10); // TODO change salt to random
      result = await createNewUser(newUser);
    }
  } catch (error) {
    console.log(error);
    return 'Something went wrong, error';
  }
  if (result) {
    redirect(`/register/success`);
  }
}
