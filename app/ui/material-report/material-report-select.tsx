'use client';

import { MaterialMinModel } from '@/models/material-models';
import { useState } from 'react';

export default function MaterialReportSelect(props: {
  materials: MaterialMinModel[];
  selectedEvent: string | undefined;
}) {
  const [material, setMaterial] = useState(props.selectedEvent);

  const handleMaterialChange = (event: any) => {
    setMaterial(event.target.value);
  };

  return (
    <div className="form-control grid grid-rows-1 grid-cols-3">
      <div className="form-control col-span-2">
        <label className="label" htmlFor="material">
          <span className="label-text">Typ akce</span>
        </label>
        <select
          className="select select-bordered w-full max-w-xs"
          id="eventType"
          name="materialId"
          value={material}
          onChange={handleMaterialChange}
        >
          <option>Vyberte materiál</option>
          {props.materials.map((material) => (
            <option key={material.id} value={material.id}>
              {material.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label className="label" htmlFor="numerOfAttendees">
          <span className="label-text">Počet kusů</span>
        </label>
        <input
          id="amount"
          type="number"
          name="amount"
          placeholder="Počet kusů"
          className="input input-bordered"
          required
        />
      </div>
    </div>
  );
}
