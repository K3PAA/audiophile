import BrowseTitle from "@/components/browse/BrowseTitle";
import ProductCard from "@/components/browse/ProductCard";
import ProductContainer from "@/components/browse/ProductContainer";

export default function page() {
  return (
    <>
      <BrowseTitle text="Headphones" />
      <ProductContainer>
        <ProductCard
          image={{
            position: "left",
            folder: "product-xx99-mark-two-headphones",
            nameWithExtension: "image-category-page-preview.jpg",
          }}
          description={{
            isNew: true,
            title: {
              model: "XX99 Mark II",
              type: "headphones",
            },
            text: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
          }}
        />

        <ProductCard
          image={{
            position: "right",
            folder: "product-xx99-mark-one-headphones",
            nameWithExtension: "image-category-page-preview.jpg",
          }}
          description={{
            isNew: false,
            title: {
              model: "XX99 Mark I",
              type: "headphones",
            },
            text: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
          }}
        />

        <ProductCard
          image={{
            position: "left",
            folder: "product-xx59-headphones",
            nameWithExtension: "image-category-page-preview.jpg",
          }}
          description={{
            isNew: false,
            title: {
              model: "XX59",
              type: "headphones",
            },
            text: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It  redefines your premium headphone experience by reproducing the balanced  depth and precision of studio-quality sound.",
          }}
        />
      </ProductContainer>
    </>
  );
}
