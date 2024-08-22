// CheckboxFieldProps.ts

    interface Option {
    label: string;
    value: string;
  }
  
  export interface CheckboxFieldProps {
    id:string;
    label: string;
    options: Option[];
    name: string;
    value: string[]; // Es un array porque puede haber múltiples selecciones
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  