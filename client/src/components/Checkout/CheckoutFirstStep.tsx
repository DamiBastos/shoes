import React, { useState } from "react";
import InputField from "../InputField";

interface CheckoutFirstStepProps {
  nextStep: () => void;
  updateFormData: (data: object) => void;
}

const CheckoutFirstStep: React.FC<CheckoutFirstStepProps> = ({ nextStep, updateFormData }) => {

  const [email, setEmail] = useState("");
  const [postal_code, setPostal_code] = useState("");

  const handleNextStep = () => {
    // Actualizar los datos en formData
    updateFormData({ email, postal_code });
    // Ir al siguiente paso
    nextStep();
  };

  return (
    <div className="">
      <h6>Información de Contacto</h6>
      {/* Formulario de contacto */}
      <InputField
        label="DATOS DE CONTACTO"
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></InputField>
      <InputField
        label="Código Postal"
        type="text"
        name="postal_code"
        id="postal_code"
        value={postal_code}
        onChange={(e) => setPostal_code(e.target.value)}
      ></InputField>
      <button onClick={handleNextStep}>Siguiente</button>
      </div>
  );
};

export default CheckoutFirstStep;
