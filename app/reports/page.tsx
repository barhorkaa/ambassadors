import { EventList } from '@/app/ui/utils/content-list';
import { getAllHistoryEvents } from '@/database/repository/events';

export default async function Page() {
  const eventsWithUnapprovedReports = await getAllHistoryEvents(false);

  return (
    <EventList
      title={''}
      list={eventsWithUnapprovedReports!}
      emptyMessage={'V tento moment jsou všechny zprávy potvrzeny!'}
    />
  );
}
