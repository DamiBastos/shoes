import React from "react";
import "./CartSidebar.css";
import { CartSidebarProps } from "../../types/CartSidebarProps";

const CartSidebar: React.FC<CartSidebarProps> = ({
  show,
  handleClose,
  products,
  
}) => {
  return (
    <div className={`cart-sidebar ${show ? "open" : ""}`}>
      <div className="d-flex">
        <button onClick={handleClose} className="close-button text-black">
          <i className="bi bi-x-circle text-black"></i>
        </button>
      </div>
      <div className="cart-sidebar-body d-flex flex-column justify-content-between border h-75">
        {products && products.items.length > 0 ? (
          <table className="">
            <thead>
              <tr>
                <th className="p-1">PRODUCTO</th>
                <th className="p-1">Precio/Uni</th>
                <th className="p-1">CANT</th>
                <th className="p-1">PRECIO</th>
              </tr>
            </thead>
            <tbody>
              {products.items.map((product, index) => (
                
                <tr key={index}>
                  <td className="d-flex p-1 align-items-center">
                    {/* <img
                      className="rounded"
                      src={`/products/${product.image}`}
                      alt={product.name}
                      width={"100px"}
                    ></img> */}
                    <span className="p-1">{product.name}</span>
                  </td>
                  <td className="p-1">{product.unit_price}</td>

                  <td className="p-1">{product.quantity}</td>
                  <td className="p-1">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
        <div className="border p-1 rounded bg-black text-light">
          TOTAL: ${products && products.total ? products.total : "0"}
        </div>
        <a href="/payment" className="border p-1 rounded bg-black text-light">
          CONFIRMAR COMPRA
        </a>
      </div>
    </div>
  );
};

export default CartSidebar;
