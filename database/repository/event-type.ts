import { db } from '@/database/database';
import { EventTypeCreateModel } from '@/models/event-type/event-type-create-model';
import { EventTypeDefaultModel } from '@/models/event-type/event-type-default-model';

export async function getEventTypeById(id: string) {
  try {
    return await db.selectFrom('eventType').where('id', '=', id).selectAll().executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
  }
}

export async function getAllEventTypesBasics() {
  try {
    return await db.selectFrom('eventType').select(['name', 'id']).execute();
  } catch (e) {
    console.error(e);
  }
}

export async function getAllEventTypes() {
  try {
    return await db.selectFrom('eventType').selectAll().execute();
  } catch (e) {
    console.error(e);
  }
}

export async function createEventType(eventType: EventTypeCreateModel) {
  try {
    await db.insertInto('eventType').values(eventType).execute();
  } catch (e) {
    console.error(e);
  }
}

export async function editEventType(eventType: EventTypeDefaultModel) {
  try {
    await db
      .updateTable('eventType')
      .where('id', '=', eventType.id)
      .set({
        name: eventType.name,
        description: eventType.description,
        instructions: eventType.instructions,
        updated_at: new Date(),
      })
      .execute();
  } catch (e) {
    console.error(e);
  }
}
