// src/components/TextAreaField.tsx
import React from "react";
import { TextAreaFieldProps } from "../types";

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  id,
  value,
  onChange,
}) => (
  <div className="d-flex flex-column">
    <label htmlFor={id}>{label}</label>
    <textarea
      className="bg-light text-black"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextAreaField;
