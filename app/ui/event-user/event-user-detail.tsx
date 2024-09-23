import { EventUserList } from '@/app/ui/utils/content-list';
import { getSignUpsForEvent } from '@/database/repository/event-user';

interface EventUserDetailProps {
  event_id: string;
}

export async function EventUserDetail({ event_id }: EventUserDetailProps) {
  const signedUpForEvent = await getSignUpsForEvent(event_id, false);
  const substitutesForEvent = await getSignUpsForEvent(event_id, true);

  return (
    <div className="flex flex-col">
      <EventUserList title={'Přihlášení'} userList={signedUpForEvent} emptyMessage={'Na akci není přihlášen nikto'} />
      <EventUserList title={'Záskok'} userList={substitutesForEvent} emptyMessage={''} />
    </div>
  );
}
