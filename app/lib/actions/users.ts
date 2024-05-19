'use server';

import { handleError } from '@/app/ui/utils/form-errors';
import { approveUser, editFullUser, editUser } from '@/database/repository/user';
import { userEditSchema } from '@/models/user-models';
import { revalidatePath } from 'next/cache';

export async function approveUserById(id: string) {
  try {
    await approveUser(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/ambassadors/[id]/page');
}

export async function editUserAction(prevState: any, formData: FormData) {
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
    handleError(e);
  }
  revalidatePath('/ambassadors/[id]/page');
  return { success: true, errors: [], generic: undefined };
}

export async function editUserFullAction(prevState: any, formData: FormData) {
  try {
    console.log('got to edit user action');
    console.log('form data is: ', formData);
    const user = {
      id: formData.get('id'),
      name: formData.get('name'),
      phone_number: formData.get('phoneNumber'),
      uco: formData.get('uco'),
      email: formData.get('email'),
      role: formData.get('role'),
    };

    const parsedData = userEditSchema.parse(user);
    console.log('parsedData is: ', parsedData);

    await editFullUser(parsedData);
  } catch (e) {
    console.error(e);
    handleError(e);
  }
  revalidatePath('/ambassadors/[id]/page');
  return { success: true, errors: [], generic: undefined };
}
