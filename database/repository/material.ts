import { db } from '@/database/database';
import { DatabaseError } from '@/database/errors/database-error';
import { LIMITED_ITEMS_PER_PAGE } from '@/database/repository/utils/consts';
import { MaterialManipulationModel } from '@/models/material-models';
import { objectToCamel } from 'ts-case-convert';

export async function getAllFilteredMaterials(deleted: boolean, query: string, currentPage: number) {
  const offset = (currentPage - 1) * LIMITED_ITEMS_PER_PAGE;

  try {
    const result = await db
      .selectFrom('material')
      .where('deleted_at', deleted ? 'is not' : 'is', null)
      .where((eb) =>
        eb.or([eb('material.name', 'ilike', `%${query}%`), eb('material.description', 'ilike', `%${query}%`)])
      )
      .selectAll()
      .limit(LIMITED_ITEMS_PER_PAGE)
      .offset(offset)
      .execute();

    return objectToCamel(result);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get all materials', cause: e });
  }
}

export async function getAllFilteredMaterialsCount(deleted: boolean, query: string) {
  try {
    const result = await db
      .selectFrom('material')
      .where('deleted_at', deleted ? 'is not' : 'is', null)
      .where((eb) =>
        eb.or([eb('material.name', 'ilike', `%${query}%`), eb('material.description', 'ilike', `%${query}%`)])
      )
      .selectAll()
      .execute();

    return Math.ceil(result.length / LIMITED_ITEMS_PER_PAGE);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get all materials', cause: e });
  }
}

export async function getAllMaterialsMin() {
  try {
    return await db
      .selectFrom('material')
      .where('deleted_at', 'is', null)
      .select(['material.id as id', 'material.name as name'])
      .execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get all materials', cause: e });
  }
}

export async function editMaterial(material: MaterialManipulationModel) {
  try {
    await db
      .updateTable('material')
      .where('id', '=', material.id!)
      .set({ name: material.name, description: material.description, updated_at: new Date() })
      .execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Unable to edit material', cause: e });
  }
}

export async function createMaterial(material: MaterialManipulationModel) {
  try {
    await db.insertInto('material').values(material).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create a material', cause: e });
  }
}

export async function deleteMaterial(id: string) {
  try {
    await db.updateTable('material').where('id', '=', id).set({ deleted_at: new Date() }).executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_DELETE_ERROR', message: 'Unable to delete material', cause: e });
  }
}

export async function reviveMaterial(id: string) {
  try {
    await db
      .updateTable('material')
      .where('id', '=', id)
      .set({ deleted_at: null, updated_at: new Date() })
      .executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_DELETE_ERROR', message: 'Unable to delete material', cause: e });
  }
}
