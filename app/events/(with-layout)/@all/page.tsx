import { EventList } from '@/app/ui/utils/event-list';
import { getAllActiveEvents } from '@/database/repository/events';
import { EventModel } from '@/models/event-models';

export default async function allEvents() {
  console.log('calling get all events at: ', new Date());
  const allEvents: EventModel[] = await getAllActiveEvents(true);
  console.log('got result in component from get all events at: ', new Date());

  return (
    <EventList
      title={'Všechny akce'}
      list={allEvents}
      emptyMessage={'Momentálně nejsou k dispozici žádné akce. Jestli chcete někam jet, vtvořte návrh na novou akci.'}
    />
  );
}
