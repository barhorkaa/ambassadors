import {getAllAmbassadors, getAllManagers} from "@/database/repository/user";
import React from "react";
import {UserModel} from "@/models/userModel";
import UserTable from "@/app/ui/user/user-table";

export default async function Ambassadors() {
  let allAmbassadors: UserModel[] | undefined = await getAllAmbassadors();
  if (allAmbassadors === undefined) {
    allAmbassadors = [];
  }

  let allManagers: UserModel[] | undefined = await getAllManagers();
  if (allManagers === undefined) {
    allManagers = [];
  }

  let unapprovedAmbassadors: UserModel[] | undefined = await getAllManagers();
  if (unapprovedAmbassadors === undefined) {
    unapprovedAmbassadors = [];
  }


  return(
    <div>
      <div className="font-bold text-lg p-2">
        Nepotvrzení uživatelé
      </div>
      <UserTable users={unapprovedAmbassadors}/>
      <div className="font-bold text-lg p-2">
        Všichni manažeři
      </div>
      <UserTable users={allManagers}/>
      {/*<div className="flex space-x-4 space-y-4">*/}
      {/*  {allManagers.map((manager) => (<UserCard user={manager}/>) )}*/}
      {/*</div>*/}
      <hr/>
      <div className="font-bold text-lg p-2">
        Všichni ambasadoři
      </div>
      <UserTable users={allAmbassadors}/>
      {/*<div className="flex flex-wrap md:justify-between   space-y-4">*/}
      {/*  {allAmbassadors.map((ambassador) => (<UserCard user={ambassador}/>) )}*/}
      {/*</div>*/}
    </div>
  )
}