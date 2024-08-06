import BrowseTitle from "@/components/browse/BrowseTitle";
import ProductCard from "@/components/browse/ProductCard";
import ProductContainer from "@/components/browse/ProductContainer";
import { data } from "@/../public/data";
import { CategoryType } from "@/lib/types";
import { redirect } from "next/navigation";
import { capitalize } from "@/lib/utils";
import ThreeProducts from "@/components/shared/ThreeProducts";

type CategoryParams = {
  params: { category: string };
};

export default function page({ params }: CategoryParams) {
  const category = params.category;

  const categoryData =
    category in data.products ? data.products[category as CategoryType] : null;

  if (!categoryData) {
    return redirect("/");
  }

  return (
    <>
      <BrowseTitle text={capitalize(category)} />
      <ProductContainer>
        {categoryData.map((product, i) => (
          <ProductCard
            category={category as CategoryType}
            key={product.description.title.model}
            folder={product.folder}
            position={i % 2 === 0 ? "left" : "right"}
            description={product.description}
          />
        ))}
      </ProductContainer>
      <ThreeProducts />
    </>
  );
}
