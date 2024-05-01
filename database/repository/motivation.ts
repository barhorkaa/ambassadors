import { db } from '@/database/database';
import { motivateUser } from '@/database/repository/user';
import { MotivationModel } from '@/models/motivation/motivation-model';

export async function createMotivation(motivation: MotivationModel) {
  console.log('Got to repository');
  console.log('Data on repo is: ', motivation);
  try {
    await db.insertInto('motivationForm').values(motivation).execute();
    await motivateUser(motivation.user_id);
    return true;
  } catch (e) {
    console.error(e);
  }
}

export async function isUserMotivated(user_id: string) {
  try {
    const userMotivation = await db
      .selectFrom('motivationForm')
      .where('user_id', '=', user_id)
      .select('id')
      .executeTakeFirst();
    return userMotivation != undefined;
  } catch (e) {
    console.error(e);
  }
}

export async function getUserMotivation(id: string) {
  try {
    return await db.selectFrom('motivationForm').where('user_id', '=', id).selectAll().executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
  }
}
