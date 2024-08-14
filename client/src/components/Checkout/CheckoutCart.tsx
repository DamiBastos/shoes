import React from "react";
import { useUser } from "../UserContext";
import { formatNumber } from "../../utils/formateNumber";

const CheckoutCart: React.FC = () => {
  const { cart } = useUser();

  return (
    <div className="body__cart w-25 border">
      {" "}
      <div>
        <ul className="list-group">
          {cart?.items.map((product: any, index: number) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="d-flex justify-content-between">
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <div className="d-flex justify-content-between align-items-center p-1">
            <p>Subtotal:</p> <p>${cart ? formatNumber(cart.subtotal) : 0}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center p-1">
            <p>Total:</p> <p>${cart ? formatNumber(cart.total) : 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
