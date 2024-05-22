import { EventTypeList } from '@/app/ui/utils/content-list';
import { getAllEventTypes } from '@/database/repository/event-type';
import { EventTypeDetailModel } from '@/models/event-type-models';

export default async function Page() {
  const deletedEventTypes: EventTypeDetailModel[] = await getAllEventTypes(true);

  return <EventTypeList eventTypes={deletedEventTypes} emptyMessage={'Aktuálně jsou všechny typy akcí používány'} />;
}
