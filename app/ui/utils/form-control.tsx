import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';

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

interface FormControlLayoutProps {
  title: string;
  errorMessage?: string;
  children: React.ReactNode;
}

interface FormControlEditorProps {
  title: string;
  initialContent?: string;
  name?: string;
  errorMessage?: string;
}

const FormControlLayout = ({ title, errorMessage, children }: FormControlLayoutProps) => (
  <fieldset className="fieldset">
    <label className="label text-sm" htmlFor={title}>
      {title}
    </label>
    {children}
    {errorMessage && <label className="label pb-0 text-error">{errorMessage}</label>}
  </fieldset>
);

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
    <FormControlLayout title={title} errorMessage={errorMessage}>
      <Tag
        id={id}
        defaultValue={defaultValue}
        type={type}
        name={id}
        placeholder={placeholder ?? title}
        required={required}
        className={`${errorMessage ? 'input-error' : ''}`}
      />
    </FormControlLayout>
  );
}

export const FormControlEditor = ({ title, initialContent, name, errorMessage }: FormControlEditorProps) => (
  <FormControlLayout title={title} errorMessage={errorMessage}>
    <SimpleEditor initialContent={initialContent} name={name} />
  </FormControlLayout>
);
