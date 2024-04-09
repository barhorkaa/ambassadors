import {EventUserBasicModel} from "@/models/event-user/event-user-basic-model";
import ApproveButton from "@/app/ui/button/approve-button";
import {approveUserEvent} from "@/app/lib/actions/event-user";

export default async function EventUserTable({eventUsers} : {eventUsers: EventUserBasicModel[]}) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Uživatel</th>
            <th>Akce</th>
            <th>Potvrdit</th>
          </tr>
        </thead>
        <tbody>
        {eventUsers.map((eventUser) => (
          <tr className="hover" key={eventUser.id}>
            <td>{eventUser.user_name}</td>
            <td>{eventUser.event_name}</td>
            <td><ApproveButton fun={approveUserEvent} id={eventUser.id!}/></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}