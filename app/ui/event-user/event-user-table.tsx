import { approveSignUpAction } from '@/app/lib/actions/event-user';
import ApproveButton from '@/app/ui/button/approve-button';
import EventSignUpButton from '@/app/ui/button/event-sign-up-button';
import { EventUserBasicModel } from '@/models/event-user-models';
import Link from 'next/link';

interface EventUserTableProps {
  eventUsers: EventUserBasicModel[];
}

export default async function EventUserTable({ eventUsers }: EventUserTableProps) {
  return (
    <div className="overflow-x-auto data-display p-4">
      <table className="table table-fixed">
        <thead>
          <tr>
            <th>Uživatel</th>
            <th>Akce</th>
            <th>Náhradník</th>
            <th>Potvrdit</th>
            <th>Vymazat</th>
          </tr>
        </thead>
        <tbody>
          {eventUsers.map((eventUser) => (
            <tr className="hover" key={eventUser.id}>
              <td>
                <Link href={`/ambassadors/${eventUser.userId}`} rel="noopener noreferrer" target="_blank">
                  {eventUser.userName}
                </Link>
              </td>
              <td>
                <Link href={`/events/${eventUser.eventId}`} rel="noopener noreferrer" target="_blank">
                  {eventUser.eventName}
                </Link>
              </td>
              <td>
                <SubstituteBadge isSubstitute={eventUser.substitute} />
              </td>
              <td>{!eventUser.approved && <ApproveButton fun={approveSignUpAction} id={eventUser.id!} />}</td>
              <td>
                {<EventSignUpButton isSignedOnEvent={true} event_id={eventUser.eventId!} user_id={eventUser.userId!} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const SubstituteBadge = ({ isSubstitute }: { isSubstitute: boolean }) =>
  isSubstitute ? <div className="badge bg-fi-100">Náhradník</div> : <div></div>;
