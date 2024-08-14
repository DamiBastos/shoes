export interface SelectFieldProps {
  label: string;
  name: string;
  id: string;
  value?: string | number; 
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  multiple?: boolean;
}

interface Option {
  label: string;
  value: string | number;
}