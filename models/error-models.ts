import { ZodIssue } from 'zod';

export type StateModel =
  | { success: boolean; errors: ZodIssue[]; generic: undefined }
  | { success: boolean; errors: never[]; generic: string };
