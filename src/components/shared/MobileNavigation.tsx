"use client";

import { useNavContext } from "@/lib/hooks";
import ThreeProducts from "./ThreeProducts";
import ThreeColSection from "./ThreeColSection";
import ProductCard from "./ProductCard";

export default function MobileNavigation() {
  const { isNavOpen, closeNavigation } = useNavContext();

  return (
    <>
      {isNavOpen && (
        <ThreeColSection className="absolute z-[1000] w-full rounded-b-[0.5rem] bg-white py-20 shadow-xl lg:hidden">
          <ProductCard
            src="/shared/desktop/image-category-thumbnail-headphones.png"
            text="Headphones"
            onClick={closeNavigation}
          />
          <ProductCard
            src="/shared/desktop/image-category-thumbnail-speakers.png"
            text="Speakers"
            onClick={closeNavigation}
          />
          <ProductCard
            src="/shared/desktop/image-category-thumbnail-earphones.png"
            text="Earphones"
            onClick={closeNavigation}
          />
        </ThreeColSection>
      )}
      {isNavOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 lg:hidden"></div>
      )}
    </>
  );
}
