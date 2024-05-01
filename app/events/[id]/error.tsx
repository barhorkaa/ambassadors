'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="page flex flex-col gap-6 items-center">
      <h1>Nepodařilo se načíst detail akce</h1>
      <button className="btn" onClick={() => reset()}>
        Zkusit znovu
      </button>
    </div>
  );
}
