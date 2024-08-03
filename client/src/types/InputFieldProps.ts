export interface InputFieldProps {
  label?: string;
  type: string;
  name: string;
  id: string;
  value: string | number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}