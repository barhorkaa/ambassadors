import { db } from '@/database/database';
import { DatabaseError } from '@/database/errors/database-error';

export async function verifyEmailByToken(token: string) {
  try {
    return await db
      .updateTable('user')
      .where('verification_token', '=', token)
      .set({ email_verified: true, verification_token: null, updated_at: new Date() })
      .returning('id')
      .executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Failed to verify e-mail', cause: e });
  }
}

export async function unverifyEmail() {}
