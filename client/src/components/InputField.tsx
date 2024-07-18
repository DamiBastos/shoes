// src/components/InputField.tsx
import React from "react";
import { InputFieldProps } from "../types";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  id,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="mb-3 w-100">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div className="input-group">
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
