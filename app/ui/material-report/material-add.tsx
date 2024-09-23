import MaterialReportSelect from '@/app/ui/material-report/material-report-select';
import { MaterialMinModel } from '@/models/material-models';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, useState } from 'react';

interface MaterialAddProps {
  materials: MaterialMinModel[];
}

// source: https://www.freecodecamp.org/news/build-dynamic-forms-in-react/
// source: https://borstch.com/snippet/dynamic-form-fields-with-nextjs
export default function MaterialAdd({ materials }: MaterialAddProps) {
  const [inputs, setInputs] = useState([{ amount: '' }]);

  const handleAddClick = () => {
    setInputs([...inputs, { amount: '' }]);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...inputs];
    list.splice(index, 1);
    setInputs(list);
  };

  const handleInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const list = [...inputs];
    list[index] = { amount: event.target.value };
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
          <div className="col-span-5">
            <MaterialReportSelect materials={materials} selectedMaterial={undefined} />
          </div>
          <div className="form-control col-span-2">
            <label className="label" htmlFor="numerOfAttendees">
              <span className="label-text">Počet kusů</span>
            </label>
            <input
              id="amount"
              type="number"
              onChange={(event) => handleInputChange(i, event)}
              name="amount"
              value={input.amount}
              placeholder="Počet kusů"
              required
            />
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
