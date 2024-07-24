export interface Product {
  id: number;
  model: string;
  brand: string;
  color: string;
  size: number;
  genre: string;
  description: string;
  stock: number;
  image: string;
  price: number;
  discount: number;
  provider: string;
  createdAt: string;
  updatedAt: string;
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
