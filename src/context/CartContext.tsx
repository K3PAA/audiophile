"use client";
import { CartItemType } from "@/lib/types";
import { createContext, ReactNode, useState } from "react";

type CartContextType = {
  isCartOpen: boolean;
  toogleCart: () => void;
  closeCart: () => void;

  cart: CartItemType[];
  handleAddToCart: (item: CartItemType) => void;

  amount: number;
  increaseAmount: () => void;
  decreaseAmount: () => void;
  handleInputAmountChange: (amount: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [amount, setAmount] = useState(0);

  const toogleCart = () => {
    setIsCartOpen((p) => !p);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const increaseAmount = () => {
    setAmount((p) => p + 1);
  };
  const decreaseAmount = () => {
    setAmount((p) => p - 1);
  };

  const handleInputAmountChange = (amount: number) => {
    setAmount(amount);
  };

  const handleAddToCart = (item: CartItemType) => {
    setCart((p) => [...p, item]);
    setAmount(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        amount,
        toogleCart,
        closeCart,
        handleInputAmountChange,
        handleAddToCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
