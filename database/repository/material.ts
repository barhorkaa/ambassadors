import { db } from '@/database/database';
import { DatabaseError } from '@/errors/database-error';
import { MaterialCreateModel } from '@/models/material/material-create-model';

export async function getMaterialById(id: string) {
  try {
    return await db.selectFrom('material').where('id', '=', id).selectAll().executeTakeFirst();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get material', cause: e });
  }
}

export async function getAllMaterials() {
  try {
    return await db.selectFrom('material').selectAll().executeTakeFirst();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get all materials', cause: e });
  }
}

export async function createMaterial(material: MaterialCreateModel) {
  try {
    return await db.insertInto('material').values(material).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get all materials', cause: e });
  }
}
