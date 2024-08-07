import Image from "next/image";
import React from "react";
import ResponsiveImages from "../shared/ResponsiveImages";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TopProducts() {
  return (
    <section className="container mb-[7.5rem] grid gap-6 sm:mb-24 sm:gap-8 md:mb-[12.5rem] md:gap-12">
      <section className="relative grid overflow-hidden rounded-md bg-primary py-16 sm:grid-cols-2 sm:gap-20 sm:px-2 sm:py-6 md:p-16 lg:gap-40 lg:px-[7.5rem] lg:py-20">
        <div className="relative z-[10] mx-auto w-[240px] sm:mx-0 sm:w-full sm:translate-y-24">
          <ResponsiveImages
            folder="home"
            nameWithExtension="image-speaker-zx9.png"
          />
        </div>

        <Image
          src="/home/desktop/pattern-circles.svg"
          alt=""
          width={540}
          height={560}
          className="pointer-events-none absolute -top-1/4 left-1/2 aspect-square h-full -translate-x-1/2 sm:-left-1/4 sm:h-auto sm:w-full sm:translate-x-0"
        />

        <div className="mt-10 text-center sm:text-left">
          <h2 className="text-5xl font-bold uppercase text-white sm:text-4xl md:text-6xl">
            ZX9 <span className="block">SPEAKER</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[30ch] text-white/75 sm:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            variant="secondary"
            className="mt-10 rounded-none bg-black text-white hover:border-[#4C4C4C] hover:bg-[#4C4C4C] focus:border-[#4C4C4C] focus:bg-[#4C4C4C]"
            asChild
          >
            <Link href="/speakers">See Product</Link>
          </Button>
        </div>
      </section>

      <section className="relative">
        <ResponsiveImages
          folder="home"
          nameWithExtension="image-speaker-zx7.jpg"
        />
        <div className="absolute left-8 top-1/2 -translate-y-1/2 sm:left-16 lg:left-24">
          <h3 className="text-3xl font-semibold uppercase sm:text-4xl sm:tracking-widest">
            ZX7 Speaker
          </h3>
          <Button variant="secondary" className="mt-8 rounded-none" asChild>
            <Link href="/speakers">See Product</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 md:gap-8">
        <ResponsiveImages
          folder="home"
          nameWithExtension="image-earphones-yx1.jpg"
        />

        <div className="flex flex-col justify-center rounded-[0.5rem] bg-card px-8 py-10 sm:px-4 sm:py-0 lg:px-10">
          <h3 className="text-3xl font-semibold uppercase lg:text-4xl">
            YX1 EARPHONES
          </h3>
          <Button
            variant="secondary"
            className="mt-8 self-start rounded-none"
            asChild
          >
            <Link href="/earphones">See Product</Link>
          </Button>
        </div>
      </section>
    </section>
  );
}
