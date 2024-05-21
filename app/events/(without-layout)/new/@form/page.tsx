import EventForm from '@/app/ui/event/event-form';
import { getAllEventTypesBasics } from '@/database/repository/event-type';
import { EventTypeMinModel } from '@/models/event-type-models';

export default async function Page() {
  const eventTypes: EventTypeMinModel[] = await getAllEventTypesBasics();

  return (
    <div className="card">
      <EventForm event={null} eventTypes={eventTypes} />
    </div>
  );
}
