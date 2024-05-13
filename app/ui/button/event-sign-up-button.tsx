'use client';

import { createSignUpAction } from '@/app/lib/actions/event-user';
import DeleteSignUpModal from '@/app/ui/modals/delete/delete-signup-modal';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function EventSignUpButton(props: { isSignedOnEvent: boolean; event_id: string; user_id: string }) {
  const [signedOn, setSignedOn] = useState(props.isSignedOnEvent);

  function changeState() {
    setSignedOn(!signedOn);
  }

  return (
    <div>
      {signedOn ? (
        <DeleteSignUpModal event_id={props.event_id} user_id={props.user_id} />
      ) : (
        <button
          className="btn"
          onClick={async () => {
            await createSignUpAction(props.event_id, props.user_id);
            changeState();
          }}
          disabled={false}
        >
          <ArrowRightEndOnRectangleIcon className="h-5" />
          <p className="hidden md:block">Přihlásit se</p>
        </button>
      )}
    </div>
  );
}
