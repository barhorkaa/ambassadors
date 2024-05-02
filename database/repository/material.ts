import { db } from '@/database/database';
import { DatabaseError } from '@/errors/database-error';
import { MaterialCreateModel } from '@/models/material/material-create-model';
import { MaterialEditModel } from '@/models/material/material-edit-model';

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
    return await db.selectFrom('material').selectAll().execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get all materials', cause: e });
  }
}

export async function editMaterial(material: MaterialEditModel) {
  try {
    await db
      .updateTable('material')
      .where('id', '=', material.id)
      .set({ name: material.name, description: material.description, updated_at: new Date() })
      .execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Unable to edit material', cause: e });
  }
}

export async function createMaterial(material: MaterialCreateModel) {
  try {
    await db.insertInto('material').values(material).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create a material', cause: e });
  }
}
