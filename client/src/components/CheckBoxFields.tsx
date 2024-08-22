import React from 'react';
import { CheckboxFieldProps} from '../types/CheckBoxFieldProps';

const CheckboxField: React.FC<CheckboxFieldProps> = ({
    id,
  label,
  options,
  name,
  onChange
}) => {
//   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const optionValue = event.target.value;
//     const isChecked = event.target.checked;

//     let newValue;
//     if (isChecked) {
//       newValue = [...(value as string[]), optionValue];
//     } else {
//       newValue = (value as string[]).filter((val) => val !== optionValue);
//     }

//     onChange({ target: { name, value: newValue } } as React.ChangeEvent<HTMLSelectElement>);
//   };

  return (
    <div className="d-flex flex-column" >
      <label className='mb-3'>{label}</label>
      <div className="d-flex  gap-1 flex-wrap overflow-auto" style={{ maxWidth: '420px' }}>
      {options.map((option:any) => (
      <label key={option.value} className="mb-1 text-truncate">
                  {option.label}
          <input
            id={id}
            type="checkbox"
            name={name}
            value={option.value}
            onChange={onChange}
          />
        </label>
      ))}
      </div>
    </div>
  );
};

export default CheckboxField;
