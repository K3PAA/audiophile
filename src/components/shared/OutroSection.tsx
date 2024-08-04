import Image from "next/image";

export default function OutroSection() {
  return (
    <section className="container mb-[12.5rem] grid gap-16 lg:grid-cols-2 lg:gap-20">
      <div className="order-2 flex flex-col items-center justify-center gap-6 lg:order-1 lg:gap-8">
        <h2 className="mx-auto max-w-[20ch] text-center text-[2rem] font-semibold uppercase sm:text-5xl sm:font-bold lg:text-start">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h2>
        <p className="mx-auto max-w-[70ch] text-center text-black/50 lg:text-start">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image
        src="/shared/desktop/image-best-gear.jpg"
        alt=""
        width={540}
        height={588}
        className="hidden rounded-[0.5rem] lg:block"
      />
      <Image
        src="/shared/tablet/image-best-gear.jpg"
        alt=""
        width={689}
        height={300}
        className="order-1 mx-auto hidden rounded-[0.5rem] sm:block lg:order-2 lg:hidden"
      />

      <Image
        src="/shared/mobile/image-best-gear.jpg"
        alt=""
        width={540}
        height={588}
        className="mx-auto block rounded-[0.5rem] sm:hidden"
      />
    </section>
  );
}
