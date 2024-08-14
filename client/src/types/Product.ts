import { Size } from "./Size";

export interface Product {
  id?: number;
  model: string;
  brand: string;
  size?: number;
  genre: string;
  description: string;
  stock: number;
  Colors: Color[] | string[] | never[] | ColorShoe | any;
  Sizes?: Size[] | string[] | never[] | undefined | any;
  price: number;
  image?:string;
  discount: number;
  provider: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Color {
  id: number;
  name: string | never;
  color_shoe: ColorShoe | string;
}

interface ColorShoe {
  image: string;
}

export interface CardProps {
  id: number | undefined;
  nombre: string;
  imagen: string;
  talle: string;
  marca: string;
  precio: number;
  descuento: number;
  cuotas: number;
  openModal: (id: number) => void; // Tipo de la función openModal
}
