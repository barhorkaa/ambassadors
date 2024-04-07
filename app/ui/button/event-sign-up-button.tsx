"use client"

import {useState} from "react";
import {createEventSignUp} from "@/app/lib/actions/event";

export default function EventSignUpButton( props: { disabled: boolean, event_id: string, user_id: string }) {
  const [disabled, setDisabled] = useState(props.disabled);

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