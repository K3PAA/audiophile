import { ProductType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type ProductMainContentProps = {
  product: ProductType;
};

export default function ProductMainContent({
  product,
}: ProductMainContentProps) {
  const { isNew, title, text } = product.description;

  return (
    <div className="flex flex-col justify-center sm:col-span-3 md:col-span-1">
      {isNew && (
        <p className="font-normal uppercase tracking-[0.75em] text-primary">
          NEW PRODUCT
        </p>
      )}
      <h1 className="mt-4 text-3xl font-bold uppercase text-black md:text-4xl lg:text-5xl">
        {title.model} <span className="block">{title.type}</span>
      </h1>
      <p className="mt-4 max-w-[60ch] text-black/50 lg:mt-8">{text}</p>

      <p className="mt-4 text-xl tracking-widest text-black lg:mt-8">
        ${product.additional.price}
      </p>
      <div className="mt-6 flex gap-4 lg:mt-12">
        <div className="flex">
          <Label className="sr-only">Quantity</Label>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-0 h-full rounded-none bg-card hover:z-[1] hover:ring-2 hover:ring-ring/40 focus:z-[1] focus:ring-2 focus:ring-ring"
          >
            -
          </Button>
          <Input
            type="number"
            defaultValue={1}
            className="number-input max-w-[100px] appearance-none rounded-none border-0 bg-card text-center hover:z-[1] hover:ring-2 hover:ring-ring/40 focus:z-[1] focus:ring-2 focus:ring-ring"
          />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-0 h-full rounded-none bg-card hover:z-[1] hover:ring-2 hover:ring-ring/40 focus:z-[1] focus:ring-2 focus:ring-ring"
          >
            +
          </Button>
        </div>
        <Button className="rounded-none uppercase">ADD TO CART</Button>
      </div>
    </div>
  );
}
