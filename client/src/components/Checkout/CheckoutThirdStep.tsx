import React, { useState } from "react";
import InputField from "../InputField";

import ErrorMessage from "../ErrorMessage";




interface CheckoutThirdStepProps {
  prevStep: () => void;
  nextStep: () => void;
  updateFormData: (data: object) => void;
}

const CheckoutThirdStep: React.FC<CheckoutThirdStepProps> = ({
  prevStep,
  nextStep,
  updateFormData
}) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [number_street, setNumber_street] = useState("");
  const [department, setDepartment] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");

  const [errors, setErrors] = useState<string | null>(null);


  const handleNextStep = () => {
    // Actualizar los datos en formData
    updateFormData({ 
      name,
      lastname,
      phone,
      street,
      number_street,
      department,
      neighborhood,
      city 
    });

    
 if (!name || !lastname || !phone || !street || !number_street || !department || !neighborhood || !city ) {
  setErrors("Por favor, complete todos los campos obligatorios.");
  return;
}
    // Ir al siguiente paso
    nextStep();
  };
  return (
    <div className="">
      <h6>Datos de facturación</h6>
      {/* Formulario de contacto */}
      <InputField
        type="text"
        name="name"
        id="name"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></InputField>
      <InputField
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Apellido"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        ></InputField>
      <InputField
        type="text"
        name="phone"
        id="phone"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        ></InputField>
      <InputField
        type="text"
        name="street"
        id="street"
        placeholder="Calle"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        ></InputField>
      <div className="d-flex gap-2">
        <InputField
          type="text"
          name="number_street"
          id="number_street"
          placeholder="Número"
          value={number_street}
          onChange={(e) => setNumber_street(e.target.value)}
          ></InputField>
        <InputField
          type="text"
          name="department"
          id="department"
          placeholder="Departamento"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          ></InputField>
      </div>
      <InputField
        type="text"
        name="neighborhood"
        id="neighborhood"
        placeholder="Barrio"
        value={neighborhood}
        onChange={(e) => setNeighborhood(e.target.value)}
        ></InputField>
      <InputField
        type="text"
        name="city"
        id="city"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        ></InputField>
              <ErrorMessage message={errors} />

      <button className="m-1" onClick={prevStep}>Anterior</button>
      <button className="m-1" onClick={handleNextStep}>Siguiente</button>
    </div>
  );
};

export default CheckoutThirdStep;
