import BrowseTitle from "@/components/browse/BrowseTitle";
import ProductCard from "@/components/browse/ProductCard";
import ProductContainer from "@/components/browse/ProductContainer";

export default function page() {
  return (
    <>
      <BrowseTitle text="Speakers" />
      <ProductContainer>
        <ProductCard
          image={{
            position: "left",
            folder: "product-zx9-speaker",
            nameWithExtension: "image-category-page-preview.jpg",
          }}
          description={{
            isNew: true,
            title: {
              model: "ZX9",
              type: "speaker",
            },
            text: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
          }}
        />

        <ProductCard
          image={{
            position: "right",
            folder: "product-zx7-speaker",
            nameWithExtension: "image-category-page-preview.jpg",
          }}
          description={{
            isNew: false,
            title: {
              model: "ZX7",
              type: "speaker",
            },
            text: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
          }}
        />
      </ProductContainer>
    </>
  );
}
