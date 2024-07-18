export interface ProductCart {
  id: number;
  subtotal: number;
  total: number;
  items: any[]; // Ajusta el tipo de items según tu necesidad
}

export type CartSidebarProps = {
  show: boolean;
  handleClose: () => void;
  products: ProductCart; // Utiliza una unión de tipos para permitir que products sea un solo objeto o un array de objetos
};
