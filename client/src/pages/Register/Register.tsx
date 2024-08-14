// src/pages/Register.tsx
import React from "react";
import RegisterForm from "../../components/Auth/RegisterForm";

const Register: React.FC = () => {
  return (
    <article className="d-flex flex-column align-items-center justify-content-center">
      <section className="d-flex flex-column align-items-center justify-content-center w-100">
        <div className="d-flex align-items-center justify-content-center gap-1">
          <a className="" href="/">
            Inicio
          </a>
          <h6 className="m-0">Registro</h6>
        </div>
        <h2 className="title">CREAR CUENTA</h2>
        <h6>
          Comprá más rápido y llevá el control de tus pedidos, ¡en un solo
          lugar!
        </h6>
      </section>
      <section className="d-flex flex-column w-50">
        <RegisterForm />
      </section>
    </article>
  );
};

export default Register;
