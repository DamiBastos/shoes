import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { User, UserContextType } from "../types";
import { link } from "../api";

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<any>(null); // Especifica el tipo si es posible
  const [shopList, setShopList] = useState<any>(null); // Especifica el tipo si es posible

  useEffect(() => {
    const storedUser = localStorage.getItem("user");    
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser).user;
      setUser(parsedUser);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      
      if (user && !user.isAdmin) {
        await fetchCart();
        await fetchShopList();
      }
    };

    fetchUserData();
  }, [user]);

  const fetchCart = async () => {
    try {
      const response = await axios.get(
        `${link}/cart/${user?.id}`
      );
      setCart(response.data.body.cart);

    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const fetchShopList = async () => {
    try {
      const response = await axios.get(
        `${link}/purchase/user/${user?.id}`
      );
      setShopList(response.data.body);
    } catch (error) {
      console.error("Error fetching shop list:", error);
    }
  };

  useEffect(() => {    
  }, [cart]);

  return (
    <UserContext.Provider value={{ user, cart, shopList, fetchCart, fetchShopList }}>
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
