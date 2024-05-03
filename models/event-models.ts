export type EventModel = {
  id: string;
  name: string;
  date: Date | null;
  eventTypeId: string;
  eventTypeName: string | null;
  limit: number;
};

export type EventDetailModel = EventModel & {
  approved: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};
