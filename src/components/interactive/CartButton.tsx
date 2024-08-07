"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import CartPopup from "@/components/shared/cart/CartPopup";
import { useCartContext, useNavContext } from "@/lib/hooks";

export default function CartButton() {
  const { isCartOpen, toogleCart } = useCartContext();
  const { closeNavigation } = useNavContext();

  return (
    <div className="relative ml-0 sm:ml-auto lg:ml-0">
      <Button
        size="icon"
        variant="ghost"
        className="opacity-60 transition-opacity duration-300 hover:opacity-100"
        onClick={(e) => {
          toogleCart();
          closeNavigation();
          e.stopPropagation();
        }}
      >
        <Image
          src="/shared/desktop/icon-cart.svg"
          alt="Cart"
          width={24}
          height={24}
        />
      </Button>

      {isCartOpen && <CartPopup />}
      {isCartOpen && <div className="fixed inset-0 z-[-1] bg-black/50"></div>}
    </div>
  );
}
