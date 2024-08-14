import React, { useEffect, useState } from "react";
import { FormData } from "../../types/FormData";
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
    
    const items = cart.items
    const calculatedSubtotal = items.reduce(
      (sum: number, item:any) => sum + item.price * item.quantity,
      0
    );

    setSubtotal(calculatedSubtotal);
    setTotal(calculatedSubtotal);

    
  }, [cart]);
  return (
    <div className="">
    <div className="border rounded">
      <h4>DETALLES DE COMPRA</h4>
      {/* Mostrar los datos del formulario */}
      <div className="">
        <h6>Información de Contacto</h6>
        <div className="d-flex justify-content-between border align-items-center p-1">
        <p className="">Email: {formData.firstStepData.email}</p>
        <p>Código Postal: {formData.firstStepData.postal_code}</p>
        </div>
      </div>
      <div >
        <h6>Información de Entrega</h6>
        <div className="d-flex justify-content-between border p-1">
        <p>Nombre: {formData.thirdStepData.name}</p>
        <p>Apellido: {formData.thirdStepData.lastname}</p>
        <p>Teléfono: {formData.thirdStepData.phone}</p>
        </div>
        <div className="d-flex justify-content-between border p-1">

        <p>Ciudad: {formData.thirdStepData.city}</p>
        <p>Barrio: {formData.thirdStepData.neighborhood}</p>
        </div>
        <div className="d-flex justify-content-between border p-1">

        <p>Calle: {formData.thirdStepData.street}</p>
        <p>Número: {formData.thirdStepData.number_street}</p>
        <p>Departamento: {formData.thirdStepData.department}</p>
        </div>
      </div>
      <div className="border">
        <h6>Método de Pago</h6>
        <p>{formData.finalStepData.type_payment}</p>
        {/* <p>Número de Tarjeta: {formData.thirdStepData.cardNumber}</p> */}
      </div>
      {/* <div className=" border">
        <h6>Información de Entrega</h6>
        <p>Tipo de envío: {formData.secondStepData.type_ship}</p>
      </div> */}
      <div className="d-flex justify-content-center border">
      {/* <h6 className="p-1">Subtotal: ${subtotal}</h6> */}
      <h6 className="p-1">Total: ${total}</h6>

      </div>
      </div>
      <button className="m-1" onClick={prevStep}>Volver</button>
      <button className="m-1" onClick={handleSubmit}>Confirmar y Enviar</button>
    
    </div>
  );
};

export default CheckoutDetails;
