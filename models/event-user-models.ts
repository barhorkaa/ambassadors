export type EventUserBaseModel = {
  userId: string;
  userName: string | null;
  approved: boolean;
};

export type EventUserBasicModel = EventUserBaseModel & {
  id: string;
  substitute: boolean;
  eventId: string;
  eventName: string;
};
