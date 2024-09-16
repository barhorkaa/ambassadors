type NotificationBase = {
  id?: string;
  userId: string;
};

export type UserNotifications = NotificationBase & {
  registrationApprove: boolean;
  signupApprove: boolean;
  personalInfoChange: boolean;
  eventChange: boolean;
  newEvent: boolean;
};

export type ManagerNotifications = NotificationBase & {
  newEventSuggestion: boolean;
  newRegistration: boolean;
  newReport: boolean;
  newSignup: boolean;
};
