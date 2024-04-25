'use client';

import { createSignUpAction, deleteSignUpAction } from '@/app/lib/actions/event-user';
import { ArrowLeftStartOnRectangleIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function EventSignUpButton(props: { isSignedOnEvent: boolean; event_id: string; user_id: string }) {
  const [signedOn, setSignedOn] = useState(props.isSignedOnEvent);

  function changeState() {
    setSignedOn(!signedOn);
  }

  return (
    <button
      className="btn"
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
      {signedOn ? (
        <>
          <ArrowLeftStartOnRectangleIcon className="h-5" />
          <p className="hidden md:block">Odhlásit se</p>
        </>
      ) : (
        <>
          <ArrowRightEndOnRectangleIcon className="h-5" />
          <p className="hidden md:block">Přihlásit se</p>
        </>
      )}
    </button>
  );
}
