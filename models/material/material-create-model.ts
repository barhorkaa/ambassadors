import { materialFullModel } from '@/models/material/material-full-model';
import { z } from 'zod';

export const materialCreateModel = materialFullModel.omit({
  id: true,
  created_at: true,
  updated_at: true,
  deleted_at: true,
});

export type MaterialCreateModel = z.infer<typeof materialCreateModel>;
