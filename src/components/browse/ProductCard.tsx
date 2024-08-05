import { cn } from "@/lib/utils";
import ResponsiveImages from "../shared/ResponsiveImages";
import { Button } from "../ui/button";

type DeviceType = "headphones" | "earphones" | "speaker";

type ProductCardProps = {
  image: {
    position: "left" | "right";
    folder: string;
    nameWithExtension: string;
  };
  description: {
    isNew: boolean;
    title: {
      model: string;
      type: DeviceType;
    };
    text: string;
  };
};

export default function ProductCard({ image, description }: ProductCardProps) {
  return (
    <section
      className={cn("grid gap-8 sm:gap-12 md:grid-cols-2 md:gap-8 lg:gap-20")}
    >
      <ResponsiveImages
        folder={image.folder}
        nameWithExtension={image.nameWithExtension}
      />

      <ProductCardDescription
        position={image.position}
        isNew={description.isNew}
        title={description.title}
        text={description.text}
      />
    </section>
  );
}

type ProductCardDescriptionProps = ProductCardProps["description"] & {
  position?: "left" | "right";
};

function ProductCardDescription({
  isNew,
  title,
  text,
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
      <Button className="mt-10 uppercase">See product</Button>
    </div>
  );
}
