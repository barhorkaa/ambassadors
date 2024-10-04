'use client';

import { sendAll } from '@/app/lib/actions/sendall';

export default function Page() {
  return (
    <div>
      <p>Hi</p>
      <button
        className="btn"
        onClick={async () => {
          await sendAll();
        }}
      >
        Send all
      </button>
    </div>
  );
}
