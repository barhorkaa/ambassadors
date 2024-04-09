'use server';

import { createNewUser } from '@/database/repository/user';
import { RegistrationFormModel } from '@/models/auth/registration-form-model';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

export async function createUser(prevState: string | undefined, formData: FormData) {
  let id = null;

  try {
    console.log('Successfully called createUser');
    console.log(formData);

    const res = RegistrationFormModel.safeParse(formData);
    console.log('parsed result is: ', res);

    // TODO add data validation with zod
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const passwordHashed = await bcrypt.hash(password, 10); // TODO change salt to random
    const uco = Number(formData.get('uco') as string);
    const phoneNumber = formData.get('phoneNumber') as string;

    console.log('Calling fetch');

    const maybeId = await createNewUser(name, email, passwordHashed, Number(uco), phoneNumber);

    if (!maybeId) {
      return 'Something went wrong';
    }

    id = maybeId.id;
    console.log('id post registration', id);

    // TODO maybe change to better parsing, rn like this for form call
  } catch (error) {
    console.log(error);
    return 'Something went wrong, error';
  }

  redirect(`/register/success`);
}
