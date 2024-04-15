'use server';

import { approveUser, editUser } from '@/database/repository/user';
import { userEditSelfModel } from '@/models/user/user-edit-self-model';

export async function approveUserWithId(formData: FormData) {
  try {
    console.log('called action in user');
    const userId = formData.get('id') as string;
    console.log('approve user with id: ', userId);
    await approveUser(userId);
  } catch (e) {
    console.log(e);
  }
}

export async function approveUserById(id: string) {
  try {
    await approveUser(id);
  } catch (e) {
    console.log(e);
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
    console.log(e);
  }
}
