'use client';

import { createSignUpAction } from '@/app/lib/actions/event-user';
import { useState } from 'react';

export default function EventSignUpButton(props: { disabled: boolean; event_id: string; user_id: string }) {
  const [disabled, setDisabled] = useState(props.disabled);

  function changeState() {
    setDisabled(!disabled);
  }

  return (
    <button
      onClick={async () => {
        await createSignUpAction(props.event_id, props.user_id);
        changeState();
      }}
      disabled={disabled}
    >
      Přihlásit se
    </button>
  );
}
