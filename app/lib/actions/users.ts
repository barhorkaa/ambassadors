'use server';

import { approveUser, editFullUser, editUser } from '@/database/repository/user';
import { userEditSchema } from '@/models/user-models';

export async function approveUserById(id: string) {
  try {
    await approveUser(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function editUserAction(formData: FormData) {
  try {
    console.log('got to edit user action');
    console.log('form data is: ', formData);
    const user = {
      id: formData.get('id'),
      name: formData.get('name'),
      phone_number: formData.get('phoneNumber'),
    };

    const parsedData = userEditSchema.parse(user);
    console.log('parsedData is: ', parsedData);

    await editUser(parsedData);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function editUserFullAction(formData: FormData) {
  try {
    console.log('got to edit user action');
    console.log('form data is: ', formData);
    const user = {
      id: formData.get('id'),
      name: formData.get('name'),
      phone_number: formData.get('phoneNumber'),
      uco: formData.get('uco'),
      email: formData.get('email'),
    };

    const parsedData = userEditSchema.parse(user);
    console.log('parsedData is: ', parsedData);

    await editFullUser(parsedData);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
