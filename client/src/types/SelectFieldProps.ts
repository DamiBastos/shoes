export interface SelectFieldProps {
    label: string;
    options: string[]; // Cambiado de [string] a string[] para representar un array de strings
    name: string;
    id: string;
    value: string | number;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Cambiado de HTMLInputElement a HTMLSelectElement
  }