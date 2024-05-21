import EventTypeDetail from '@/app/ui/event-type/event-type-detail';
import { getAllEventTypes } from '@/database/repository/event-type';
import { EventTypeDetailModel } from '@/models/event-type-models';

export default async function Page() {
  const allEventTypes: EventTypeDetailModel[] = await getAllEventTypes(false);

  return (
    <>
      {allEventTypes.length === 0 ? (
        <h2>Aktuálně nejsou k dispoici žádné druhy akcí</h2>
      ) : (
        <div className="flex flex-col gap-6">
          {allEventTypes.map((eventType) => (
            <EventTypeDetail key={eventType.id} eventType={eventType} />
          ))}
        </div>
      )}
    </>
  );
}
