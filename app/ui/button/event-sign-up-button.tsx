"use client"

import {useState} from "react";
import {createEventSignUp} from "@/app/lib/actions/event";

export default function EventSignUpButton( { props } : { props: { event_id: string, user_id: string }}) {
  // const isSignedOnEvent =
  const [disabled, setDisabled] = useState(false);

  function changeState() {
    setDisabled(!disabled);
  }

  return (
    <button onClick={async () => {
      await createEventSignUp(props.event_id, props.user_id)
      changeState();
    }}
    disabled={disabled}
    >
      Přihlásit se
    </button>
  )
}