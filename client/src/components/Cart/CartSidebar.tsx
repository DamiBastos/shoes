import React, { useState } from "react";
import "./CartSidebar.css";
import { CartSidebarProps } from "../../types/CartSidebarProps";
import { emptyCart } from "../../api/cart";
import { useUser } from "../UserContext";
import { formatNumber } from "../../utils/formateNumber";

const CartSidebar: React.FC<CartSidebarProps> = ({
  show,
  handleClose,
  products,
}) => {
  const [, setCart] = useState([]);

  const { user } = useUser();

  const handleVaciarCarrito = async () => {
    try {
      await emptyCart(user?.id);
      setCart([]);
    } catch (error) {
      console.error("Error al vaciar el carrito:", error);
    }
  };

  return (
    <div className={`cart-sidebar ${show ? "open" : ""}`}>
      <div className="d-flex">
        <button onClick={handleClose} className="close-button text-black">
          <i className="bi bi-x-circle text-black"></i>
        </button>
      </div>
      <div className="cart-sidebar-body d-flex flex-column justify-content-between h-75">
        {products && products.items.length > 0 ? (
          <table className="">
            <thead>
              <tr>
                <th className="p-1">PRODUCTO</th>
                <th className="p-1">Precio/Uni</th>
                <th className="p-1">TALLE</th>
                <th className="p-1">CANT</th>
                <th className="p-1">PRECIO</th>
              </tr>
            </thead>
            <tbody>
              {products.items.map((product, index) => (
                <tr key={index}>
                  <td className="d-flex p-1 align-items-center">
                    <span className="p-1">{product.name}</span>
                  </td>
                  <td className="p-1">{formatNumber(product.unit_price)}</td>

                  <td className="p-1">{product.size.number}</td>
                  <td className="p-1">{product.quantity}</td>

                  <td className="p-1">{formatNumber(product.price) }</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
        <div className="d-flex flex-column gap-3 rounded">
          <div className="bg-black text-light">
            TOTAL: ${products && products.total ? products.total : "0"}
          </div>
          <a
            href="/pago"
            className={`border p-1 rounded text-light ${
              products?.items.length < 1
                ? "disabled-link bg-secondary"
                : "bg-dark"
            }`}
            onClick={(e) => {
              if (products.items.length < 1) {
                e.preventDefault(); // Evita la navegación si el carrito está vacío
              }
            }}
          >
            CONFIRMAR COMPRA
          </a>
          <button
            className={`border p-1 rounded text-light ${
              products?.items.length < 1
                ? "disabled-link bg-secondary"
                : "bg-dark"
            }`}
            disabled={products?.items.length < 1}
            onClick={handleVaciarCarrito}
          >
            VACIAR CARRITO
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
