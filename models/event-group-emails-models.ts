export type EventGroupEmailModel = {
  id?: string;
  eventId: string;
  contents: string;
  createdAt?: Date;
};

export type EventGroupEmailSendingModel = EventGroupEmailModel & {
  title: string;
  preview?: string;
  recipients: string[];
};
