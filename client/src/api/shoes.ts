import { Product } from "../types";

export const listShoes = async (): Promise<Product[]> => {
  try {
    const response = await fetch("http://localhost:3000/shoe");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Productos axios:", data.body);
    
    return data.body; 
  } catch (error) {
    console.error("Error fetching shoes:", error);
    return [];
  }
};

export const productDetail = async (id: string | undefined) => {
      try {
        const response = await fetch(`http://localhost:3000/shoe/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.body;
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    export const productDelete = async (id: string | undefined) => {
      try {
        const response = await fetch(`http://localhost:3000/shoe/delete/${id}`,
          {
            method: 'DELETE', 
          }
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        alert("Producto eliminado exitosamente")

        return data;
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };