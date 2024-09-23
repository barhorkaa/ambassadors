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
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text text-lg font-semibold">{title}</span>
        <input
          id={id}
          name={name}
          type="checkbox"
          className="toggle"
          onClick={changeState}
          defaultChecked={isChecked}
        />
      </label>
      <div className="text-sm text-base-300 px-2">{detail}</div>
    </div>
  );
}
