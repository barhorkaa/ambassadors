import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';

interface FormControlLayoutProps {
  title: string;
  errorMessage?: string;
  children: React.ReactNode;
}

interface FormControlBaseProps {
  title: string;
  id: string;
  placeholder?: string;
  errorMessage?: string;
  required?: boolean;
}

interface FormControlEditorProps {
  initialContent?: string;
}

interface FormControlInputProps {
  type?: 'text' | 'number' | 'password' | 'date' | 'email';
  defaultValue?: string | number;
  inputType?: 'textarea' | 'input';
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
}: FormControlBaseProps & FormControlInputProps) {
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

export const FormControlEditor = ({
  title,
  initialContent,
  id,
  errorMessage,
  placeholder,
  required = false,
}: FormControlBaseProps & FormControlEditorProps) => (
  <FormControlLayout title={title} errorMessage={errorMessage}>
    <SimpleEditor
      initialContent={initialContent}
      name={id}
      placeholder={placeholder}
      required={required}
      errorMessage={errorMessage}
    />
  </FormControlLayout>
);
