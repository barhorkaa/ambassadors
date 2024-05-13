export default function FormControl({
  title,
  id,
  type,
  defaultValue,
  inputType,
  placeholder,
}: {
  title: string;
  id: string;
  type: string;
  defaultValue: string | number | undefined;
  inputType: 'area' | 'input';
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
