"use client";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/lib/hooks";
import { CartItemType } from "@/lib/types";

export default function AddToCartButton({
  src,
  name,
  price,
  id,
}: Omit<CartItemType, "amount">) {
  const { handleAddToCart, amount } = useCartContext();

  return (
    <Button
      className="rounded-none uppercase"
      onClick={() => handleAddToCart({ id, name, src, price, amount })}
    >
      ADD TO CART
    </Button>
  );
}
