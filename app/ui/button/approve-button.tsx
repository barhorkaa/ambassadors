'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function ApproveButton({ fun, id }: { fun: any; id: string }) {
  const [show, setShow] = useState(true);

  function changeState() {
    setShow(!show);
  }

  return (
    <>
      {show && (
        <button
          className="btn"
          onClick={async () => {
            await fun(id);
            changeState();
          }}
        >
          <CheckIcon className="h-5" />
          <p className="hidden md:block">Potvrdit</p>
        </button>
      )}
    </>
  );
}
