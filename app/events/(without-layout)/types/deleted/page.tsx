import EventTypeDetail from '@/app/ui/event-type/event-type-detail';
import { getAllEventTypes } from '@/database/repository/event-type';
import { EventTypeDetailModel } from '@/models/event-type-models';

export default async function Page() {
  const deletedEventTypes: EventTypeDetailModel[] = await getAllEventTypes(true);

  return (
    <div className="flex flex-col gap-6">
      {deletedEventTypes.map((eventType) => (
        <EventTypeDetail key={eventType.id} eventType={eventType} />
      ))}
    </div>
  );
}
