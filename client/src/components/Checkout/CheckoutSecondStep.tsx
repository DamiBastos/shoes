import React from "react";
import InputField from "../InputField";

interface CheckoutSecondStepProps {
  prevStep: () => void;
  nextStep: () => void;
}

const CheckoutSecondStep: React.FC<CheckoutSecondStepProps> = ({
  prevStep,
  nextStep,
}) => {
  return (
    <div className="">
      <h6>Información de Entrega</h6>
      {/* Formulario de contacto */}
      <div className="d-flex justify-content-start align-items-center"></div>

      {/* ------------opcion 1------------ */}

      <button
        className="btn d-flex justify-content-start align-items-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseDomicilio"
        aria-expanded="false"
        aria-controls="collapseDomicilio"
      >
        <i className="bi bi-truck text-black"></i>

        <p className="mb-0 ms-2">Envío a domicilio</p>
      </button>
      <div className="collapse" id="collapseDomicilio">
        <div className="card card-body border d-flex justify-content-start align-items-start">
          <div>
            <input type="radio" name="domicilio1" id="domicilio1" />

            {"Correo Argentino Clásico "}
          </div>
          <div>
            <input type="radio" name="domicilio2" id="domicilio2" />

            {"Correo Argentino Expreso "}
          </div>
          <div>
            <input type="radio" name="domicilio3" id="domicilio3" />

            {"Andreani Estandar"}
          </div>
        </div>
      </div>

      {/* ------------opcion 2------------ */}

      <button
        className="btn d-flex justify-content-start align-items-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsePunto"
        aria-expanded="false"
        aria-controls="collapsePunto"
      >
        <i className="bi bi-geo-alt text-black"></i>

        <p className="mb-0 ms-2">Retirar por punto de retiro</p>
      </button>
      <div className="collapse" id="collapsePunto">
        <div className="card card-body d-flex justify-content-start align-items-start">
          <div>
            <input type="radio" name="punto1" id="punto1" />

            {"Punto de entrega 1"}
          </div>
          <div>
            <input type="radio" name="punto2" id="punto2" />

            {"Punto de entrega 2"}
          </div>
          <div>
            <input type="radio" name="punto3" id="punto3" />

            {"Punto de entrega 3"}
          </div>
        </div>
      </div>

      {/* ------------opcion 3------------ */}

      <button
        className="btn d-flex justify-content-start align-items-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseLocal"
        aria-expanded="false"
        aria-controls="collapseLocal"
      >
        <i className="bi bi-shop text-black "></i>

        <p className="mb-0 ms-2">Retirar por local</p>
      </button>
      <div className="collapse" id="collapseLocal">
        <div className="card card-body d-flex justify-content-start align-items-start">
          <p>DIRECCIÓN LOCAL</p>
        </div>
      </div>

      <div className="d-flex justify-content-start align-items-center"></div>
      <button onClick={prevStep}>Anterior</button>
      <button onClick={nextStep}>Siguiente</button>
    </div>
  );
};

export default CheckoutSecondStep;
