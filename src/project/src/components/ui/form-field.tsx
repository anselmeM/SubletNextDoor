import { Label } from './label';
import { Input, InputProps } from './input';
import { Textarea, TextareaProps } from './textarea';

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  type?: 'input' | 'textarea';
  inputProps?: InputProps;
  textareaProps?: TextareaProps;
}

export function FormField({
  label,
  required,
  error,
  helperText,
  type = 'input',
  inputProps,
  textareaProps,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label required={required}>{label}</Label>
      {type === 'input' ? (
        <Input error={error} {...inputProps} />
      ) : (
        <Textarea error={error} {...textareaProps} />
      )}
      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}