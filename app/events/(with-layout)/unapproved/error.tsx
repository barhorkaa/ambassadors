'use client';

import { ErrorProps } from '@/app/utils/interface-props';

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="page flex flex-col gap-6">
      <h2>Nepodařilo se načíst nepotvrzené akce</h2>
      <button className="btn" onClick={() => reset()}>
        Zkusit znovu
      </button>
    </div>
  );
}
