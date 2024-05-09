'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton({ title, modalId }: { title: string; modalId?: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="btn mt-4"
      aria-disabled={pending}
      onClick={() => {
        if (document && modalId) {
          (document.getElementById(modalId) as HTMLFormElement).close();
        }
      }}
    >
      {title}
    </button>
  );
}
