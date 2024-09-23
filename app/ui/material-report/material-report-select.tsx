'use client';

import { MaterialMinModel } from '@/models/material-models';
import { useState } from 'react';

interface MaterialReportSelectProps {
  materials: MaterialMinModel[];
  selectedMaterial: string | undefined;
}

export default function MaterialReportSelect({ materials, selectedMaterial }: MaterialReportSelectProps) {
  const [material, setMaterial] = useState(selectedMaterial);

  const handleMaterialChange = (event: any) => {
    setMaterial(event.target.value);
  };

  return (
    <div className="form-control">
      <div className="form-control col-span-2">
        <label className="label" htmlFor="material">
          <span className="label-text">Materiál</span>
        </label>
        <select
          className="select select-bordered w-full max-w-xs"
          id="eventType"
          name="materialId"
          value={material}
          onChange={handleMaterialChange}
        >
          <option>Vyberte materiál</option>
          {materials.map((material) => (
            <option key={material.id} value={material.id}>
              {material.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
