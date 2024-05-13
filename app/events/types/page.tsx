import EventTypeDetail from '@/app/ui/event-type/event-type-detail';
import CreateEventTypeModal from '@/app/ui/modals/create/create-event-type-modal';
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
        <h1>Druhy akcí</h1>
        {isManager && <CreateEventTypeModal />}
      </div>
      <hr className="w-full" />
      <div className="flex flex-col gap-6">
        {allEventTypes.map((eventType) => (
          <EventTypeDetail key={eventType.id} eventType={eventType} />
        ))}
      </div>
    </>
  );
}
