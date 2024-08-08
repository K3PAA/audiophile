import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { useCartContext } from "@/lib/hooks";
import CartItem from "../shared/cart/CartItem";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Popup() {
  const { cart, cartTotal, removeAllCartItems } = useCartContext();

  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <section className="fixed left-1/2 top-1/2 z-[1000] min-h-[580px] w-full max-w-[450px] -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-md sm:w-auto sm:min-w-[540px] sm:rounded-[0.5rem] sm:p-12">
        <Image
          src="/checkout/icon-order-confirmation.svg"
          alt=""
          width={64}
          height={64}
          className="mb-8"
        />

        <h3 className="mb-6 text-4xl font-medium uppercase text-black">
          THANK YOU <span className="block">FOR YOUR ORDER</span>
        </h3>

        <p className="mb-8 text-black/50">
          You will receive an email confirmation shortly.
        </p>

        <section className="mb-12 grid grid-cols-[3fr_2fr]">
          <div className="rounded-l-[0.5rem] bg-card p-6">
            <div
              className={cn("", {
                "border-b-2 pb-2": cart.length > 1,
              })}
            >
              {cart.map((item, i) => {
                if (i === 0 || showAll)
                  return <CartItem key={item.id} item={item} checkout={true} />;
              })}
            </div>
            {cart.length > 1 && (
              <Button
                variant="ghost"
                className="h-9 w-full text-center text-black/50"
                onClick={() => setShowAll((p) => !p)}
              >
                {showAll ? (
                  <>view less</>
                ) : (
                  <>and {cart.length - 1} other item(s) </>
                )}
              </Button>
            )}
          </div>
          <div className="flex flex-col items-start justify-end gap-2 rounded-r-[0.5rem] bg-black px-4 py-10">
            <p className="font-medium text-white/50">GRAND TOTAL</p>
            <p className="font-bold text-white">
              ${(cartTotal + 50).toLocaleString("en-US")}
            </p>
          </div>
        </section>

        <Button
          asChild
          size="lg"
          className="w-full rounded-none"
          onClick={removeAllCartItems}
        >
          <Link href="/">Back To Home</Link>
        </Button>
      </section>

      <div className="fixed inset-0 z-10 bg-black/50"></div>
    </>
  );
}
