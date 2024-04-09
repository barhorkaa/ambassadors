import {getAllUnapprovedSignUps} from "@/database/repository/event-user";
import EventUserTable from "@/app/ui/event/event-user-table";
import {EventUserBasicModel} from "@/models/event-user/event-user-basic-model";

export default async function EventSignUps() {
  let allSignUps: EventUserBasicModel[] | undefined = await getAllUnapprovedSignUps();
  if (allSignUps === undefined) {
    allSignUps = []
  }

  console.log("all sign ups are: ", allSignUps)
  return (
    <div>
      <h1>Přihlášení na akce</h1>
      <EventUserTable eventUsers={allSignUps}/>
    </div>
  )
}