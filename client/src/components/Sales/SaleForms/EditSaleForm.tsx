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
        `http://localhost:3000/purchase/update/${sale.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sale),
        }
      );
      if (response.ok) {
        onClose();
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating sale:", error);
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <SelectField 
        id="state_payment"
        name="state_payment"
        value={sale.state_payment}
        onChange={handleChange}
        label="Estado de pago"
        options={[{label:"Inicial", value:"Inicial"},{label:"Pago", value:"Pago"},{label:"Cancelado", value:"Cancelado"}]}
      />
      <SelectField
        id="state_ship"
        name="state_ship"
        value={sale.state_ship}
        onChange={handleChange}
        label="Estado de envío"
        options={[{label:"Local", value:"Local"},{label:"Enviado", value:"Enviado"},{label:"Recibido", value:"Recibido"},{label:"Cancelado", value:"Cancelado"}]}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default EditSaleForm;