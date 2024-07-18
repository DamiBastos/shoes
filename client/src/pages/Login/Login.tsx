// src/pages/Login.tsx
import React from "react";
import LoginForm from "../../components/Auth/LoginForm";

const Login: React.FC = () => {
  return (
    <article className="d-flex flex-column align-items-center justify-content-center">
      <section className="d-flex flex-column align-items-center justify-content-center w-100 border">
        <div>
          <a href="/"> Inicio </a>
          <h6>Login</h6>
        </div>
        <h2>INICIAR SESIÓN</h2>
      </section>
      <section className="d-flex flex-column w-50">
        <LoginForm />
      </section>
    </article>
  );
};

export default Login;
