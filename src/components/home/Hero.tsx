import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="mb-20 overflow-hidden bg-black bg-[url(/home/mobile/image-header.jpg)] bg-cover bg-bottom bg-no-repeat sm:bg-[url(/home/tablet/image-header.jpg)] md:bg-center lg:bg-[url(/home/desktop/image-hero.jpg)] lg:bg-[center_bottom_2rem]">
      <section className="container grid place-items-center py-20 sm:pb-[9rem] sm:pt-[8rem] lg:grid-cols-[2fr_3fr]">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <p className="tracking-[0.425em] text-white/50">NEW PRODUCT</p>
          <h1 className="max-w-[12ch] text-5xl font-semibold text-white sm:text-7xl">
            XX99 Mark II <span className="uppercase">Headphones</span>
          </h1>
          <p className="mx-auto max-w-[35ch] text-white/75 lg:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button className="mt-4 self-center rounded-none uppercase lg:self-start">
            see product
          </Button>
        </div>
      </section>
    </main>
  );
}
