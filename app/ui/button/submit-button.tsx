'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton(props: { title: string }) {
  const { pending } = useFormStatus();

  return (
    <button className="mt-4 w-full bg-amber-200 p-2" aria-disabled={pending}>
      Odeslat
      {props.title}
    </button>
  );
}
