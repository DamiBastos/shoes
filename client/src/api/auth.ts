// src/api/auth.ts
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:3000/users/login", {
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
    return data;
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
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}) => {
  try {
    const response = await fetch("http://localhost:3000/users/register", {
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
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error en el registro: " + error.message);
    } else {
      throw new Error("An unknown error occurred during registration");
    }
  }
};
