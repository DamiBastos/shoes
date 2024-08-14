import React, { useState } from "react";
import InputField from "../InputField";
import ErrorMessage from "../ErrorMessage";


interface CheckoutFirstStepProps {
  nextStep: () => void;
  updateFormData: (data: object) => void;
}

const CheckoutFirstStep: React.FC<CheckoutFirstStepProps> = ({ nextStep, updateFormData }) => {

  const [email, setEmail] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [errors, setErrors] = useState<string | null>(null);


  const handleNextStep = () => {
    // Actualizar los datos en formData
    updateFormData({ email, postal_code });

     // Validar campos vacíos
     if (!email || !postal_code) {
      setErrors("Por favor, complete todos los campos obligatorios.");
      return;
    }

    // Ir al siguiente paso
    nextStep();
  };

  return (
    <div className="">
      <h6>Información de Contacto</h6>
      {/* Formulario de contacto */}

      <InputField
        label="Email de contacto"
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
      <ErrorMessage message={errors} />

      <button className="m-1" onClick={handleNextStep}>Siguiente</button>
      </div>
  );
};

export default CheckoutFirstStep;
