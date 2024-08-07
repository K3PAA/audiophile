"use client";
import { createContext, ReactNode, useState } from "react";

type CartContextType = {
  isCartOpen: boolean;
  toogleCart: () => void;
  closeCart: () => void;

  cart: string[];
  amount: number;
  increaseAmount: () => void;
  decreaseAmount: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<string[]>([]);
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

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        amount,
        toogleCart,
        closeCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
