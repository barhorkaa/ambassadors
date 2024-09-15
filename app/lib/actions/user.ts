'use server';

import { emailPersonalInfoChangeAction, emailRegistrationApprove } from '@/app/lib/actions/nodemailer';
import { handleError } from '@/app/lib/actions/utils';
import { auth } from '@/auth';
import { approveUser, editFullUser, editUser } from '@/database/repository/user';
import { userEditSchema } from '@/models/user-models';
import { revalidatePath } from 'next/cache';

export async function approveUserById(id: string) {
  try {
    await approveUser(id);
    await emailRegistrationApprove(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/ambassadors/[id]/page', 'layout');
}

export async function editUserAction(prevState: any, formData: FormData) {
  try {
    const userForm = {
      id: formData.get('id'),
      name: formData.get('name'),
      phone_number: formData.get('phoneNumber'),
    };

    const parsedData = userEditSchema.parse(userForm);

    const oldUser = await editUser(parsedData);
    await emailPersonalInfoChangeAction(oldUser);
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  revalidatePath('/ambassadors/[id]/page', 'layout');
  return { success: true, errors: [], generic: undefined };
}

export async function editUserFullAction(prevState: any, formData: FormData) {
  try {
    const userForm = {
      id: formData.get('id'),
      name: formData.get('name'),
      phone_number: formData.get('phoneNumber'),
      uco: formData.get('uco'),
      email: formData.get('email'),
      role: formData.get('role'),
    };

    const parsedData = userEditSchema.parse(userForm);

    const session = await auth();
    if (session?.user.id === userForm.id && session.user.role !== userForm.role) {
      return { success: false, errors: [], generic: 'Nemůžete změnit vlastní roli' };
    }

    const oldUser = await editFullUser(parsedData);
    await emailPersonalInfoChangeAction(oldUser);
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  revalidatePath('/ambassadors/[id]/page', 'layout');
  return { success: true, errors: [], generic: undefined };
}
