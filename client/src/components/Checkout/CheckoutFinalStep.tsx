import React, { useState } from "react";

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

  const handleNextStep = () => {
    // Actualizar los datos en formData
    updateFormData({ type_payment });
    // Ir al siguiente paso
    nextStep();
  };

  const handleSelectTipoPago = (tipo: string) => {
    setType_payment(tipo);
  };

  return (
    <div className="">
      <h6>MEDIO DE PAGO</h6>

      {/* Opción 1: Tarjeta de débito/crédito */}
      <button
        className="btn d-flex justify-content-start align-items-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTarjeta"
        aria-expanded="false"
        aria-controls="collapseTarjeta"
        onClick={() => handleSelectTipoPago("Tarjeta de débito/crédito")}
      >
        <i className="bi bi-credit-card-2-back text-black"></i>
        <p className="mb-0 ms-2">Tarjeta de débito y crédito</p>
      </button>
      <div className="collapse" id="collapseTarjeta">
        <div className="card card-body border d-flex justify-content-start align-items-start">
          <div>{"Detalle tarjeta débito/crédito"}</div>
        </div>
      </div>

      {/* Opción 2: Transferencia Bancaria */}
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
        <div className="card card-body d-flex justify-content-start align-items-start">
          <div>{"Detalles transferencia"}</div>
        </div>
      </div>

      {/* Opción 3: Efectivo */}
      <button
        className="btn d-flex justify-content-start align-items-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseLocal"
        aria-expanded="false"
        aria-controls="collapseLocal"
        onClick={() => handleSelectTipoPago("Efectivo")}
      >
        <i className="bi bi-cash-coin text-black"></i>
        <p className="mb-0 ms-2">Efectivo</p>
      </button>
      <div className="collapse" id="collapseLocal">
        <div className="card card-body d-flex justify-content-start align-items-start">
          <p>DIRECCIÓN LOCAL</p>
        </div>
      </div>

      <div className="d-flex justify-content-start align-items-center"></div>
      <button onClick={prevStep}>Anterior</button>
      <button onClick={handleNextStep}>Confirmar</button>
    </div>
  );
};

export default CheckoutFinalStep;
