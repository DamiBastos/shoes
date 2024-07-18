// src/components/ErrorMessage.tsx
import React from "react";

interface ErrorMessageProps {
  message: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return <div className="alert alert-danger">{message}</div>;
};

export default ErrorMessage;
