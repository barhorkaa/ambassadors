import { db } from '@/database/database';
import { DatabaseError } from '@/database/errors/database-error';
import { adapter } from '@/database/repository/event';

export async function getUserSignUps(user_id: string, substitute: boolean, active: boolean) {
  try {
    const result = await db
      .selectFrom('eventUser')
      .where((eb) => eb.and([eb('substitute', '=', substitute), eb('user_id', '=', user_id)]))
      .innerJoin('event', 'eventUser.event_id', 'event.id')
      .where('event.deleted_at', 'is', null)
      .leftJoin('report', 'report.event_id', 'event.id')
      .where('report.id', active ? 'is' : 'is not', null)
      .select([
        'event.id as id',
        'event.name as name',
        'event.event_type_id as event_type_id',
        'event.date as date',
        'event.limit as limit',
      ])
      .innerJoin('eventType', 'event.event_type_id', 'eventType.id')
      .select(['eventType.name as event_type_name'])
      .execute();

    return adapter(result);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get user signups', cause: e });
  }
}

export async function createSignUp(event_id: string, user_id: string, substitute: boolean) {
  try {
    await db.insertInto('eventUser').values({ user_id: user_id, event_id: event_id, substitute: substitute }).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create a user signup', cause: e });
  }
}

export async function deleteSignUp(event_id: string, user_id: string) {
  try {
    let promotedSubstituteId = undefined;

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

      if (firstSubstitute) {
        await makeSignUpNotSubstitute(event_id, firstSubstitute.user_id);
        promotedSubstituteId = firstSubstitute.user_id;
      }
    }

    return promotedSubstituteId;
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_DELETE_ERROR', message: 'Unable to delete user signup', cause: e });
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
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Unable to promote a substitute', cause: e });
  }
}

export async function userSignUpForEventStatus(event_id: string, user_id: string) {
  try {
    return await db
      .selectFrom('eventUser')
      .where('event_id', '=', event_id)
      .where('user_id', '=', user_id)
      .select(['substitute', 'eventUser.approved as approved'])
      .executeTakeFirst();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get signups for an event', cause: e });
  }
}

export async function getAllSignUps(approved: boolean) {
  try {
    const result = await db
      .selectFrom('eventUser')
      .where('eventUser.approved', '=', approved)
      .leftJoin('user', 'user.id', 'user_id')
      .select([
        'user.name as user_name',
        'eventUser.id as id',
        'eventUser.event_id as event_id',
        'eventUser.user_id as user_id',
        'eventUser.approved as approved',
        'eventUser.substitute as substitute',
      ])
      .leftJoin('event', 'event.id', 'event_id')
      .where('event.deleted_at', 'is', null)
      .select('event.name as event_name')
      .execute();

    return result.map((event) => {
      return {
        id: event.id!,
        eventName: event.event_name!,
        eventId: event.event_id!,
        userName: event.user_name!,
        userId: event.user_id!,
        approved: event.approved!,
        substitute: event.substitute!,
      };
    });
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get all signups', cause: e });
  }
}

export async function getSignUpsForEvent(event_id: string, substitute: boolean) {
  try {
    return db
      .selectFrom('eventUser')
      .where((eb) => eb.and([eb('event_id', '=', event_id), eb('substitute', '=', substitute)]))
      .leftJoin('user', 'user.id', 'eventUser.user_id')
      .select(['user.name as userName', 'user_id as userId', 'eventUser.approved as approved'])
      .execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get signups for event', cause: e });
  }
}

export async function approveSignUp(id: string) {
  try {
    return await db
      .updateTable('eventUser')
      .where('id', '=', id)
      .set({ approved: true, updated_at: new Date() })
      .returning(['user_id', 'event_id', 'substitute'])
      .executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Unable to approve signup', cause: e });
  }
}
