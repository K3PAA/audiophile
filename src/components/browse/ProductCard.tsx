import { cn } from "@/lib/utils";
import ResponsiveImages from "../shared/ResponsiveImages";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProductBase } from "@/lib/types";

type ProductCardProps = ProductBase & {
  image: {
    position: "left" | "right";
  };
};

export default function ProductCard({ image, description }: ProductCardProps) {
  return (
    <section
      className={cn("grid gap-8 sm:gap-12 md:grid-cols-2 md:gap-8 lg:gap-20")}
      id={description.title.model.split(" ").join("")}
    >
      <ResponsiveImages
        folder={image.folder}
        nameWithExtension={image.nameWithExtension}
      />

      <ProductCardDescription
        position={image.position}
        description={description}
      />
    </section>
  );
}

type ProductCardDescriptionProps = {
  description: ProductCardProps["description"];
} & {
  position?: "left" | "right";
};

function ProductCardDescription({
  description: { isNew, title, text },
  position,
}: ProductCardDescriptionProps) {
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
        <Link href={`/detail/${title.model.split(" ").join("-")}`}>
          See product
        </Link>
      </Button>
    </div>
  );
}
