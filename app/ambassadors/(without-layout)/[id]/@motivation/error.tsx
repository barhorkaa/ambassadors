'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div>
      <h2>Uživatel nemá zatím vyplněný motivační formulář</h2>
    </div>
  );
}
