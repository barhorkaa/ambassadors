export default function FormControl({
  title,
  id,
  type = 'text',
  defaultValue,
  inputType = 'input',
  placeholder,
  required = true,
}: {
  title: string;
  id: string;
  type?: 'text' | 'number' | 'password' | 'date' | 'email';
  defaultValue?: string | number;
  inputType?: 'area' | 'input';
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="form-control">
      <label className="label" htmlFor={title}>
        <span className="label-text">{title}</span>
      </label>
      {inputType === 'input' ? (
        <input
          id={id}
          defaultValue={defaultValue}
          type={type}
          name={id}
          placeholder={placeholder ?? title}
          required={required}
        />
      ) : (
        <textarea
          id={id}
          defaultValue={defaultValue}
          name={id}
          placeholder={placeholder ?? title}
          required={required}
        />
      )}
    </div>
  );
}
