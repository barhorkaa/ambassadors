'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="page flex flex-col gap-6">
      <h2>Nepodařilo se načíst akce</h2>
      <button className="btn" onClick={() => reset()}>
        Zkusit znovu
      </button>
    </div>
  );
}