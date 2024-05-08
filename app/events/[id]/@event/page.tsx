import EventDetail from '@/app/ui/event/event-detail';
import { getEventById } from '@/database/repository/events';
import { EventDetailModel } from '@/models/event-models';

export default async function EventPage({ params }: { params: { id: string } }) {
  const event: EventDetailModel = await getEventById(params.id);

  return (
    <div>
      <EventDetail event={event} />
    </div>
  );
}
