import { CartItemType } from "@/lib/types";
import Image from "next/image";
import QuantityInput from "@/components/interactive/QuantityInput";
import { ChangeEvent } from "react";
import { useCartContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export default function CartItem({
  item,
  checkout = false,
}: {
  item: CartItemType;
  checkout?: boolean;
}) {
  const {
    decreaseCartAmount,
    increaseCartAmount,
    handleChangeCartAmountInput,
  } = useCartContext();

  return (
    <div
      className={cn("grid grid-cols-[4rem_1fr_6rem] items-center gap-4", {
        "grid-cols-[4rem_1fr_auto]": checkout,
      })}
    >
      <Image
        src={item.src}
        alt=""
        width={64}
        height={64}
        className="h-16 w-16 rounded-md"
      />
      <div className="text-nowrap font-bold">
        <p>{item.name}</p>
        <p className="text-black/50">$ {item.price.toLocaleString("en-US")}</p>
      </div>
      {checkout ? (
        <p className="text-black/50"> x{item.amount}</p>
      ) : (
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
      )}
    </div>
  );
}
