"use client";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/lib/hooks";
import { CartItemType } from "@/lib/types";

export default function AddToCartButton({
  src,
  name,
  price,
  amount,
  id,
  handleClick,
}: CartItemType & {
  handleClick: () => void;
}) {
  const { handleAddToCart, cart } = useCartContext();

  const alreadyInUse = Boolean(cart.find((p) => p.id === id));

  return (
    <Button
      disabled={alreadyInUse}
      className="rounded-none uppercase"
      onClick={() => {
        handleAddToCart({ id, name, src, price, amount });
        handleClick();
      }}
    >
      {alreadyInUse ? <>ITEM IN CARD</> : <>ADD TO CART</>}
    </Button>
  );
}
