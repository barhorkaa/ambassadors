import MaterialReportSelect from '@/app/ui/material-report/material-report-select';
import { MaterialMinModel } from '@/models/material-models';
import { useState } from 'react';

function DynamicForm({ materials }: { materials: MaterialMinModel[] }) {
  const [inputs, setInputs] = useState([{ materialId: '', amount: 0 }]);

  console.log('inpusts are: ', inputs);

  const handleAddClick = () => {
    setInputs([...inputs, { materialId: '', amount: 0 }]);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...inputs];
    list.splice(index, 1);
    setInputs(list);
  };

  return (
    <div>
      <div className="form-control">
        <label className="label" htmlFor="numerOfAttendees">
          <span className="label-text">materiály</span>
        </label>
        {inputs.map((input, i) => (
          <div key={i}>
            <MaterialReportSelect materials={materials} selectedEvent={undefined} />
            {inputs.length !== 1 && <button onClick={() => handleRemoveClick(i)}>Remove</button>}
            {inputs.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicForm;
