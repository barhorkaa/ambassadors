import { eventTypeDefaultModel } from '@/models/event-type/event-type-default-model';
import { z } from 'zod';

export const eventTypeCreateModel = eventTypeDefaultModel.omit({ id: true });

export type EventTypeCreateModel = z.infer<typeof eventTypeCreateModel>;
