import { objectToCamel } from 'ts-case-convert';

type EventSnakeModel = {
  event_type_id: string;
  date: Date | null;
  name: string;
  event_type_name: string | null;
  id: string;
  limit: string;
};

type EventUseeStateSnakeModel = EventSnakeModel & { substitute: boolean };

export function adapter(toAdapt: EventSnakeModel[] | EventUseeStateSnakeModel[]) {
  const camel = objectToCamel(toAdapt);

  return camel.map((event) => {
    return { ...event, limit: +event.limit };
  });
}
