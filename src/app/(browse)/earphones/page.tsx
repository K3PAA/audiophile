import BrowseTitle from "@/components/browse/BrowseTitle";
import ProductCard from "@/components/browse/ProductCard";
import ProductContainer from "@/components/browse/ProductContainer";

export default function page() {
  return (
    <>
      <BrowseTitle text="Earphones" />
      <ProductContainer>
        <ProductCard
          image={{
            position: "left",
            folder: "product-yx1-earphones",
            nameWithExtension: "image-category-page-preview.jpg",
          }}
          description={{
            isNew: true,
            title: {
              model: "YX1 WIRELESS",
              type: "earphones",
            },
            text: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
          }}
        />
      </ProductContainer>
    </>
  );
}
