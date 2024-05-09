'use server';

import { createMaterial, editMaterial } from '@/database/repository/material';
import { materialSchema } from '@/models/material-models';
import { revalidatePath } from 'next/cache';

export async function createMaterialAction(formData: FormData) {
  try {
    const materialForm = {
      name: formData.get('name'),
      description: formData.get('description'),
    };

    const parsedData = materialSchema.parse(materialForm);
    await createMaterial(parsedData);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/materials');
}

export async function editMaterialAction(formData: FormData) {
  try {
    const materialForm = {
      id: formData.get('id'),
      name: formData.get('name'),
      description: formData.get('description'),
    };

    const parsedData = materialSchema.parse(materialForm);
    await editMaterial(parsedData);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/materials');
}
