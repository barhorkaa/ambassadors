import EventTypeDetail from '@/app/ui/event-type/event-type-detail';
import CreateEventTypeModal from '@/app/ui/modals/create/create-event-type-modal';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { getAllEventTypes } from '@/database/repository/event-type';
import { EventTypeDetailModel } from '@/models/event-type-models';

export default async function Page() {
  const allEventTypes: EventTypeDetailModel[] = await getAllEventTypes();
  const session = await auth();

  return (
    <>
      <div className="flex flex-row justify-between content items-end">
        <h1>Druhy akcí</h1>
        {session?.user.role === UserRoles.manager && <CreateEventTypeModal />}
      </div>
      <hr className="w-full" />
      <div className="flex flex-col gap-6 content">
        {allEventTypes.map((eventType) => (
          <EventTypeDetail key={eventType.id} eventType={eventType} />
        ))}
      </div>
    </>
  );
}
