import React from "react";
import CheckoutCart from "../../components/Checkout/CheckoutCart";
import CheckoutForm from "../../components/Checkout/CheckoutForm";

const Checkout: React.FC = () => {
  return (
    <div className="">
      <h1>Checkout Page</h1>
      <div className="d-flex justify-content-between">
        <CheckoutForm></CheckoutForm>
        <CheckoutCart></CheckoutCart>
      </div>
    </div>
  );
};

export default Checkout;
