import { cn } from "@/lib/utils";
import ResponsiveImages from "../shared/ResponsiveImages";
import { Button } from "../ui/button";
import Link from "next/link";
import { CategoryType, ProductType } from "@/lib/types";

type ProductCardProps = {
  product: ProductType;
  category: CategoryType;
  position: "left" | "right";
};

export default function ProductCard({
  product,
  category,
  position,
}: ProductCardProps) {
  return (
    <section
      className={cn("grid gap-8 sm:gap-12 md:grid-cols-2 md:gap-8 lg:gap-20")}
      id={product.id}
    >
      <ResponsiveImages
        folder={product.folder}
        nameWithExtension="image-category-page-preview.jpg"
      />

      <ProductCardDescription
        category={category}
        position={position}
        product={product}
      />
    </section>
  );
}

type ProductCardDescriptionProps = ProductCardProps;

function ProductCardDescription({
  category,
  product,
  position,
}: ProductCardDescriptionProps) {
  const { isNew, title, text } = product.description;

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center md:items-start md:justify-center md:text-left",
        {
          "md:-order-1": position === "right",
        },
      )}
    >
      {isNew && (
        <p className="font-normal uppercase tracking-[0.75em] text-primary">
          NEW PRODUCT
        </p>
      )}
      <h1 className="mt-4 text-5xl font-bold uppercase text-black md:text-4xl lg:text-5xl">
        {title.model} <span className="block">{title.type}</span>
      </h1>
      <p className="mt-8 max-w-[60ch] text-black/50">{text}</p>
      <Button className="mt-10 uppercase" asChild>
        <Link href={`/${category}/${product.id}`}>See product</Link>
      </Button>
    </div>
  );
}
