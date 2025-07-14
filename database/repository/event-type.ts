import { db } from '@/database/database';
import { DatabaseError } from '@/database/errors/database-error';
import { LIMITED_ITEMS_PER_PAGE } from '@/database/repository/utils/consts';
import { EventTypeManipulationModel } from '@/models/event-type-models';
import { objectToCamel } from 'ts-case-convert';

export async function getEventTypeById(id: string) {
  try {
    const result = await db.selectFrom('eventType').where('id', '=', id).selectAll().executeTakeFirstOrThrow();
    if (result) {
      return objectToCamel(result);
    } else {
      return result;
    }
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get event type details', cause: e });
  }
}

export async function getAllEventTypesBasics() {
  try {
    return await db.selectFrom('eventType').where('deleted_at', 'is', null).select(['name', 'id']).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get event types', cause: e });
  }
}

export async function getAllFilteredEventTypes(deleted: boolean, query: string, currentPage: number) {
  const offset = (currentPage - 1) * LIMITED_ITEMS_PER_PAGE;

  try {
    const result = await db
      .selectFrom('eventType')
      .where('deleted_at', deleted ? 'is not' : 'is', null)
      .where((eb) =>
        eb.or([
          eb('eventType.name', 'ilike', `%${query}%`),
          eb('eventType.description', 'ilike', `%${query}%`),
          eb('eventType.instructions', 'ilike', `%${query}%`),
        ])
      )
      .selectAll()
      .limit(LIMITED_ITEMS_PER_PAGE)
      .offset(offset)
      .execute();

    return objectToCamel(result);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get all event types', cause: e });
  }
}

export async function getAllFilteredEventTypesCount(deleted: boolean, query: string) {
  try {
    const result = await db
      .selectFrom('eventType')
      .where('deleted_at', deleted ? 'is not' : 'is', null)
      .where((eb) =>
        eb.or([
          eb('eventType.name', 'ilike', `%${query}%`),
          eb('eventType.description', 'ilike', `%${query}%`),
          eb('eventType.instructions', 'ilike', `%${query}%`),
        ])
      )
      .selectAll()
      .execute();

    return Math.ceil(result.length / LIMITED_ITEMS_PER_PAGE);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get all event types', cause: e });
  }
}

export async function createEventType(eventType: EventTypeManipulationModel) {
  try {
    await db.insertInto('eventType').values(eventType).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create event type', cause: e });
  }
}

export async function editEventType(eventType: EventTypeManipulationModel) {
  try {
    await db
      .updateTable('eventType')
      .where('id', '=', eventType.id!)
      .set({
        name: eventType.name,
        description: eventType.description,
        instructions: eventType.instructions,
        updated_at: new Date(),
      })
      .execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Unable to edit event type', cause: e });
  }
}

export async function deleteEventType(id: string) {
  try {
    await db.updateTable('eventType').where('id', '=', id).set({ deleted_at: new Date() }).executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_DELETE_ERROR', message: 'Unable to delete event type', cause: e });
  }
}

export async function reviveEventType(id: string) {
  try {
    await db
      .updateTable('eventType')
      .where('id', '=', id)
      .set({ updated_at: new Date(), deleted_at: null })
      .executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_DELETE_ERROR', message: 'Unable to delete event type', cause: e });
  }
}
