"use client";
import CartItem from "@/components/shared/cart/CartItem";
import { useCartContext } from "@/lib/hooks";
import { Button } from "../ui/button";

type CheckoutSummaryProps = {
  onOrderMade: () => void;
};

export default function CheckoutSummary({ onOrderMade }: CheckoutSummaryProps) {
  const { cart, cartTotal } = useCartContext();

  return (
    <section className="sticky top-4 grid gap-8 self-start rounded-md bg-white p-8 shadow-md md:p-4 lg:p-8">
      <h3 className="font-bold uppercase text-black">Summary</h3>
      <div className="grid gap-3">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} checkout={true} />
        ))}
      </div>
      <div className="flex flex-col gap-2 font-medium">
        <p className="flex justify-between uppercase text-black/50">
          Total: <span className="font-bold text-black">$ {cartTotal}</span>
        </p>
        <p className="flex justify-between uppercase text-black/50">
          SHIPPING: <span className="font-bold text-black">$ 50</span>
        </p>
        <p className="flex justify-between uppercase text-black/50">
          VAT (INCLUDED):{" "}
          <span className="font-bold text-black">
            {" "}
            $ {(cartTotal * 0.201).toFixed(2)}
          </span>
        </p>

        <p className="mt-2 flex justify-between uppercase text-black/50">
          Grand Total:{" "}
          <span className="font-bold text-primary">$ {cartTotal + 50}</span>
        </p>
      </div>

      <Button className="rounded-none" type="submit" onClick={onOrderMade}>
        Continue & Pay
      </Button>
    </section>
  );
}
