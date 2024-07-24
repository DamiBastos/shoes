import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { User, UserContextType } from "../types";

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState(null);
  const [shopList, setShopList] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser).user;
      setUser(parsedUser);
    }
  }, []);

  const fetchCart = async () => {
    if (user) {
      try {
        const response = await axios.get(
          `http://localhost:3000/carts/${user.id}`
        );
        setCart(response.data.cart);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    }
  };

  const fetchShopList = async () => {
    if (user) {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/shops/${user.id}`
        );
        setShopList(response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    }
  };


  return (
    <UserContext.Provider value={{ user, cart,shopList, fetchCart, fetchShopList }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
