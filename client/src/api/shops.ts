import { Shop } from "../types/Shop";

export const userListShop = async (id: string | undefined): Promise<Shop[]> => {
    try {
      const response = await fetch(`http://localhost:3000/users/shops/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error("Error fetching shoes:", error);
      return [];
    }
  };

  export const   listShops = async () => {
    try {
      const response = await fetch(`http://localhost:3000/purchases`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error("Error fetching shops:", error);
      return [];
    }
  };

