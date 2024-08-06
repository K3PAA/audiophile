import Logo from "@/components/shared/Logo";
import Nav from "@/components/shared/Nav";

import NavContextProvider from "@/context/NavContext";
import NavButton from "../interactive/NavButton";
import CartButton from "../interactive/CartButton";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  return (
    <NavContextProvider>
      <header className="relative bg-black">
        <section className="container relative z-[1000] flex items-center justify-between py-8 sm:justify-start sm:gap-10 lg:justify-between lg:gap-0 lg:py-0">
          <NavButton />

          <Logo />
          <Nav size="desktop-only" />

          <CartButton />
        </section>

        <MobileNavigation />
      </header>
    </NavContextProvider>
  );
}
