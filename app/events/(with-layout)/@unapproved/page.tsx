import { EventList } from '@/app/ui/utils/event-list';
import { getAllActiveEvents } from '@/database/repository/events';
import { EventModel } from '@/models/event-models';

export default async function unapprovedEvents() {
  console.log('calling get all unapproved events at: ', new Date());
  const allUnapprovedEvents: EventModel[] = await getAllActiveEvents(false);
  console.log('got result in component from get all unapproved events at: ', new Date());

  return (
    <EventList title={'Nepotvrzené akce'} list={allUnapprovedEvents} emptyMessage={'Všechny akce jsou potvrzeny'} />
  );
}
