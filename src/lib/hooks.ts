import { CartContext } from "@/context/CartContext";
import { NavContext } from "@/context/NavContext";
import { useContext } from "react";

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (context === null) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }
  return context;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};
