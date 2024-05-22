import { EventTypeList } from '@/app/ui/utils/content-list';
import { getAllEventTypes } from '@/database/repository/event-type';
import { EventTypeDetailModel } from '@/models/event-type-models';

export default async function Page() {
  const allEventTypes: EventTypeDetailModel[] = await getAllEventTypes(false);

  return <EventTypeList eventTypes={allEventTypes} emptyMessage={'Aktuálně nejsou k dispoici žádné druhy akcí'} />;
}
