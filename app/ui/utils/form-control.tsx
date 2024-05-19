import SubmitButton from '@/app/ui/button/submit-button';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
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

export function FormLayout({
  action,
  state,
  modalId,
  children,
}: {
  action: any;
  state: any;
  modalId: string;
  children: React.ReactNode;
}) {
  return (
    <form action={action} className="card-body">
      {children}
      <SubmitButton title={'Odeslat'} modalId={modalId} fun={action} />
      {state.generic && (
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-500">{state.generic}</p>
        </div>
      )}
    </form>
  );
}
