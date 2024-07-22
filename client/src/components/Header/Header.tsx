import React, { useEffect, useState } from "react";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useUser } from "../UserContext"; // Importa el hook useUser
import CartSidebar from "../Cart/CartSidebar";

const Header: React.FC = () => {
  const { user, fetchCart, cart } = useUser();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (user && !user.isAdmin) {
      fetchCart();
    }
    console.log("carrito header: ", cart);
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleOpenCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <header className="">
      <article className="px-5 d-flex justify-content-between shadow-sm bg-body-tertiary rounded align-items-center">
        <section className="d-flex gap-1">
          <a href="tel:1150042472" className="text-black">
            1150042472
          </a>
          <a href="mailto:jorge@gmail.com" className="text-black">
            jorge@gmail.com
          </a>
        </section>
        <section className="d-flex gap-1 align-items-center">
          {user && user.isAdmin ? (
            <a href="/admin/dashboard">Administrar</a>
          ) : null}
          {user ? (
            <>
              <span>{user.email}</span>
              <button onClick={handleLogout} className="btn btn-link">
                <i className="bi bi-box-arrow-left text-black"></i>
              </button>
            </>
          ) : (
            <>
              <a href="/register">Crear cuenta</a>
              <a href="/login">Iniciar sesión</a>
            </>
          )}
        </section>
      </article>
      <article className="py-2 px-5 d-flex justify-content-between align-items-center shadow-sm bg-body-tertiary rounded">
        <section className="px-5">
          <a className="logo" href="/">
            SHOP-SHOES
          </a>
        </section>
        <nav className="d-flex gap-2">
          <a href="/">Inicio</a>
          <a href="/productos">Productos</a>
          <a href="/kids">Kids</a>
          <a href="/hombre">Hombre</a>
          <a href="/mujer">Mujer</a>
        </nav>
        <section className="d-flex justify-content-between align-items-center">
          <div className="d-flex mx-5 px-2 border rounded-pill">
            <a href="">
              <i className="bi bi-search"></i>
            </a>
            <input
              className="p-1 bg-light shadow-none border-0"
              type="search"
              placeholder="Buscar"
            />
          </div>
          {user && !user.isAdmin ? (
            <div className="d-flex flex-column align-items-center justify-content-between">
              <i
                className="bi bi-cart3"
                onClick={handleOpenCart}
                style={{ cursor: "pointer" }}
              ></i>
              <h6 className="">$0,00</h6>
            </div>
          ) : (
            ""
          )}
        </section>
      </article>
      <CartSidebar
        show={showCart}
        handleClose={handleCloseCart}
        products={cart}
      />
    </header>
  );
};

export default Header;
