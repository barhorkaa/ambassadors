import CreateEventTypeModal from '@/app/ui/modals/create-event-type-modal';
import EditEventTypeModal from '@/app/ui/modals/edit-event-type-modal';
import DetailRow from '@/app/ui/utils/detail-row';
import { auth } from '@/auth';
import { getAllEventTypes } from '@/database/repository/event-type';
import { EventTypeDetailModel } from '@/models/event-type/event-type-detail-model';

export default async function EventsTypes() {
  const allEventTypes: EventTypeDetailModel[] | undefined = await getAllEventTypes();
  if (allEventTypes === undefined) {
    return <div>unable to get events</div>;
  }

  const session = await auth();

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1>Typy akcii</h1>
        {session?.user.role === 'manager' && <CreateEventTypeModal />}
      </div>

      <hr className="w-full" />
      {allEventTypes.map((eventType) => (
        <Detail key={eventType.id} eventType={eventType} />
      ))}
    </>
  );
}

async function Detail(params: { eventType: EventTypeDetailModel }) {
  const session = await auth();

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h2>{params.eventType.name}</h2>
        {session?.user.role === 'manager' && <EditEventTypeModal eventType={params.eventType} />}
      </div>
      <div>
        <DetailRow label={'Popis'} value={params.eventType.description} />
        <DetailRow label={'Instrukce'} value={params.eventType.instructions} />
      </div>
      <hr />
    </div>
  );
}
