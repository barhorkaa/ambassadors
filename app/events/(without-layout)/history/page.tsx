import { EventList } from '@/app/ui/utils/content-list';
import { getAllHistoryEvents } from '@/database/repository/events';

export default async function Page() {
  const eventsWithApprovedReports = await getAllHistoryEvents(true);

  return <EventList title={''} list={eventsWithApprovedReports!} emptyMessage={'V historii nic zatím nemáme'} />;
}
