import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely'

export interface Database {
  ambassador: AmbassadorTable
  event: EventTable
  eventType: EventTypeTable
  report: ReportTable
  material: MaterialTable
  registerForm: RegisterFormTable
  eventAmbassador: EventAmbassadorTable
  materialReport: MaterialReportTable
}

export interface AmbassadorTable {
  id: Generated<number>
  uco: number
  name: string
  email: string
  phone_number: string
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, Date>
  deleted_at: ColumnType<Date, string | undefined, Date>
}

export type Ambassador = Selectable<AmbassadorTable>
export type NewAmbassador = Insertable<AmbassadorTable>
export type AmbassadorUpdate = Updateable<AmbassadorTable>

export interface EventTable {
  id: Generated<number>
  name: string
  date: Date
  event_type_id: number
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, Date>
  deleted_at: ColumnType<Date, string | undefined, Date>
}

export type Event = Selectable<EventTable>
export type NewEvent = Insertable<EventTable>
export type EventUpdate = Updateable<EventTable>

export interface EventTypeTable {
  id: Generated<number>
  name: string
  description: string
  instructions: string
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, Date>
  deleted_at: ColumnType<Date, string | undefined, Date>
}

export type EventType = Selectable<EventTypeTable>
export type NewEventType = Insertable<EventTypeTable>
export type EventUpdateType = Updateable<EventTypeTable>

export interface ReportTable {
  id: Generated<number>
  ambassador_id: number
  number_of_attendees: number
  notes: string
  ideas: string
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, Date>
  deleted_at: ColumnType<Date, string | undefined, Date>
}

export type Report = Selectable<ReportTable>
export type NewReport = Insertable<ReportTable>
export type ReportUpdate = Updateable<ReportTable>

export interface MaterialTable {
  id: Generated<number>
  name: string
  description: string
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, Date>
  deleted_at: ColumnType<Date, string | undefined, Date>
}

export type Material = Selectable<MaterialTable>
export type NewMaterial = Insertable<MaterialTable>
export type MaterialUpdate = Updateable<MaterialTable>

export interface RegisterFormTable {
  id: Generated<number>
  ambassador_id: number
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, Date>
  deleted_at: ColumnType<Date, string | undefined, Date>
}

export type RegisterForm = Selectable<RegisterFormTable>
export type NewRegisterForm = Insertable<RegisterFormTable>
export type RegisterFormUpdate = Updateable<RegisterFormTable>

export interface EventAmbassadorTable {
  id: Generated<number>
  ambassador_id: number
  event_id: number
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, Date>
  deleted_at: ColumnType<Date, string | undefined, Date>
}

export type EventAmbassador = Selectable<EventAmbassadorTable>
export type NewEventAmbassador = Insertable<EventAmbassadorTable>
export type EventAmbassadorUpdate = Updateable<EventAmbassadorTable>

export interface MaterialReportTable {
  id: Generated<number>
  material_id: number
  report_id: number
  amount: number
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, Date>
  deleted_at: ColumnType<Date, string | undefined, Date>
}

export type MaterialReport = Selectable<MaterialReportTable>
export type NewMaterialReport = Insertable<MaterialReportTable>
export type MaterialReportUpdate = Updateable<MaterialReportTable>
