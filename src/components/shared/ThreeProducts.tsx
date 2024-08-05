import ThreeColSection from "@/components/shared/ThreeColSection";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThreeProducts() {
  return (
    <ThreeColSection className="container mb-40">
      <ProductCard
        src="/shared/desktop/image-category-thumbnail-headphones.png"
        text="Headphones"
      />
      <ProductCard
        src="/shared/desktop/image-category-thumbnail-speakers.png"
        text="Speakers"
      />
      <ProductCard
        src="/shared/desktop/image-category-thumbnail-earphones.png"
        text="Earphones"
      />
    </ThreeColSection>
  );
}

type ProductCardProps = {
  src: string;
  text: string;
};

function ProductCard({ src, text }: ProductCardProps) {
  return (
    <Link
      href={`/${text.toLowerCase()}#${text.toLowerCase()}`}
      className="group mx-auto w-full max-w-[400px] rounded-[0.5rem] bg-card transition hover:-translate-y-[0.5rem] focus:-translate-y-[0.5rem] md:max-w-full"
    >
      <div className="flex -translate-y-1/4 flex-col items-center">
        <Image
          src={src}
          width={120}
          height={160}
          alt=""
          className="mx-auto w-1/2 transition-all group-hover:scale-110 group-focus:scale-110"
        />

        <h3 className="text-center text-xl uppercase text-foreground">
          {text}
        </h3>
        <Button
          tabIndex={-1}
          variant="outline"
          size="sm"
          className="gap-2 group-hover:text-primary group-focus:text-primary"
        >
          buy now
          <Image
            src="/shared/desktop/icon-arrow-right.svg"
            width={10}
            height={20}
            alt=""
          />
        </Button>
      </div>
    </Link>
  );
}
