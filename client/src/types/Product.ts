import { Size } from "./Size";

export interface Product {
  id: number;
  model: string;
  brand: string;
  size: number;
  genre: string;
  description: string;
  stock: number;
  Colors: Color[];
  Sizes: Size[];
  price: number;
  discount: number;
  provider: string;
  createdAt: string;
  updatedAt: string;
}
interface ColorShoe {
  image: string;
}

export interface Color {
  id: number;
  name: string;
  color_shoe: ColorShoe;
}

export interface CardProps {
  id: number;
  nombre: string;
  imagen: string;
  precio: number;
  descuento: number;
  cuotas: number;
  openModal: (id: number) => void; // Tipo de la función openModal
}
