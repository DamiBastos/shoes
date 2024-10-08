import { link } from ".";

// src/api/auth.ts
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${link}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
        
     // Extraer el token del header
     const token = response.headers.get('auth-token');
     if (token) {
      // Aquí puedes guardar el token en localStorage, sessionStorage o en el estado global de tu aplicación
      localStorage.setItem('token',token);
    }
    return { ...data.body, token }; // Incluye el token en la respuesta para su uso inmediato si es necesario

  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error logging in: " + error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

// src/api/auth.ts
export const registerUser = async (formData: {
  username: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}) => {
  try {
    const response = await fetch(`${link}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error en el registro.");
    }

    const data = await response.json();
    console.log("Usuario login: ",data.body);
    
    return data.body;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error en el registro: " + error.message);
    } else {
      throw new Error("An unknown error occurred during registration");
    }
  }
};
