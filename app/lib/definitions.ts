export type Ambassador = {
  uco: number;
  name: string;
  e_mail: string;
  phone_number: string;
};

export type Event = {
  id: number;
  name: string;
  date: Date;
  event_type_id: number;
};

export type Event_Ambassador = {
  id: number;
  ambassador_id: number;
  event_id: number;
};

export type EventType = {
  id: number;
  name: string;
  description: string;
  instructions: string;
};

export type RegisterForm = {
  id: number;
  ambassador_id: number;
  // add fields for individual questions
};

export type Report = {
  id: number;
  ambassador_id: number;
  number_of_attendees: number;
  notes: string;
  ideas: string;
};

export type Material = {
  id: number;
  name: string;
  description: string;
};

export type Material_Report = {
  id: number;
  material_id: number;
  report_id: number;
  amount: number;
};