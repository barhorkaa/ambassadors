import { materialEditModel } from '@/models/material/material-edit-model';
import { z } from 'zod';

export const materialCreateModel = materialEditModel.omit({
  id: true,
});

export type MaterialCreateModel = z.infer<typeof materialCreateModel>;
