import React from "react";
import InputField from "../InputField";

interface CheckoutThirdStepProps {
  prevStep: () => void;
  nextStep: () => void;
}

const CheckoutThirdStep: React.FC<CheckoutThirdStepProps> = ({
  prevStep,
  nextStep,
}) => {
  return (
    <div className="">
      <h6>Datos de facturación</h6>
      {/* Formulario de contacto */}
      <InputField
        type="text"
        name="email"
        id="email"
        placeholder="Nombre"
        value={null}
        onChange={null}
      ></InputField>
      <InputField
        type="text"
        name="cp"
        id="cp"
        placeholder="Apellido"
        value={null}
        onChange={null}
      ></InputField>
      <InputField
        type="text"
        name="cp"
        id="cp"
        placeholder="Teléfono"
        value={null}
        onChange={null}
      ></InputField>
      <InputField
        type="text"
        name="cp"
        id="cp"
        placeholder="Calle"
        value={null}
        onChange={null}
      ></InputField>
      <div className="d-flex gap-2">
        <InputField
          type="text"
          name="cp"
          id="cp"
          placeholder="Número"
          value={null}
          onChange={null}
        ></InputField>
        <InputField
          type="text"
          name="cp"
          id="cp"
          placeholder="Departamento"
          value={null}
          onChange={null}
        ></InputField>
      </div>
      <InputField
        type="text"
        name="cp"
        id="cp"
        placeholder="Barrio"
        value={null}
        onChange={null}
      ></InputField>
      <InputField
        type="text"
        name="cp"
        id="cp"
        placeholder="Ciudad"
        value={null}
        onChange={null}
      ></InputField>
      <button onClick={prevStep}>Anterior</button>
      <button onClick={nextStep}>Siguiente</button>
    </div>
  );
};

export default CheckoutThirdStep;
