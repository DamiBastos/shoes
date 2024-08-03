import React from "react";
import { useUser } from "../UserContext";

const CheckoutCart: React.FC = () => {
  const { cart } = useUser();

  return (
    <div className="w-25 border">
      {" "}
      Checkout Cart
      <div>
        <ul className="list-group">
          {cart?.items.map((product: any, index: number) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="d-flex justify-content-between">
                {/* <img
                  className=""
                  src={`/products/${product.image}`}
                  alt={product.name}
                  width={"50px"}
                /> */}
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <p>Subtotal</p> <p>{cart ? cart.subtotal : 0}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>Envío</p> <p>Total envío</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>Total</p> <p>{cart ? cart.total : 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
