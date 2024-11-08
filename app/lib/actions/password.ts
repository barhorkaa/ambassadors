'use server';

import { signOutAction } from '@/app/lib/actions/authentication';
import { emailResetPassword } from '@/app/lib/actions/nodemailer';
import { handleError } from '@/app/lib/actions/utils';
import { editUserPassword, getUserByEmail, getUserById } from '@/database/repository/user';
import { emailResetSchema, emailSchema, passwordSchema } from '@/models/password-models';
import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';
import { redirect } from 'next/navigation';

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

export async function resetPasswordAction(prevState: any, formData: FormData) {
  try {
    const resetForm = {
      userId: formData.get('userId'),
      newPassword: formData.get('newPassword'),
    };

    const parsedData = emailResetSchema.parse(resetForm);

    const salt = await bcrypt.genSalt(10);
    parsedData.newPassword = await bcrypt.hash(parsedData.newPassword, salt);

    await editUserPassword(parsedData.userId, parsedData.newPassword);
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  redirect('/password/success');
}

export async function getEmailAction(prevState: any, formData: FormData) {
  try {
    const emailForm = {
      email: formData.get('email'),
    };

    const parsedEmail = emailSchema.parse(emailForm);

    const user = await getUserByEmail(parsedEmail.email);
    if (user === undefined) return { success: false, errors: [], generic: 'Zadali jste špatný e-mail' };

    const user_token = jwt.sign({ id: user.id }, process.env['RESET_TOKEN_SECRET'] as Secret, {
      expiresIn: '1h',
    });

    await emailResetPassword(parsedEmail.email, user_token);
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  redirect('/password/sent');
}
