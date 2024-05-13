import { getSignUpsForEvent } from '@/database/repository/event-user';
import { CheckIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export async function EventUserDetail({ event_id }: { event_id: string }) {
  let signedUpForEvent = await getSignUpsForEvent(event_id, false);
  let substitutesForEvent = await getSignUpsForEvent(event_id, true);

  return (
    <div className="flex flex-col">
      <UserList title={'Přihlášení'} userList={signedUpForEvent} emptyMessage={'Na akci není přihlášen nikto'} />
      <UserList title={'Záskok'} userList={substitutesForEvent} emptyMessage={''} />
    </div>
  );
}

function UserList({
  title,
  userList,
  emptyMessage,
}: {
  title: string;
  userList: { user_id: string; user_name: string | null; approved: boolean }[];
  emptyMessage: string;
}) {
  return (
    <div>
      {userList.length !== 0 ? (
        <div>
          <h3 className="card-title">{title}</h3>
          {userList.map((user) => (
            <div className="flex flex-row gap-4 items-baseline">
              {user.approved ? <CheckIcon className="h-6" /> : <></>}
              <Link href={`/ambassadors/${user.user_id}`} key={user.user_id} className="flex flex-row gap-4 py-2">
                <UserIcon className="h-6" />
                <p className="text-lg">{user.user_name}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>{emptyMessage}</div>
      )}
    </div>
  );
}
