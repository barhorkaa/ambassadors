import { ZodIssue } from 'zod';

export default function FormControl({
  title,
  id,
  errorMessage,
  type = 'text',
  defaultValue,
  inputType = 'input',
  placeholder,
  required = true,
}: {
  title: string;
  id: string;
  errorMessage?: string;
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
          className={`${errorMessage ? 'input-error' : ''}`}
        />
      ) : (
        <textarea
          id={id}
          defaultValue={defaultValue}
          name={id}
          placeholder={placeholder ?? title}
          required={required}
          className={`${errorMessage ? 'input-error' : ''}`}
        />
      )}
      {errorMessage && (
        <div className="label pb-0">
          <span className="label-text-alt text-error">{errorMessage}</span>
        </div>
      )}
    </div>
  );
}

export const findErrors = (fieldName: string, errors: ZodIssue[]) => {
  return errors
    .filter((item) => {
      return item.path.includes(fieldName);
    })
    .map((item) => item.message);
};
