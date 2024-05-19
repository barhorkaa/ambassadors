'use client';

import { createSignUpAction } from '@/app/lib/actions/event-user';
import DeleteSignUpModal from '@/app/ui/modals/delete/delete-signup-modal';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function EventSignUpButton({
  isSignedOnEvent,
  event_id,
  user_id,
}: {
  isSignedOnEvent: boolean;
  event_id: string;
  user_id: string;
}) {
  const [signedOn, setSignedOn] = useState(isSignedOnEvent);

  function changeState() {
    setSignedOn(!signedOn);
  }

  return (
    <div>
      {signedOn ? (
        <DeleteSignUpModal event_id={event_id} user_id={user_id} />
      ) : (
        <button
          className="btn"
          onClick={async () => {
            try {
              await createSignUpAction(event_id, user_id);
              changeState();
            } catch (e) {
              return;
            }
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
