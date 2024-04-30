'use server';

import { approveUser, editFullUser, editUser } from '@/database/repository/user';
import { userEditFullModel } from '@/models/user/user-edit-full-model';
import { userEditSelfModel } from '@/models/user/user-edit-self-model';

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

    const parse = userEditSelfModel.safeParse(user);
    console.log('parse is: ', parse);

    if (parse.success) {
      await editUser(parse.data);
    }
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

    const parse = userEditFullModel.safeParse(user);
    console.log('parse is: ', parse);

    if (parse.success) {
      await editFullUser(parse.data);
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
}
