import {UserModel} from "@/app/models/userModel";
import ApproveUserModal from "@/app/ui/modals/approve-user-modal";
import {approveUser} from "@/database/repository/user";
import {approveUserWithId} from "@/app/lib/actions/users";
import ApproveButton from "@/app/ui/button/approve-button";
import {redirect} from "next/navigation";
import React from "react";
import Link from "next/link";

export default async function UserCard(props: {user: UserModel}) {
  console.log("user in card is", props.user)
  return (
    <Link
      href={`ambassadors/${props.user.id}`}
      // href={{
      // pathname: `/ambassadors/[id]`,
      // query: { id: props.user.id },
      // }}
    >
      {/*<button onClick={redirect(`ambassadors/${props.user.id}`)}>*/}
      <div className="card md:w-72 sm:w-full bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{props.user.name}</h2>
          <div className="flex flex-row justify-between">
            <div>
              <p>E-mail: {props.user.email}</p>
              <p>Tel. číslo: {props.user.phone_number}</p>
            </div>
            {!props.user.approved &&
                <div className="card-actions justify-end">
                    <form action={approveUserWithId}>
                        <input name="id" type="hidden" value={props.user.id} />
                        <ApproveButton/>
                      {/*<button type="submit" className="btn btn-circle btn-outline">*/}
                      {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4.5 12.75 6 6 9-13.5" /></svg>*/}
                      {/*</button>*/}
                    </form>
                </div>
            }
          </div>
        </div>
      </div>
    {/*</button>*/}
    </Link>
  )
}
