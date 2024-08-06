import ThreeColSection from "@/components/shared/ThreeColSection";

import { cn } from "@/lib/utils";
import ProductCard from "./ProductCard";

export default function ThreeProducts() {
  return (
    <ThreeColSection className={cn("container mb-40")}>
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
