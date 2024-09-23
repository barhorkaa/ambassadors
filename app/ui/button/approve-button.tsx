'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface ApproveButtonProps {
  fun: any;
  id: string;
}

export default function ApproveButton({ fun, id }: ApproveButtonProps) {
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
