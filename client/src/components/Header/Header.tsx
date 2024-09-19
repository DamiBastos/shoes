import React, { useEffect } from "react";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useUser } from "../UserContext"; // Importa el hook useUser
import CartSidebar from "../Cart/CartSidebar";
import { formatNumber } from "../../utils/formateNumber";
import { useFilter } from "../FilterContext";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { user, fetchCart, cart, isCartOpen, openCart, closeCart } = useUser();
  const { setFilter } = useFilter();

  const navigate = useNavigate();

  const handleFilterAndScroll = (filterValue: string, sectionId: string) => {
    setFilter(filterValue);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    navigate('/');
  };

 

  useEffect(() => {
    if (user && !user.isAdmin) {
      fetchCart();
    }
  }, [user]);

  useEffect(() => {
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleCartClick = async () => {
    await fetchCart(); // Actualiza el carrito antes de abrirlo
    openCart(); // Abre el carrito
  };



  return (
    <header id="inicio" className="w-100">
      <article className="px-5 d-flex justify-content-between shadow-sm bg-body-tertiary rounded align-items-center">
        <section className="header__nav d-flex gap-2">
          <a href="https://wa.me/5491150043472" target="_blank" className="text-black">
            1150043472
          </a>
          <a href="mailto:cigano32@hotmail.com" className="text-black">
          cigano32@hotmail.com
          </a>
        </section>
        <section className="d-flex gap-1 align-items-center">
          {user && user.isAdmin ? (
            <a href="/admin/dashboard">Administrar</a>
          ) : null}
          {user ? (
            <div className="header__sesion d-flex align-items-center justify-content">
              <div className="d-flex align-items-center">
                {!user.isAdmin ? <a href="/compras">Mis compras</a> : null}
              </div>
              <div className="usuario-card">{user.username}</div>
              <button onClick={handleLogout} className="btn btn-link">
                <i className="bi bi-box-arrow-left text-black"></i>
              </button>
            </div>
          ) : (
            <div className="d-flex gap-3">
              <a href="/registro">Crear cuenta</a>
              <a href="/login">Iniciar sesión</a>
            </div>
          )}
        </section>
      </article>
      <article className="w-100 px-3 d-flex justify-content-between align-items-center shadow-sm bg-body-tertiary">
        <section className="px-1">
          <a className="logo p-1" href="/">
            SHOESMARKET
          </a>
        </section>
        <nav className="header__nav d-flex gap-2">
        <a href="#productos" onClick={() => handleFilterAndScroll('productos', 'productos')}>Productos</a>
        <a href="#productos" onClick={() => handleFilterAndScroll('hombre', 'productos')}>Hombre</a>
        <a href="#productos" onClick={() => handleFilterAndScroll('mujer', 'productos')}>Mujer</a>
        <a href="#productos" onClick={() => handleFilterAndScroll('niño', 'productos')}>Niño</a>
        </nav>
        <section className="d-flex justify-content-between align-items-center">
          {/* <div className="header__search d-flex mx-5 px-2 border rounded-pill">
            <a href="">
              <i className="bi bi-search"></i>
            </a>
            <input
              className="p-1 bg-light shadow-none border-0"
              type="search"
              placeholder="Buscar"
            />
          </div> */}
          {user && !user.isAdmin ? (
            <div className="d-flex flex-column align-items-center justify-content-between position-relative">
              {cart?.items.length > 0 ? (
                <span className="cart-count badge badge-danger position-absolute top-0 start-100 translate-middle">
                  {cart?.items.length}
                </span>
              ) : null}
              <i
                className="bi bi-cart3"
                onClick={handleCartClick}
                style={{ cursor: "pointer" }}
              ></i>
              <h6 className="">{ `${cart?.total ? `$${formatNumber(cart.total)}`: ""} `}</h6>
            </div>
          ) : (
            ""
          )}
        </section>
      </article>
      <CartSidebar show={isCartOpen} handleClose={closeCart} products={cart} />
    </header>
  );
};

export default Header;
