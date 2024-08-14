import React from "react";
import CardFooter from "./CardFooter";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="bodyfooter d-flex flex-column align-items-center">
      <article className="p-5 w-100 d-flex flex-column align-items-center">
        {/* <section>
          <h4>SEGUINOS</h4>
        </section>
        <section className="p-5 d-flex align-items-center gap-1">
          <a className="bg-black rounded-circle" href="">
            <i className="d-flex align-items-center p-3 bi bi-instagram"></i>
          </a>
          <a className="bg-black rounded-circle" href="">
            <i className="d-flex align-items-center p-3 bi bi-facebook"></i>
          </a>
        </section> */}
        <section className="w-100 d-flex justify-content-around">
          <CardFooter
            icon="p-1 bi bi-truck"
            principal="Enviamos tu compra"
            secondary="Entregas a todo el país"
          />
          {/* <CardFooter
            icon="p-1 bi bi-credit-card"
            principal="Pagá como quieras"
            secondary="Transferencia o efectivo"
          /> */}
          <CardFooter
            icon="p-1 bi bi-lock"
            principal="Comprá con seguridad"
            secondary="Tus datos siempre protegidos"
          />
        </section>
      </article>
      <article className="p-5 gap-5 w-100 d-flex justify-content-start">
        <div>
          <h6>NAVEGACIÓN</h6>
          <ul className="p-0 d-flex flex-column align-items-start">
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Productos</a>
            </li>
            
            <li>
              <a href="">Contacto</a>
            </li>
            <li>
              <a href="">Tiempos de entrega</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h6>CONTACTANOS</h6>
          <ul className="p-0 d-flex flex-column align-items-start ">
            <li>
              <i className="footer p-1 bi bi-telephone-fill"></i>+54 9 11 5004-3472
            </li>

            <li>
              <i className="footer p-1 bi bi-envelope-fill"></i>cigano@hotmail.com
            </li>
            {/* <li>
              <i className="footer p-1 bi bi-geo-alt-fill"></i>Recoleta, Buenos
              Aires
            </li> */}
          </ul>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
