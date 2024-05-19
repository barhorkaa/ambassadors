import { EventUserList } from '@/app/ui/utils/content-list';
import { getSignUpsForEvent } from '@/database/repository/event-user';

export async function EventUserDetail({ event_id }: { event_id: string }) {
  let signedUpForEvent = await getSignUpsForEvent(event_id, false);
  let substitutesForEvent = await getSignUpsForEvent(event_id, true);

  return (
    <div className="flex flex-col">
      <EventUserList title={'Přihlášení'} userList={signedUpForEvent} emptyMessage={'Na akci není přihlášen nikto'} />
      <EventUserList title={'Záskok'} userList={substitutesForEvent} emptyMessage={''} />
    </div>
  );
}
