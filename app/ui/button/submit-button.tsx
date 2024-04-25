'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton(props: { title: string }) {
  const { pending } = useFormStatus();

  return (
    <button className="btn mt-4" aria-disabled={pending}>
      {props.title}
    </button>
  );
}
