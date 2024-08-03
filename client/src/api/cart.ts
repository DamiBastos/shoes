import { User } from "../types";

export const addItemToCart = async (productId: number,user: User | null) => {
    console.log("User en fetch",user);
    
  const response = await fetch('http://localhost:3000/carts/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId,user }),
  });

  if (!response.ok) {
    throw new Error('Error al agregar el producto al carrito');
  }

  const data = await response.json();
  return data;
};
