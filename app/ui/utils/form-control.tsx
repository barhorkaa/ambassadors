interface FormControlProps {
  title: string;
  id: string;
  errorMessage?: string;
  type?: 'text' | 'number' | 'password' | 'date' | 'email';
  defaultValue?: string | number;
  inputType?: 'textarea' | 'input';
  placeholder?: string;
  required?: boolean;
}

export default function FormControl({
  title,
  id,
  errorMessage,
  type = 'text',
  defaultValue,
  inputType = 'input',
  placeholder,
  required = true,
}: FormControlProps) {
  const Tag = inputType;

  return (
    <div className="form-control">
      <label className="label" htmlFor={title}>
        <span className="label-text">{title}</span>
      </label>
      <Tag
        id={id}
        defaultValue={defaultValue}
        type={type}
        name={id}
        placeholder={placeholder ?? title}
        required={required}
        className={`${errorMessage ? 'input-error' : ''}`}
      />
      {errorMessage && (
        <div className="label pb-0">
          <span className="label-text-alt text-error">{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
