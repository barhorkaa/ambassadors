'use client';

import { useState } from 'react';

export default function UserRoleSelect({ currentRole }: { currentRole: 'ambassador' | 'manager' }) {
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
        className="select select-bordered w-full max-w-xs"
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
