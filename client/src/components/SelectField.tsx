import React from 'react';
import { SelectFieldProps } from '../types/SelectFieldProps';

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  name,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        className="form-control"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option:string, index:number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
