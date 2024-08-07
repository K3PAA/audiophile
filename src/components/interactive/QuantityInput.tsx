"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChangeEvent } from "react";

type QuantityInputProps = {
  cartInput: boolean;
  id: string;
  increase: () => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  decrease: () => void;
  amount: number;
};

export default function QuantityInput({
  amount,
  cartInput,
  increase,
  handleInputChange,
  decrease,
  id,
}: QuantityInputProps) {
  return (
    <div className="flex">
      <Label className="sr-only">Quantity</Label>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "rounded-0 h-full rounded-none bg-card hover:z-[1] hover:ring-2 hover:ring-ring/40 focus:z-[1] focus:ring-2 focus:ring-ring",
          cartInput && "h-8",
        )}
        onClick={(e) => {
          decrease();
          e.stopPropagation();
        }}
      >
        -
      </Button>
      <Input
        type="number"
        value={amount}
        className={cn(
          "number-input max-w-[100px] appearance-none rounded-none border-0 bg-card text-center hover:z-[1] hover:ring-2 hover:ring-ring/40 focus:z-[1] focus:ring-2 focus:ring-ring",
          cartInput && "h-8",
        )}
        onChange={handleInputChange}
      />
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "rounded-0 h-full rounded-none bg-card hover:z-[1] hover:ring-2 hover:ring-ring/40 focus:z-[1] focus:ring-2 focus:ring-ring",
          cartInput && "h-8",
        )}
        onClick={increase}
      >
        +
      </Button>
    </div>
  );
}
