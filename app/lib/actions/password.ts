'use server';

import { signOutAction } from '@/app/lib/actions/authentication';
import { handleError } from '@/app/lib/actions/utils';
import { editUserPassword, getUserById } from '@/database/repository/user';
import { passwordSchema } from '@/models/password-models';
import bcrypt from 'bcryptjs';

export async function changePassword(prevState: any, formData: FormData) {
  try {
    const passwordForm = {
      userId: formData.get('userId'),
      oldPassword: formData.get('oldPassword'),
      newPassword: formData.get('newPassword'),
    };

    const parsedData = passwordSchema.parse(passwordForm);

    const user = await getUserById(parsedData.userId);

    const passwordsMatch = await bcrypt.compare(parsedData.oldPassword, user.password);
    if (!passwordsMatch) return { success: false, errors: [], generic: 'Původní hesla se nezhodují' };

    const salt = await bcrypt.genSalt(10);
    parsedData.newPassword = await bcrypt.hash(parsedData.newPassword, salt);

    await editUserPassword(parsedData.userId, parsedData.newPassword);
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  await signOutAction();
  return { success: true, errors: [], generic: undefined };
}
