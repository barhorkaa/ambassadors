export default function FormControl({
  title,
  id,
  type = 'text',
  defaultValue,
  inputType = 'input',
  placeholder,
}: {
  title: string;
  id: string;
  type?: 'text' | 'number';
  defaultValue?: string | number;
  inputType?: 'area' | 'input';
  placeholder?: string;
}) {
  return (
    <div className="form-control">
      <label className="label" htmlFor={title}>
        <span className="label-text">{title}</span>
      </label>
      {inputType === 'input' ? (
        <input id={id} defaultValue={defaultValue} type={type} name={id} placeholder={placeholder ?? title} required />
      ) : (
        <textarea id={id} defaultValue={defaultValue} name={id} placeholder={title} required />
      )}
    </div>
  );
}
