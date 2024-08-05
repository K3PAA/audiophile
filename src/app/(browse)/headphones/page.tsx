import BrowseTitle from "@/components/browse/BrowseTitle";
import ProductCard from "@/components/browse/ProductCard";
import ProductContainer from "@/components/browse/ProductContainer";
import { data } from "../../../../public/data";

export default function page() {
  return (
    <>
      <BrowseTitle text="Headphones" />
      <ProductContainer>
        {data.products.headphones.map((product, i) => (
          <ProductCard
            key={product.base.description.title.model}
            image={{
              ...product.base.image,
              position: i % 2 === 0 ? "left" : "right",
            }}
            description={product.base.description}
          />
        ))}
      </ProductContainer>
    </>
  );
}
