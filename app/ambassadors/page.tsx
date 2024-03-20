import {getAllAmbassadors, getAllManagers} from "@/database/repository/user";
import React from "react";
import {UserModel} from "@/app/models/userModel";
import UserCard from "@/app/ui/user/user-card";
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

  return(
    <div>
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