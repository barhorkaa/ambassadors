'use server';

import { createMaterial, deleteMaterial, editMaterial, reviveMaterial } from '@/database/repository/material';
import { materialSchema } from '@/models/material-models';
import { revalidatePath } from 'next/cache';

export async function createMaterialAction(prevState: any, formData: FormData) {
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

export async function editMaterialAction(prevState: any, formData: FormData) {
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

export async function deleteMaterialAction(id: string) {
  try {
    await deleteMaterial(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/materials');
}

export async function reviveMaterialAction(id: string) {
  try {
    await reviveMaterial(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/materials');
}
