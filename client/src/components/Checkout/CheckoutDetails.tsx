import React, { useEffect, useState } from "react";
import { FormData } from "../../types/formData";
import { useUser } from "../UserContext";

interface CheckoutDetailsProps {
  formData: FormData;
  prevStep: () => void;
  handleSubmit: () => void;
}

const CheckoutDetails: React.FC<CheckoutDetailsProps> = ({ formData, prevStep, handleSubmit }) => {
  const { cart } = useUser()
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    
    const ítems = cart.items
    const calculatedSubtotal = ítems.reduce(
      (sum: number, item:any) => sum + item.price * item.quantity,
      0
    );

    setSubtotal(calculatedSubtotal);
    setTotal(calculatedSubtotal);

    
  }, [cart]);
  return (
    <div className="">
      <h6>Detalles de compra</h6>
      {/* Mostrar los datos del formulario */}
      <div>
        <h6>Información de Contacto</h6>
        <p>Email: {formData.firstStepData.email}</p>
        <p>Código Postal: {formData.firstStepData.postal_code}</p>
      </div>
      <div>
        <h6>Información de Entrega</h6>
        <p>Nombre: {formData.thirdStepData.name}</p>
        <p>Apellido: {formData.thirdStepData.lastname}</p>
        <p>Teléfono: {formData.thirdStepData.phone}</p>
        <p>Ciudad: {formData.thirdStepData.city}</p>
        <p>Barrio: {formData.thirdStepData.neighborhood}</p>
        <p>Calle: {formData.thirdStepData.street}</p>
        <p>Número: {formData.thirdStepData.number_street}</p>
        <p>Departamento: {formData.thirdStepData.department}</p>
      </div>
      <div>
        <h6>Método de Pago</h6>
        <p>Método: {formData.finalStepData.type_payment}</p>
        {/* <p>Número de Tarjeta: {formData.thirdStepData.cardNumber}</p> */}
      </div>
      <div>
        <h6>Información de Entrega</h6>
        <p>Tipo de envío: {formData.secondStepData.type_ship}</p>
      </div>
      <div>
      <p>Subtotal: {subtotal}</p>
      <p>Total: {total}</p>

      </div>
      <button onClick={prevStep}>Volver</button>
      <button onClick={handleSubmit}>Confirmar y Enviar</button>
    </div>
  );
};

export default CheckoutDetails;
