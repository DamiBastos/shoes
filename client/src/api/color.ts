import { link } from ".";
import { Color } from "../types";

export const listColors = async (): Promise<Color[]> => {
    try {
      const response = await fetch(`${link}/color`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.body;
    } catch (error) {
      console.error("Error fetching shoes:", error);
      return [];
    }
  };