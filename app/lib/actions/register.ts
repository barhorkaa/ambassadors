'use server';

import { createUser } from '@/database/repository/user';
import { RegistrationModel, registrationModel } from '@/models/auth/registration-model';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

export async function createUserAction(prevState: string | undefined, formData: FormData) {
  let result: boolean | undefined = false;

  try {
    console.log('form data is: ', formData);
    const newUserForm = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      uco: formData.get('uco'),
      phone_number: formData.get('phoneNumber'),
    };

    const parse = registrationModel.safeParse(newUserForm);
    console.log('parse is: ', parse);

    if (parse.success) {
      let newUser: RegistrationModel = parse.data;
      newUser.password = await bcrypt.hash(newUser.password, 10); // TODO change salt to random
      console.log('new user post hash is: ', newUser);
      result = await createUser(newUser);
    }
  } catch (error) {
    console.log(error);
    return 'Something went wrong, error';
  }
  if (result) {
    redirect(`/register/success`);
  }
}
