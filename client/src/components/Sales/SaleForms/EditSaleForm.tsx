// src/components/EditProductForm.tsx
import React, { useState } from "react";
import { Shop } from "../../../types/Shop";
import SelectField from "../../SelectField";

interface EditSaleFormProps {
  initialProduct: Shop;
  onClose: () => void;
}

const EditSaleForm: React.FC<EditSaleFormProps> = ({
  initialProduct,
  onClose,
}) => {
  const [sale, setSale] = useState<Shop>(initialProduct);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSale({ ...sale, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch(
        `http://localhost:3000/purchases/update/${sale.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sale),
        }
      );
      if (response.ok) {
        onClose(); // Close the modal after successful edit
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating sale:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectField 
        id="state_purchase"
        name="state_purchase"
        value={sale.state_purchase}
        onChange={handleChange}
        label="Estado de Envío"
        options={['pendiente', 'completado', 'cancelado']}
      />
      <SelectField
        id="type_ship"
        name="type_ship"
        value={sale.type_ship}
        onChange={handleChange}
        label="Tipo de Envío"
        options={['Estandar', 'Exprés']}
      />
      <SelectField
        id="type_payment"
        name="type_payment"
        value={sale.type_payment}
        onChange={handleChange}
        label="Tipo de Pago"
        options={['tarjeta_credito', 'tarjeta_debito', 'paypal', 'transferencia_bancaria']}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default EditSaleForm;
