"use client";
import QuantityInput from "../interactive/QuantityInput";
import AddToCartButton from "../interactive/AddToCartButton";
import { ProductType } from "@/lib/types";
import { ChangeEvent, useState } from "react";

type ButtonsContainerProps = {
  product: ProductType;
};

export default function ButtonsContainer({ product }: ButtonsContainerProps) {
  const {
    title: { model, type },
  } = product.description;
  const [stateAmount, setStateAmount] = useState(1);

  const increaseStateAmount = () => setStateAmount((p) => p + 1);
  const decreaseStateAmount = () =>
    setStateAmount((p) => {
      return p - 1 > 1 ? p - 1 : 1;
    });
  const handleInputAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) {
      return setStateAmount(0);
    }
    return setStateAmount(Number(e.target.value));
  };
  const resetStateAmount = () => setStateAmount(0);

  return (
    <div className="mt-6 flex gap-4 lg:mt-12">
      <QuantityInput
        cartInput={false}
        id={product.id}
        increase={increaseStateAmount}
        decrease={decreaseStateAmount}
        handleInputChange={handleInputAmountChange}
        amount={stateAmount}
      />
      <AddToCartButton
        src={`/cart/image-${model.split(" ").join("-")}-${type}.jpg`.toLowerCase()}
        name={model}
        amount={stateAmount}
        price={product.additional.price}
        id={product.id}
        handleClick={resetStateAmount}
      />
    </div>
  );
}
