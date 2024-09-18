import { emailManagerNewRegistrationAction } from '@/app/lib/actions/nodemailer';
import { handleError } from '@/app/lib/actions/utils';
import { verifyEmailByToken } from '@/database/repository/verification';

export async function verifyEmailAction(token: string) {
  try {
    const user = await verifyEmailByToken(token);
    await emailManagerNewRegistrationAction(user.id);

    return true;
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
}

export async function unverifyEmailAction() {}
