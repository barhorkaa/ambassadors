import { z, ZodIssue } from 'zod';

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

// source: https://www.codingzeal.com/post/how-to-use-zod-for-form-validation-with-react-server-actions-in-next-js
export const findErrors = (fieldName: string, errors: ZodIssue[]) => {
  return errors
    .filter((item) => {
      return item.path.includes(fieldName);
    })
    .map((item) => item.message);
};
