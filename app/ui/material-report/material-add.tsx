import MaterialReportSelect from '@/app/ui/material-report/material-report-select';
import { MaterialMinModel } from '@/models/material-models';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function MaterialAdd({ materials }: { materials: MaterialMinModel[] }) {
  const [inputs, setInputs] = useState([{ materialId: '', amount: 0 }]);

  const handleAddClick = () => {
    setInputs([...inputs, { materialId: '', amount: 0 }]);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...inputs];
    list.splice(index, 1);
    setInputs(list);
  };

  return (
    <div className="form-control">
      <label className="label" htmlFor="materials">
        <span className="label-text">Materiály</span>
        <button type="button" className="btn" onClick={handleAddClick}>
          <PlusIcon className="h-5" />
        </button>
      </label>
      {inputs.map((input, i) => (
        <div key={i} className="grid grid-cols-8 items-end gap-2">
          <div className="col-span-7">
            <MaterialReportSelect materials={materials} selectedEvent={undefined} />
          </div>
          {inputs.length !== 1 && (
            <button
              type="button"
              className="btn btn-circle btn-outline bg-base-100"
              onClick={() => handleRemoveClick(i)}
            >
              <MinusIcon className="h-5" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
