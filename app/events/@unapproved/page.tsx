import { EventList } from '@/app/ui/utils/event-list';
import { getAllActiveEvents } from '@/database/repository/events';
import { EventModel } from '@/models/event-models';

export default async function unapprovedEvents() {
  const allUnapprovedEvents: EventModel[] = await getAllActiveEvents(false);

  return (
    <EventList title={'Nepotvrzené akce'} list={allUnapprovedEvents} emptyMessage={'Všechny akce jsou potvrzeny'} />
  );
}
