export interface InputFieldProps {
  label?: string;
  type: string;
  name: string;
  id: string;
  value: string | number | undefined;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}