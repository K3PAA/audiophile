import { ProductAdditional } from "@/lib/types";

type AdditionalInfoProps = {
  additional: ProductAdditional;
};

export default function AdditionalInfo({ additional }: AdditionalInfoProps) {
  return (
    <section className="container mb-40 grid gap-20 sm:gap-[7.5rem] lg:grid-cols-[2fr_1fr] lg:gap-20">
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl font-semibold uppercase text-black">
          Features
        </h2>

        <ul className="flex flex-col gap-4">
          {additional.features.map((feature, i) => (
            <li key={i} className="flex gap-6">
              <p className="text-black/50">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-8 sm:flex-row lg:flex-col">
        <h2 className="text-4xl font-semibold uppercase text-black sm:flex-1 lg:flex-none">
          In the box
        </h2>

        <ul className="flex flex-col gap-2 sm:flex-1 lg:flex-none">
          {additional.inBox.map((item, i) => (
            <li key={i} className="flex gap-6">
              <span className="font-bold text-primary">{item.amount}x</span>
              <span className="font-medium text-black/50">{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
