import { EventTypeList } from '@/app/ui/utils/content-list';
import { getAllEventTypes } from '@/database/repository/event-type';
import { EventTypeDetailModel } from '@/models/event-type-models';

export default async function Page() {
  const deletedEventTypes: EventTypeDetailModel[] = await getAllEventTypes(true);

  return (
    <EventTypeList
      title={'Vymazané druhy akcí'}
      list={deletedEventTypes}
      emptyMessage={'Aktuálně jsou všechny typy akcí používány'}
    />
  );
}
