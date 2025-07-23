'use client';

import { useState } from 'react';

interface UserRoleSelectProps {
  currentRole: 'ambassador' | 'manager';
}

export default function UserRoleSelect({ currentRole }: UserRoleSelectProps) {
  const [userRole, setUserRole] = useState(currentRole);

  const handleEventTypeChange = (event: any) => {
    setUserRole(event.target.value);
  };

  return (
    <div className="form-control">
      <label className="label" htmlFor="role">
        <span className="label-text">Role uživatele</span>
      </label>
      <select
        className="select select-bordered w-full"
        id="role"
        name="role"
        value={userRole}
        onChange={handleEventTypeChange}
      >
        <option key={'manager'} value={'manager'}>
          Manažér
        </option>
        <option key={'ambassador'} value={'ambassador'}>
          Ambasador
        </option>
      </select>
    </div>
  );
}
