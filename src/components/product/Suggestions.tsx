import { CategoryType, ProductType } from "@/lib/types";
import React from "react";
import { data } from "@/../public/data";
import ResponsiveImages from "../shared/ResponsiveImages";
import { Button } from "../ui/button";
import Link from "next/link";

type SuggestionsProps = {
  product: ProductType;
  category: CategoryType;
};

export default function Suggestions({ product, category }: SuggestionsProps) {
  console.log(product.description.title.model);

  const suggestions = data.products[category].filter(
    (p) => p.description.title.model !== product.description.title.model,
  );

  if (suggestions.length < 3) {
    const additionalData = data.products[
      category !== "headphones" ? "headphones" : "speakers"
    ].filter(
      (p) => p.description.title.model !== product.description.title.model,
    );

    suggestions.push(...additionalData);
  }

  const threeItemsArray = suggestions.slice(0, 3);
  console.log(threeItemsArray);

  return (
    <section className="container mb-40">
      <h3 className="text-center text-3xl font-semibold uppercase text-black">
        you may also like
      </h3>

      <div className="mt-16 grid gap-8 sm:grid-cols-3 lg:gap-12">
        {threeItemsArray.map((product) => (
          <SuggestionCard
            key={product.description.title.model}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

function SuggestionCard({ product }: { product: ProductType }) {
  return (
    <Link
      href={`/${product.additional.category}/${product.description.title.model.split(" ").join("-")}`}
      className="mx-auto flex w-full max-w-[300px] flex-col items-center gap-8 transition-all duration-300 hover:scale-[1.03] sm:mx-0 sm:max-w-full"
    >
      <ResponsiveImages
        folder={product.folder}
        nameWithExtension="image-product.jpg"
      />
      <p className="text-2xl font-bold text-black">
        {product.description.title.model}
      </p>

      <Button className="rounded-none" size="lg" tabIndex={-1}>
        See Product
      </Button>
    </Link>
  );
}
