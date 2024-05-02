'use server';

import { createMaterial } from '@/database/repository/material';
import { materialCreateModel } from '@/models/material/material-create-model';

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
