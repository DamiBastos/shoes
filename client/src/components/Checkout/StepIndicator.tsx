import React from "react";

interface StepIndicatorProps {
  step: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ step }) => {
  return (
    <div className="step-indicator d-flex justify-content-center gap-2">
      <div className="">
        <i className="bi bi-bag-check text-success"></i>
        <p className="active  text-success">Carrito</p>
      </div>
      <div className={step === 1 ? "active" : ""}>
        <i
          className={
            step === 1
              ? "active bi bi-truck text-black"
              : step > 1
              ? "bi bi-truck text-success"
              : "bi bi-truck text-black"
          }
        ></i>
        <p
          className={
            step === 1
              ? "active text-black"
              : step > 1
              ? "text-success"
              : "text-tertiary"
          }
        >
          Entrega
        </p>
      </div>
      <div className={step === 2 ? "active" : ""}>
        <i
          className={
            step === 2
              ? "active bi bi-wallet2 text-black"
              : step === 5
              ? "bi bi-wallet2 text-success"
              : "bi bi-wallet2 text-secondary"
          }
        ></i>
        <p
          className={
            step === 2
              ? "active text-black"
              : step === 5
              ? "text-success"
              : "text-tertiary"
          }
        >
          Pago
        </p>
      </div>
    </div>
  );
};

export default StepIndicator;
