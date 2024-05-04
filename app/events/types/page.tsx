import CreateEventTypeModal from '@/app/ui/modals/create-event-type-modal';
import EditEventTypeModal from '@/app/ui/modals/edit-event-type-modal';
import DetailRow from '@/app/ui/utils/detail-row';
import { auth } from '@/auth';
import { getAllEventTypes } from '@/database/repository/event-type';
import { EventTypeDetailModel } from '@/models/event-type-models';

export default async function EventsTypes() {
  const allEventTypes: EventTypeDetailModel[] = await getAllEventTypes();
  const session = await auth();
  const isManager = session?.user.role === 'manager';

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1>Druhy akcii</h1>
        {isManager && <CreateEventTypeModal />}
      </div>
      <hr className="w-full" />
      {allEventTypes.map((eventType) => (
        <Detail key={eventType.id} eventType={eventType} isManager={isManager} />
      ))}
    </>
  );
}

function Detail(params: { eventType: EventTypeDetailModel; isManager: boolean }) {
  return (
    <>
      <div className="flex flex-row justify-between">
        <h2>{params.eventType.name}</h2>
        {params.isManager && <EditEventTypeModal eventType={params.eventType} />}
      </div>
      <div>
        <DetailRow label={'Popis'} value={params.eventType.description} />
        <DetailRow label={'Instrukce'} value={params.eventType.instructions} />
      </div>
      <hr />
    </>
  );
}
