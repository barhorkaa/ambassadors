import { db } from '@/database/database';

export async function getUserSignUps(user_id: string) {
  try {
    console.log('user id is: ', user_id);
    return await db
      .selectFrom('eventUser')
      .where('user_id', '=', user_id)
      .fullJoin('event', 'eventUser.event_id', 'event.id')
      .select([
        'event.id as id',
        // "eventUser.approved as event_user_approved",
        'event.name as name',
        'event.event_type_id as event_type_id',
        'event.date as date',
      ])
      .fullJoin('eventType', 'event.event_type_id', 'eventType.id')
      .select(['eventType.name as event_type_name'])
      .execute();
  } catch (e) {
    console.log(e);
  }
}

export async function createSignUp(event_id: string, user_id: string, substitute: boolean) {
  try {
    await db.insertInto('eventUser').values({ user_id: user_id, event_id: event_id, substitute: substitute }).execute();
  } catch (e) {
    console.log(e);
  }
}

export async function deleteSignUp(event_id: string, user_id: string) {
  try {
    const wasSubstitute = await db
      .deleteFrom('eventUser')
      .where((eb) => eb.and([eb('event_id', '=', event_id), eb('user_id', '=', user_id)]))
      .returning('substitute')
      .executeTakeFirst();

    if (!wasSubstitute!.substitute!) {
      const firstSubstitute = await db
        .selectFrom('eventUser')
        .where((eb) => eb.and([eb('event_id', '=', event_id), eb('substitute', '=', true)]))
        .orderBy('created_at', 'desc')
        .select(['user_id'])
        .executeTakeFirst();

      console.log(firstSubstitute);
      await makeSignUpNotSubstitute(event_id, firstSubstitute!.user_id);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function makeSignUpNotSubstitute(event_id: string, user_id: string) {
  try {
    await db
      .updateTable('eventUser')
      .where((eb) => eb.and([eb('event_id', '=', event_id), eb('user_id', '=', user_id)]))
      .set({ substitute: false })
      .execute();
  } catch (e) {
    console.log(e);
  }
}

export async function isUserSignedUpForEvent(event_id: string, user_id: string) {
  try {
    const record = await db
      .selectFrom('eventUser')
      .where('event_id', '=', event_id)
      .where('user_id', '=', user_id)
      .select('eventUser.id')
      .executeTakeFirst();
    return record !== undefined;
  } catch (e) {
    console.log(e);
  }
}

export async function getAllUnapprovedSignUps() {
  try {
    return await db
      .selectFrom('eventUser')
      .where('eventUser.approved', '=', false)
      .leftJoin('user', 'user.id', 'user_id')
      .select([
        'user.name as user_name',
        'eventUser.id as id',
        'eventUser.event_id as event_id',
        'eventUser.user_id as user_id',
        'eventUser.approved as approved',
      ])
      .leftJoin('event', 'event.id', 'event_id')
      .select('event.name as event_name')
      .execute();
  } catch (e) {
    console.log(e);
  }
}

export async function getAllSignUps() {
  try {
    return await db
      .selectFrom('eventUser')
      .leftJoin('user', 'user.id', 'user_id')
      .select([
        'user.name as user_name',
        'eventUser.id as id',
        'eventUser.event_id as event_id',
        'eventUser.user_id as user_id',
        'eventUser.approved as approved',
      ])
      .leftJoin('event', 'event.id', 'event_id')
      .select('event.name as event_name')
      .execute();
  } catch (e) {
    console.log(e);
  }
}

export async function getSignUpsForEvent(event_id: string) {
  try {
    return db
      .selectFrom('eventUser')
      .where((eb) => eb.and([eb('event_id', '=', event_id), eb('substitute', '=', false)]))
      .leftJoin('user', 'user.id', 'eventUser.user_id')
      .select(['user.name as user_name'])
      .execute();
  } catch (e) {
    console.log(e);
  }
}

export async function approveSignUp(id: string) {
  try {
    await db.updateTable('eventUser').where('id', '=', id).set({ approved: true, updated_at: new Date() }).execute();
  } catch (e) {
    console.log(e);
  }
}
