"use client"

import {useState} from "react";

export default function ApproveButton() {
  const [show, setShow] = useState(true);

  function changeState() {
    setShow(!show);
  }

  return(
    <button onClick={changeState} type="submit" className="btn btn-circle btn-outline">
      {show &&
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4.5 12.75 6 6 9-13.5"/>
        </svg>
      }
    </button>
  )
}