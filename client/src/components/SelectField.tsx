import React from 'react';
import { SelectFieldProps } from '../types/SelectFieldProps';

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  name,
  id,
  multiple = false,
  value,
  onChange,
}) => {
  return (
    <div className="d-flex flex-column">
        <label className='mb-3' htmlFor={id}>{label}</label>
      <select
      className='bg-light mb-3 text-black'
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        multiple={multiple}
      >
        {options.map((option) => (
          <option className='' key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
