"use client"

import {useState} from "react";
import {approveUserById} from "@/app/lib/actions/users";
import {CheckIcon} from "@heroicons/react/24/outline";


export default function ApproveButton(props : {fun: any, id: string}) {
  const [show, setShow] = useState(true);

  function changeState() {
    setShow(!show);
  }

  return(
    <>
      {show &&
        <button onClick={async () => {
          await props.fun(props.id);
          changeState()
        }}>
          {/*<CheckIcon className="h-5 w-5"/>*/}
            Potvrdit
        </button>
      }
    </>

  )
}