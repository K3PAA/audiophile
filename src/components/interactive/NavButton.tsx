"use client";

import { Button } from "@/components/ui/button";
import { useNavContext } from "@/lib/hooks";
import Image from "next/image";

export default function NavButton() {
  const { toogleNavigation } = useNavContext();

  return (
    <Button
      size="icon"
      variant="ghost"
      className="lg:hidden"
      onClick={toogleNavigation}
    >
      <Image
        src="/shared/tablet/icon-hamburger.svg"
        alt="Menu"
        width={24}
        height={24}
      />
    </Button>
  );
}
