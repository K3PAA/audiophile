"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CartButton() {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="ml-0 opacity-60 transition-opacity duration-300 hover:opacity-100 sm:ml-auto lg:ml-0"
    >
      <Image
        src="/shared/desktop/icon-cart.svg"
        alt="Cart"
        width={24}
        height={24}
      />
    </Button>
  );
}
