"use client";
import { CartItemType } from "@/lib/types";
import { createContext, ReactNode, useState, useEffect } from "react";

type CartContextType = {
  isCartOpen: boolean;
  toogleCart: () => void;
  closeCart: () => void;

  cart: CartItemType[];
  cartTotal: number;
  handleAddToCart: (item: CartItemType) => void;
  increaseCartAmount: (id: string) => void;
  decreaseCartAmount: (id: string) => void;
  handleChangeCartAmountInput: (id: string, value: number) => void;
  removeAllCartItems: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  const toogleCart = () => {
    setIsCartOpen((p) => !p);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    setCartTotal(cart.reduce((acc, item) => acc + item.price * item.amount, 0));
  }, [cart]);

  const increaseCartAmount = (id: string) => {
    setCart((p) => {
      return p.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    });
  };

  const handleChangeCartAmountInput = (id: string, value: number) => {
    setCart((p) => {
      return p.map((item) => {
        if (item.id === id) {
          if (value < 1) return { ...item, amount: 1 };
          return { ...item, amount: value };
        }
        return { ...item };
      });
    });
  };

  const decreaseCartAmount = (id: string) => {
    setCart((p) => {
      return p
        .map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 };
          }
          return { ...item };
        })
        .filter((item) => item.amount >= 1);
    });
  };

  const removeAllCartItems = () => {
    setCart([]);
  };

  const handleAddToCart = (item: CartItemType) => {
    setCart((p) => [...p, { ...item }]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        cartTotal,
        toogleCart,
        closeCart,
        decreaseCartAmount,
        increaseCartAmount,
        handleChangeCartAmountInput,
        removeAllCartItems,
        handleAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
