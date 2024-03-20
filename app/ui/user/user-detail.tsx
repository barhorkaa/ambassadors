import {UserModel} from "@/models/userModel";

export default function UserDetail(params: {user: UserModel}) {
  return(
    <div className="flex flex-col ">
      <UserDetailRow label={"Jméno"} value={params.user.name}/>
      <hr/>
      <UserDetailRow label={"E-mail"} value={params.user.email}/>
      <hr/>
      <UserDetailRow label={"Tel. číslo"} value={params.user.phone_number}/>
      <hr/>
      <UserDetailRow label={"UČO"} value={params.user.uco}/>
      <hr/>
      <UserDetailRow label={"Role"} value={params.user.role}/>
      <hr/>
      <UserDetailRow label={"Potvrzen"} value={params.user.approved ? "Ano" : "Ne"}/>
      <hr/>
      <UserDetailRow label={"Registrovaný"} value={params.user.created_at.toLocaleString()}/>
      <hr/>
      <UserDetailRow label={"Aktivní"} value={params.user.deleted_at ? "Ne" : "Ano"}/>
      <hr/>
    </div>
  )
}

function UserDetailRow(params: {label: string, value: string | number}) {
  return (
    <div className="p-2 flex flex-row justify-between">
      <h2 className="font-extrabold font-lg">
        {params.label}
      </h2>
      <h3 className="ml-16">
        {params.value}
      </h3>
    </div>
  )
}