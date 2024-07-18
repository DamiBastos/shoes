import React from "react";
import InputField from "../InputField";

interface CheckoutFirstStepProps {
  nextStep: () => void;
}

const CheckoutFirstStep: React.FC<CheckoutFirstStepProps> = ({ nextStep }) => {
  return (
    <div className="">
      <h6>Información de Contacto</h6>
      {/* Formulario de contacto */}
      <InputField
        label="DATOS DE CONTACTO"
        type="text"
        name="email"
        id="email"
        value={null}
        onChange={null}
      ></InputField>
      <InputField
        label="ENTREGA"
        type="text"
        name="cp"
        id="cp"
        value={null}
        onChange={null}
      ></InputField>
      <button onClick={nextStep}>Siguiente</button>
    </div>
  );
};

export default CheckoutFirstStep;
