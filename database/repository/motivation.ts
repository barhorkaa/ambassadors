import { db } from '@/database/database';
import { motivateUser } from '@/database/repository/user';
import { DatabaseError } from '@/errors/database-error';
import { MotivationModel } from '@/models/motivation/motivation-model';

export async function createMotivation(motivation: MotivationModel) {
  console.log('Got to repository');
  console.log('Data on repo is: ', motivation);
  try {
    await db.insertInto('motivationForm').values(motivation).execute();
    await motivateUser(motivation.user_id);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create motivation', cause: e });
  }
}

export async function getUserMotivation(id: string) {
  try {
    return await db.selectFrom('motivationForm').where('user_id', '=', id).selectAll().executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get user motivation', cause: e });
  }
}
