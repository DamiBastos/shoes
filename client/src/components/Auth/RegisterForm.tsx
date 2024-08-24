// src/components/RegisterForm.tsx
import React, { useState } from "react";
import { registerUser } from "../../api/auth";
import ErrorMessage from "../ErrorMessage";
import InputField from "../InputField";
import ButtonStyled from "../StyledButton";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { username, email, password, passwordConfirm } = formData;

    // Validar campos vacíos
    if (!username || !email || !password || !passwordConfirm) {
      setErrors("Por favor, complete todos los campos obligatorios.");
      return;
    }

    // Validar contraseñas coincidentes
    if (password !== passwordConfirm) {
      setErrors("Las contraseñas no coinciden.");
      return;
    }

    try {
      const data = await registerUser(formData);

      // Procesar la respuesta exitosa
      console.log("Registro exitoso:", data);
      // Aquí puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
      window.location.href = "/login";
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error en el registro:", error);
        setErrors(error.message);
      } else {
        console.error("Unexpected error in registration:", error);
        setErrors("Error en el servidor. Inténtalo más tarde.");
      }
    }
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <InputField
        label="Nombre de usuario"
        type="text"
        name="username"
        id="username"
        value={formData.username}
        placeholder="Ej: Juan Perez"
        onChange={handleChange}
      />
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
        label="Teléfono (Opcional)"
        type="text"
        name="phone"
        id="phone"
        value={formData.phone}
        placeholder="Ej: 1150042472"
        onChange={handleChange}
      />
      <InputField
        label="Contraseña"
        type="password"
        name="password"
        id="password"
        value={formData.password}
        placeholder="Contraseña"
        onChange={handleChange}
      />
      <InputField
        label="Confirmar contraseña"
        type="password"
        name="passwordConfirm"
        id="passwordConfirm"
        value={formData.passwordConfirm}
        placeholder="Confirmar contraseña"
        onChange={handleChange}
      />
      <div className="w-50">
        <div className="d-flex flex-column align-items-center w-100  gap-2">
          <ButtonStyled texto="CREAR CUENTA" />
          <div>
            <h6>¿Ya tenés cuenta?</h6>
            <a href="/login">Iniciá sesión</a>
          </div>
        </div>
      </div>
      <ErrorMessage message={errors} />

    </form>
  );
};

export default RegisterForm;
