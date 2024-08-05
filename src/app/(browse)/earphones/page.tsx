import BrowseTitle from "@/components/browse/BrowseTitle";
import ProductCard from "@/components/browse/ProductCard";
import ProductContainer from "@/components/browse/ProductContainer";
import { data } from "../../../../public/data";

export default function page() {
  return (
    <>
      <BrowseTitle text="Earphones" />
      <ProductContainer>
        {data.products.earphones.map((product, i) => (
          <ProductCard
            key={product.description.title.model}
            image={{
              ...product.image,
              position: i % 2 === 0 ? "left" : "right",
            }}
            description={product.description}
          />
        ))}
      </ProductContainer>
    </>
  );
}
