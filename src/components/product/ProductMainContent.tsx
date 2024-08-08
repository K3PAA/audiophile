import { ProductType } from "@/lib/types";

import ButtonsContainer from "./ButtonsContainer";

type ProductMainContentProps = {
  product: ProductType;
};

export default function ProductMainContent({
  product,
}: ProductMainContentProps) {
  const {
    isNew,
    title: { model, type },
    text,
  } = product.description;

  return (
    <div className="flex flex-col justify-center sm:col-span-3 md:col-span-1">
      {isNew && (
        <p className="font-normal uppercase tracking-[0.75em] text-primary">
          NEW PRODUCT
        </p>
      )}
      <h1 className="mt-4 text-3xl font-bold uppercase text-black md:text-4xl lg:text-5xl">
        {model} <span className="block">{type}</span>
      </h1>
      <p className="mt-4 max-w-[60ch] text-black/50 lg:mt-8">{text}</p>

      <p className="mt-4 text-xl tracking-widest text-black lg:mt-8">
        ${product.additional.price.toLocaleString("en-US")}
      </p>
      <ButtonsContainer product={product} />
    </div>
  );
}
