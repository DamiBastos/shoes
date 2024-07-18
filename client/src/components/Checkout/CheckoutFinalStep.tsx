import React from "react";

interface CheckoutFinalStepProps {
  prevStep: () => void;
  nextStep: () => void;
}

const CheckoutFinalStep: React.FC<CheckoutFinalStepProps> = ({
  prevStep,
  nextStep,
}) => {
  return (
    <div className="">
      <h6>MEDIO DE PAGO</h6>
      {/* Formulario de contacto */}
      <div className="d-flex justify-content-start align-items-center"></div>

      {/* ------------opcion 1------------ */}

      <button
        className="btn d-flex justify-content-start align-items-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTarjeta"
        aria-expanded="false"
        aria-controls="collapseTarjeta"
      >
        <i className="bi bi-credit-card-2-back text-black"></i>

        <p className="mb-0 ms-2">Tarjeta de débito y crédito</p>
      </button>
      <div className="collapse" id="collapseTarjeta">
        <div className="card card-body border d-flex justify-content-start align-items-start">
          <div>{"Detalle tarjeta débito/crédito"}</div>
        </div>
      </div>

      {/* ------------opcion 2------------ */}

      <button
        className="btn d-flex justify-content-start align-items-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTransferencia"
        aria-expanded="false"
        aria-controls="collapseTransferencia"
      >
        <i className="bi bi-bank2 text-black"></i>

        <p className="mb-0 ms-2">Transferencia Bancaria</p>
      </button>
      <div className="collapse" id="collapseTransferencia">
        <div className="card card-body d-flex justify-content-start align-items-start">
          <div>{"Detalles transferencia"}</div>
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
      <button onClick={nextStep}>Confirmar</button>
    </div>
  );
};

export default CheckoutFinalStep;
