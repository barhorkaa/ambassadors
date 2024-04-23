import { getSignUpsForEvent } from '@/database/repository/event-user';
import { UserIcon } from '@heroicons/react/24/outline';

export async function EventUserDetail({ event_id }: { event_id: string }) {
  let signedUpForEvent = await getSignUpsForEvent(event_id);
  console.log('these users are signed for this event', signedUpForEvent);
  if (signedUpForEvent === undefined) {
    return <div>Na akci není přhlášen nikto</div>;
  }

  return (
    <div>
      <h2>
        Na akci {signedUpForEvent.length > 1 ? 'jsou' : 'je'} přihlášen{signedUpForEvent.length > 1 ? 'i' : ''}
      </h2>
      {signedUpForEvent.map((user_name) => (
        <div className="flex flex-row gap-4 pl-16 py-2">
          <UserIcon className="h-6" />
          <p className="text-lg">{user_name.user_name}</p>
        </div>
      ))}
    </div>
  );
}
