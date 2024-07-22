// src/components/LoginForm.tsx
import React, { useState } from "react";
import InputField from "../InputField";
import ErrorMessage from "../ErrorMessage";
import ButtonStyled from "../StyledButton";
import { loginUser } from "../../api/auth";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData.email, formData.password);

      // Supongamos que el servidor responde con el usuario y un token
      console.log("Login successful", data);

      // Guardar el usuario (o token) en el almacenamiento local o en el estado de la aplicación
      localStorage.setItem("user", JSON.stringify(data.data));

      // Reset error
      setError(null);

      // Redirigir a la página de inicio o alguna otra página
      window.location.href = "/"; // O usa history.push('/') si estás usando react-router-dom
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error logging in:", error);
        setError(error.message);
      } else {
        console.error("Unexpected error logging in:", error);
        setError("Login failed. Please try again later.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <ErrorMessage message={error} />
      <InputField
        label="Email"
        type="email"
        name="email"
        id="email"
        value={formData.email}
        placeholder="Ej: Juan.Perez@email.com"
        onChange={handleChange}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        id="password"
        value={formData.password}
        placeholder="Contraseña"
        onChange={handleChange}
      />
      <div className="w-50">
        <a href="" className="align-self-start">
          ¿Olvidaste tu contraseña?
        </a>
        <div className="d-flex flex-column align-items-end w-100">
          <ButtonStyled texto="INICIAR SESIÓN" />
          <div>
            <h6>¿No tenés cuenta?</h6>
            <a href="/cuenta/registro">Crear cuenta</a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
