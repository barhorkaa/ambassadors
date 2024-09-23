'use client';

import { ErrorProps } from '@/app/utils/error-props-interface';

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="page flex flex-col gap-6 items-center">
      <h1>Nepodařilo se seznam manažerů</h1>
      <button className="btn" onClick={() => reset()}>
        Zkusit znovu
      </button>
    </div>
  );
}
