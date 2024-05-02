'use server';

import { createMaterial, editMaterial } from '@/database/repository/material';
import { materialCreateModel } from '@/models/material/material-create-model';
import { materialEditModel } from '@/models/material/material-edit-model';

export async function createMaterialAction(formData: FormData) {
  try {
    const materialForm = {
      name: formData.get('name'),
      description: formData.get('description'),
    };

    const parsedData = materialCreateModel.parse(materialForm);
    await createMaterial(parsedData);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function editMaterialAction(formData: FormData) {
  try {
    const materialForm = {
      id: formData.get('id'),
      name: formData.get('name'),
      description: formData.get('description'),
    };

    const parsedData = materialEditModel.parse(materialForm);
    await editMaterial(parsedData);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
