import { materialFullModel } from '@/models/material/material-full-model';
import { z } from 'zod';

export const materialEditModel = materialFullModel.omit({
  created_at: true,
  updated_at: true,
  deleted_at: true,
});

export type MaterialEditModel = z.infer<typeof materialEditModel>;
