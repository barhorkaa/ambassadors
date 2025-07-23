'use client';

import { useState } from 'react';

interface ToggleButtonProps {
  id: string;
  name: string;
  defaultState: boolean;
  title: string;
  detail?: string;
}

export function ToggleButton({ id, name, defaultState, title, detail }: ToggleButtonProps) {
  const [isChecked, setIsChecked] = useState(defaultState);

  function changeState() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="form-control px-2 py-1">
      <label className="label cursor-pointer flex justify-between">
        <span className="label-text text-lg font-semibold text-black">{title}</span>
        <input
          id={id}
          name={name}
          type="checkbox"
          className="toggle"
          onClick={changeState}
          defaultChecked={isChecked}
        />
      </label>
      <div className="text-sm  px-2">{detail}</div>
    </div>
  );
}
