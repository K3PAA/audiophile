import { data } from "@/../public/data";

import BrowseTitle from "@/components/browse/BrowseTitle";
import ProductCard from "@/components/browse/ProductCard";
import ProductContainer from "@/components/browse/ProductContainer";

export default function page() {
  return (
    <>
      <BrowseTitle text="Speakers" />
      <ProductContainer>
        {data.products.speaker.map((product, i) => (
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
