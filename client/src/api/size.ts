import { link } from ".";
import { Size } from "../types/Size";

export const listSizes = async (): Promise<Size[]> => {
    try {
      const response = await fetch(`${link}/size`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }      
      const data = await response.json();
      console.log(data);
      return data.body;
    } catch (error) {
      console.error("Error fetching shoes:", error);
      return [];
    }
  };