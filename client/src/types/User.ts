export interface User {
  id: number;
  username: string;
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
  shopList: any;
  fetchCart: () => void;
  fetchShopList: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;

}

