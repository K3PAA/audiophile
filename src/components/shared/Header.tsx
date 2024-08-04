import Logo from "@/components/shared/Logo";
import Nav from "@/components/shared/Nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black">
      <section className="container flex items-center justify-between py-8 sm:justify-start sm:gap-10 md:justify-between md:gap-0 md:py-0">
        <Button size="icon" variant="ghost" className="md:hidden">
          <Image
            src="/shared/tablet/icon-hamburger.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        </Button>
        <Logo />
        <Nav size="desktop-only" />
        <Button
          size="icon"
          variant="ghost"
          className="ml-0 opacity-60 transition-opacity duration-300 hover:opacity-100 sm:ml-auto md:ml-0"
        >
          <Image
            src="/shared/desktop/icon-cart.svg"
            alt="Cart"
            width={24}
            height={24}
          />
        </Button>
      </section>
    </header>
  );
}
