export type EventModel = {
  id: string;
  name: string;
  date: Date | null;
  eventTypeId: string;
  eventTypeName: string | null;
  limit: number;
};

export type EventDetailModel = Omit<EventModel, 'eventTypeName'> & {
  approved: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
