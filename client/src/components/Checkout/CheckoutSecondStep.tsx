import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage";


interface CheckoutSecondStepProps {
  prevStep: () => void;
  nextStep: () => void;
  updateFormData: (data: object) => void;
}

const CheckoutSecondStep: React.FC<CheckoutSecondStepProps> = ({
  prevStep,
  nextStep,
  updateFormData,
}) => {
  const [typeShip, setTypeShip] = useState<string>("");
  const [shippingOption, setShippingOption] = useState<string>("");
  const [errors, setErrors] = useState<string | null>(null);


  const handleNextStep = () => {
   
    // Actualizar los datos en formData
    updateFormData({ typeShip, shippingOption });
    if (!typeShip) {
      setErrors("Por favor, complete todos los campos obligatorios.");
      return;
    }
    // Ir al siguiente paso
    nextStep();
  };

  const handleSelectTypeShip = (type: string) => {
    setTypeShip(type);
  };

  const handleSelectShippingOption = (option: string) => {
    setShippingOption(option);
  };

  return (
    <div className="">
      <h6>Información de Entrega</h6>

      {/* Opción 1: Envío a domicilio */}
      <button
        className="btn d-flex justify-content-start align-items-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseDomicilio"
        aria-expanded="false"
        aria-controls="collapseDomicilio"
        onClick={() => handleSelectTypeShip("Envío a domicilio")}
      >
        <i className="bi bi-truck text-black"></i>
        <p className="mb-0 ms-2">Envío a domicilio</p>
      </button>
      <div className="collapse" id="collapseDomicilio">
        <div className="card card-body border d-flex justify-content-start align-items-start">
          <div>
            <input
              type="radio"
              name="domicilio"
              id="domicilio1"
              onChange={() => handleSelectShippingOption("Correo Argentino Clásico")}
            />
            <label htmlFor="domicilio1">Correo Argentino Clásico</label>
          </div>
          <div>
            <input
              type="radio"
              name="domicilio"
              id="domicilio2"
              onChange={() => handleSelectShippingOption("Correo Argentino Expreso")}
            />
            <label htmlFor="domicilio2">Correo Argentino Expreso</label>
          </div>
          <div>
            <input
              type="radio"
              name="domicilio"
              id="domicilio3"
              onChange={() => handleSelectShippingOption("Andreani Estandar")}
            />
            <label htmlFor="domicilio3">Andreani Estandar</label>
          </div>
        </div>
      </div>

      {/* Opción 2: Retirar por punto de retiro */}
      <button
        className="btn d-flex justify-content-start align-items-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsePunto"
        aria-expanded="false"
        aria-controls="collapsePunto"
        onClick={() => handleSelectTypeShip("Retirar por punto de retiro")}
      >
        <i className="bi bi-geo-alt text-black"></i>
        <p className="mb-0 ms-2">Retirar por punto de retiro</p>
      </button>
      <div className="collapse" id="collapsePunto">
        <div className="card card-body d-flex justify-content-start align-items-start">
          <div>
            <input
              type="radio"
              name="punto"
              id="punto1"
              onChange={() => handleSelectShippingOption("Punto de entrega 1")}
            />
            <label htmlFor="punto1">Punto de entrega 1</label>
          </div>
          <div>
            <input
              type="radio"
              name="punto"
              id="punto2"
              onChange={() => handleSelectShippingOption("Punto de entrega 2")}
            />
            <label htmlFor="punto2">Punto de entrega 2</label>
          </div>
          <div>
            <input
              type="radio"
              name="punto"
              id="punto3"
              onChange={() => handleSelectShippingOption("Punto de entrega 3")}
            />
            <label htmlFor="punto3">Punto de entrega 3</label>
          </div>
        </div>
      </div>

      {/* Opción 3: Retirar por local */}
      <button
        className="btn d-flex justify-content-start align-items-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseLocal"
        aria-expanded="false"
        aria-controls="collapseLocal"
        onClick={() => handleSelectTypeShip("Retirar por local")}
      >
        <i className="bi bi-shop text-black "></i>
        <p className="mb-0 ms-2">Retirar por local</p>
      </button>
      <div className="collapse" id="collapseLocal">
        <div className="card card-body d-flex justify-content-start align-items-start">
          <p>DIRECCIÓN LOCAL</p>
        </div>
      </div>
      <ErrorMessage message={errors} />

      <div className="d-flex justify-content-start align-items-center"></div>
      <button onClick={prevStep}>Anterior</button>
      <button onClick={handleNextStep}>Siguiente</button>
    </div>
  );
};

export default CheckoutSecondStep;
