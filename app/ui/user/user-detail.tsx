import {UserModel} from "@/app/models/userModel";

export default function UserDetail(params: {user: UserModel}) {
  return(
    <div className="flex flex-col ">
      <div className="p-2 flex flex-row justify-between bg-amber-100 rounded-md">
        <h2 className="font-bold font-lg">
          Jméno
        </h2>
        <h3 className="ml-16">
          {params.user.name}
        </h3>
      </div>
      <div className="p-2 flex flex-row justify-between">
        <h2 className="font-bold font-lg">
          E-mail
        </h2>
        <h3 className="ml-16">
          {params.user.email}
        </h3>
      </div>
      <div className="p-2 flex flex-row justify-between bg-amber-100 rounded-md">
        <h2 className="font-bold font-lg">
          Tel. číslo
        </h2>
        <h3 className="ml-16">
          {params.user.phone_number}
        </h3>
      </div>
      <div className="p-2 flex flex-row justify-between">
        <h2 className="font-bold font-lg">
          UČO
        </h2>
        <h3 className="ml-16">
          {params.user.uco}
        </h3>
      </div>
      <div className="p-2 flex flex-row justify-between bg-amber-100 rounded-md">
        <h2 className="font-bold font-lg">
          Role
        </h2>
        <h3 className="ml-16">
          {params.user.role == "ambassador" ? <div>Ambasador</div> : <div>Manažér</div>}
        </h3>
      </div>
      <div className="p-2 flex flex-row justify-between">
        <h2 className="font-bold font-lg">
          Potvrzen
        </h2>
        <h3 className="ml-16">
          {params.user.approved ? <div>Ano</div> : <div>Ne</div>}
        </h3>
      </div>
      <div className="p-2 flex flex-row justify-between bg-amber-100 rounded-md">
        <h2 className="font-bold font-lg">
          Registrovaný
        </h2>
        <h3 className="ml-16">
          {params.user.created_at.toLocaleString()}
        </h3>
      </div>
      <div className="p-2 flex flex-row justify-between">
        <h2 className="font-bold font-lg">
          Aktivní
        </h2>
        <h3 className="ml-16">
          {params.user.deleted_at ? <div>Ne</div> : <div>Ano</div>}
        </h3>
      </div>
    </div>
  )

}