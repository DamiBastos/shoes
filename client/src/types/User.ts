export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserContextType {
  user: User | null;
  cart: any;
  fetchCart: () => void;
}

