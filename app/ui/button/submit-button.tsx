'use client';

import { useFormState, useFormStatus } from 'react-dom';

export default function SubmitButton({ title, modalId, fun }: { title: string; modalId?: string; fun?: any }) {
  const { pending } = useFormStatus();

  const [state, dispatch] = useFormState(fun, {
    success: undefined,
    errors: [],
    generic: undefined,
  });

  return (
    <button
      className="btn mt-4"
      aria-disabled={pending}
      onClick={() => {
        if (document && modalId && state.success) {
          (document.getElementById(modalId) as HTMLFormElement).close();
        }
      }}
    >
      {pending ? 'Odesílám ... ' : title}
    </button>
  );
}
