import { Button } from "@/components/ui/button";
import Image from "next/image";
import QuantityInput from "@/components/interactive/QuantityInput";
import { useEffect } from "react";
import { useCartContext } from "@/lib/hooks";

export default function CartPopup() {
  const { closeCart, isCartOpen } = useCartContext();

  useEffect(() => {
    const handleMouseEvent = (e: MouseEvent) => {
      const popupCart = document.getElementById("cart-popup")!;

      if (!popupCart.contains(e.target as Node)) {
        console.log("close");
        closeCart();
      }
    };

    window.addEventListener("click", handleMouseEvent);
    return () => {
      window.removeEventListener("click", handleMouseEvent);
    };
  }, [closeCart]);

  return (
    <section
      className="absolute right-0 top-24 rounded-md bg-white p-8 sm:min-w-[320px]"
      id="cart-popup"
    >
      <div className="flex items-center justify-between">
        <p className="text-nowrap font-bold uppercase text-black">cart (3)</p>{" "}
        <Button
          variant="ghost"
          className="h-10 capitalize text-black/50 underline decoration-black/20 underline-offset-4 hover:text-black hover:decoration-black focus:text-black focus:decoration-black"
        >
          Remove all
        </Button>
      </div>

      <section className="mt-8 grid gap-6">
        <CartItem item="XX59" />
      </section>

      <div className="mt-8 flex items-center justify-between">
        <p className="font-medium text-black/50">Total</p>
        <p className="font-bold text-black">$ 0.00</p>
      </div>

      <Button className="mt-6 w-full rounded-none uppercase">Checkout</Button>
    </section>
  );
}

function CartItem({ item }: { item: string }) {
  return (
    <div className="grid grid-cols-[4rem_1fr_6rem] items-center gap-4">
      <Image
        src="/cart/image-xx59-headphones.jpg"
        alt=""
        width={64}
        height={64}
        className="h-16 w-16 rounded-md"
      />
      <div className="text-nowrap font-bold">
        <p>{item}</p>
        <p className="text-black/50">$ 899</p>
      </div>
      <QuantityInput size="sm" />
    </div>
  );
}
