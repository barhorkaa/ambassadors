'use client';

import { createSignUpAction, deleteSignUpAction } from '@/app/lib/actions/event-user';
import { useState } from 'react';

export default function EventSignUpButton(props: { isSignedOnEvent: boolean; event_id: string; user_id: string }) {
  const [signedOn, setSignedOn] = useState(props.isSignedOnEvent);

  function changeState() {
    setSignedOn(!signedOn);
  }

  return (
    <button
      onClick={async () => {
        if (props.isSignedOnEvent) {
          await deleteSignUpAction(props.event_id, props.user_id);
        } else {
          await createSignUpAction(props.event_id, props.user_id);
        }
        changeState();
      }}
      disabled={false}
    >
      {signedOn ? 'Odhlásit se' : 'Přihlásit se'}
    </button>
  );
}
