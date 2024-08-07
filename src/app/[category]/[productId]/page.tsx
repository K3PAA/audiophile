import ThreeProducts from "@/components/shared/ThreeProducts";
import { data } from "@/../public/data";
import { redirect } from "next/navigation";
import { CategoryType } from "@/lib/types";
import Link from "next/link";
import ProductDisplay from "@/components/product/ProductDisplay";
import Gallery from "@/components/product/Gallery";
import AdditionalInfo from "@/components/product/AdditionalInfo";
import Suggestions from "@/components/product/Suggestions";

type ProductParams = {
  params: { productId: string; category: string };
};

export default function page({ params }: ProductParams) {
  const { category, productId } = params;

  if (!(category in data.products)) {
    redirect("/");
  }

  const product = data.products[category as CategoryType].find((p) => {
    return productId === p.id;
  });

  if (!product) {
    console.log(
      productId,
      data.products[category as CategoryType].map((p) => p.id),
    );
    redirect("/");
  }

  return (
    <>
      <div className="container mb-6 mt-4 sm:mt-8 md:mb-14 md:mt-20">
        <Link href={`/${category}`} className="text-black/50">
          Go Back
        </Link>
      </div>

      <ProductDisplay product={product} />

      <AdditionalInfo additional={product.additional} />

      <Gallery folder={product.folder} />

      <Suggestions product={product} category={category as CategoryType} />

      <ThreeProducts />
    </>
  );
}
