import { ErrorBase } from '@/database/errors/base-error';

// source: https://engineering.udacity.com/handling-errors-like-a-pro-in-typescript-d7a314ad4991
type ErrorName = 'DATABASE_GET_ERROR' | 'DATABASE_CREATE_ERROR' | 'DATABASE_UPDATE_ERROR' | 'DATABASE_DELETE_ERROR';

export class DatabaseError extends ErrorBase<ErrorName> {}
