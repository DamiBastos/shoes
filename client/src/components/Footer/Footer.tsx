import React, { useState } from "react";
import CardFooter from "./CardFooter";
import "./Footer.css";

const Footer: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

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
          <CardFooter
            icon="p-1 bi bi-lock"
            principal="Comprá con seguridad"
            secondary="Tus datos siempre protegidos"
          />
        </section>
      </article>
      <article className="p-5 gap-5 w-100 d-flex justify-content-start">
        <div className="w-25 d-flex flex-column align-items-start">
          <h6>NAVEGACIÓN</h6>
          <ul className="p-0 d-flex flex-column align-items-start">
            <li>
              <a href="#producto">Inicio</a>
            </li>
            <li>
              <a href="#producto">Productos</a>
              
            </li>
            <li className="d-flex flex-column align-items-start">
            <a href="#producto" onClick={toggleVisibility} className="text-decoration-none">Tiempos de entrega</a>
            <div className={`collapse ${isOpen ? 'show' : ''}`}>
        <p className="text-start border p-1 m-1">Desde el momento de recibido el pago, la entrega es con un maximo de 5 dias hábiles dentro de caba o provincia de buenos aires. Por compras desde el interior es a confirmar.</p>
      </div>
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
          </ul>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
