import { ErrorBase } from '@/errors/base-error';

type ErrorName = 'DATABASE_GET_ERROR' | 'DATABASE_CREATE_ERROR' | 'DATABASE_UPDATE_ERROR' | 'DATABASE_DELETE_ERROR';

export class DatabaseError extends ErrorBase<ErrorName> {}
