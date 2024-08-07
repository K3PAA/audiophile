"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type QuantityInputProps = {
  id: string;
  size?: "sm" | "lg";
};

export default function QuantityInput({ id, size = "lg" }: QuantityInputProps) {
  const {
    increaseAmount,
    amount,
    cart,
    decreaseAmount,
    handleInputAmountChange,
  } = useCartContext();

  const cartItem = cart.find((item) => item.id === id);

  return (
    <div className="flex">
      <Label className="sr-only">Quantity</Label>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "rounded-0 h-full rounded-none bg-card hover:z-[1] hover:ring-2 hover:ring-ring/40 focus:z-[1] focus:ring-2 focus:ring-ring",
          size === "sm" && "h-8",
        )}
        onClick={decreaseAmount}
      >
        -
      </Button>
      <Input
        type="number"
        value={cartItem?.amount ?? amount}
        className={cn(
          "number-input max-w-[100px] appearance-none rounded-none border-0 bg-card text-center hover:z-[1] hover:ring-2 hover:ring-ring/40 focus:z-[1] focus:ring-2 focus:ring-ring",
          size === "sm" && "h-8",
        )}
        onChange={(e) => handleInputAmountChange(Number(e.target.value))}
      />
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "rounded-0 h-full rounded-none bg-card hover:z-[1] hover:ring-2 hover:ring-ring/40 focus:z-[1] focus:ring-2 focus:ring-ring",
          size === "sm" && "h-8",
        )}
        onClick={increaseAmount}
      >
        +
      </Button>
    </div>
  );
}
