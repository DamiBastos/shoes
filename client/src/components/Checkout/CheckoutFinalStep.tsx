import React, { useState } from "react";

import ErrorMessage from "../ErrorMessage";

interface CheckoutFinalStepProps {
  prevStep: () => void;
  nextStep: () => void;
  updateFormData: (data: object) => void;
}

const CheckoutFinalStep: React.FC<CheckoutFinalStepProps> = ({
  prevStep,
  nextStep,
  updateFormData,
}) => {
  const [type_payment, setType_payment] = useState<string>("");
  const [errors, setErrors] = useState<string | null>(null);

  const handleNextStep = () => {
    // Actualizar los datos en formData
    updateFormData({ type_payment });
    // Ir al siguiente paso
    
 if (!type_payment) {
  setErrors("Por favor, complete todos los campos obligatorios.");
  return;
}
    nextStep();
  };

  const handleSelectTipoPago = (tipo: string) => {
    setType_payment(tipo);
  };

  return (
    <div className="">
      <h6>MEDIO DE PAGO</h6>
      <button
        className="btn d-flex justify-content-start align-items-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTransferencia"
        aria-expanded="false"
        aria-controls="collapseTransferencia"
        onClick={() => handleSelectTipoPago("Transferencia Bancaria")}
      >
        <i className="bi bi-bank2 text-black"></i>
        <p className="mb-0 ms-2">Transferencia Bancaria</p>
      </button>
      <div className="collapse" id="collapseTransferencia">
        <div className="d-flex justify-content-start align-items-start">
          <div>{"Terminada la compra se enviarán los datos para poder abonar su compra."}</div>
        </div>
      </div>
      <ErrorMessage message={errors} />


      <div className="d-flex justify-content-start align-items-center"></div>
      <button className="m-1" onClick={prevStep}>Anterior</button>
      <button className="m-1" onClick={handleNextStep}>Confirmar</button>
    </div>
  );
};

export default CheckoutFinalStep;
