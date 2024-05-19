import { z } from 'zod';

export const formActionInitialState = {
  success: false,
  errors: [],
  generic: undefined,
};

export function handleError(error: unknown) {
  if (error instanceof z.ZodError) {
    return {
      success: false,
      errors: error.issues,
      generic: undefined,
    };
  } else
    return {
      success: false,
      errors: [],
      generic: 'Something went wrong',
    };
}
