import { Product } from "../types";

export const listShoes = async (): Promise<Product[]> => {
  try {
    const response = await fetch("http://localhost:3000/shoes");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("soy data: ", data);
    return data.shoes; // Asegúrate de que `data.shoes` sea del tipo `Product[]`
  } catch (error) {
    console.error("Error fetching shoes:", error);
    return [];
  }
};

export const productDetail = async (id: string | undefined) => {
      try {
        const response = await fetch(`http://localhost:3000/shoes/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.shoe;
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };