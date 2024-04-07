import {DetailRow} from "@/app/ui/user/user-detail";
import {EventDetailModel} from "@/models/event/event-detail-model";
import {auth} from "@/auth";

export default async function EventDetail({event}: {event: EventDetailModel}) {
  const session = await auth();
  return (
    <div className="flex flex-col w-1/3">
      <DetailRow label={"Název akce"} value={event.name}/>
      <DetailRow label={"Datum"} value={event.date === null ? "Nezadáno" : event.date.toLocaleString()}/>
      <DetailRow label={"Potvrzeno"} value={event.approved ? "Ano" : "Ne"}/>
      {session?.user.role == "manager" &&
        (
          <div>
            <DetailRow label={"Vytvořeno"} value={event.created_at.toLocaleString()}/>
            <DetailRow label={"Upraveno"} value={event.updated_at.toLocaleString()}/>
            <DetailRow label={"Zmazáno"} value={event.deleted_at == null ? "Ne" : event.deleted_at.toLocaleString()}/>
          </div>
        )
      }
    </div>
  )
}