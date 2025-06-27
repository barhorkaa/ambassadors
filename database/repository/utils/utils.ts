import { MAX_DATE, MIN_DATE } from '@/database/repository/utils/consts';

export function isCustomDateRange(dateFrom: Date, dateTo: Date) {
  return dateFrom.getTime() !== new Date(MIN_DATE).getTime() || dateTo.getTime() !== new Date(MAX_DATE).getTime();
}
