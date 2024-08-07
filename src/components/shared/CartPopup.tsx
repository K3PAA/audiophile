import { Button } from "@/components/ui/button";
import Image from "next/image";
import QuantityInput from "@/components/interactive/QuantityInput";
import { ChangeEvent, useEffect } from "react";
import { useCartContext } from "@/lib/hooks";
import { CartItemType } from "@/lib/types";

export default function CartPopup() {
  const { closeCart, removeAllCartItems, cart, cartTotal } = useCartContext();

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
        {cart.length > 0 ? (
          <Button
            variant="ghost"
            className="h-10 capitalize text-black/50 underline decoration-black/20 underline-offset-4 hover:text-black hover:decoration-black focus:text-black focus:decoration-black"
            onClick={(e) => {
              removeAllCartItems();
              e.stopPropagation();
            }}
          >
            Remove all
          </Button>
        ) : (
          <p className="text-sm text-black/50">Your cart is empty</p>
        )}
      </div>

      <section className="mt-8 grid gap-6">
        {cart.length > 0 &&
          cart.map((item) => <CartItem key={item.id} item={item} />)}
      </section>

      <div className="mt-8 flex items-center justify-between">
        <p className="font-medium text-black/50">Total</p>
        <p className="font-bold text-black">$ {cartTotal}</p>
      </div>

      <Button className="mt-6 w-full rounded-none uppercase">Checkout</Button>
    </section>
  );
}

function CartItem({ item }: { item: CartItemType }) {
  const {
    decreaseCartAmount,
    increaseCartAmount,
    handleChangeCartAmountInput,
  } = useCartContext();

  return (
    <div className="grid grid-cols-[4rem_1fr_6rem] items-center gap-4">
      <Image
        src={item.src}
        alt=""
        width={64}
        height={64}
        className="h-16 w-16 rounded-md"
      />
      <div className="text-nowrap font-bold">
        <p>{item.name}</p>
        <p className="text-black/50">$ {item.price}</p>
      </div>
      <QuantityInput
        cartInput={true}
        id={item.id}
        amount={item.amount}
        handleInputChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChangeCartAmountInput(item.id, Number(e.target.value))
        }
        decrease={() => decreaseCartAmount(item.id)}
        increase={() => increaseCartAmount(item.id)}
      />
    </div>
  );
}
