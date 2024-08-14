import React from "react";
import CheckoutCart from "../../components/Checkout/CheckoutCart";
import CheckoutForm from "../../components/Checkout/CheckoutForm";
import "./checkout.css"

const Checkout: React.FC = () => {
  return (
    <div className="container__checkout">
      {/* <h1 className="title__checkout">CHECKOUT</h1> */}
      <div className="body__checkout d-flex justify-content-between">
        <CheckoutForm></CheckoutForm>
        <CheckoutCart></CheckoutCart>
      </div>
    </div>
  );
};

export default Checkout;
