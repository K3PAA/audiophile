import { ProductType } from "@/lib/types";
import ResponsiveImages from "../shared/ResponsiveImages";
import ProductMainContent from "./ProductMainContent";

type ProductProps = {
  product: ProductType;
};

export default function ProductDisplay({ product }: ProductProps) {
  return (
    <main className="container">
      <section className="mb-40 grid gap-4 sm:grid-cols-5 md:grid-cols-2 lg:gap-20">
        <div className="sm:col-span-2 md:col-span-1">
          <ResponsiveImages
            folder={product.folder}
            nameWithExtension="image-product.jpg"
          />
        </div>
        <ProductMainContent product={product} />
      </section>
    </main>
  );
}
