"use client";
import { useState, createContext, ReactNode } from "react";

type NavContextType = {
  isNavOpen: boolean;
  toogleNavigation: () => void;
  closeNavigation: () => void;
  openNavigation: () => void;
};

export const NavContext = createContext<NavContextType | null>(null);

function NavContextProvider({ children }: { children: ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toogleNavigation = () => {
    setIsNavOpen((p) => !p);
  };

  const closeNavigation = () => {
    setIsNavOpen(false);
  };

  const openNavigation = () => {
    setIsNavOpen(true);
  };

  return (
    <NavContext.Provider
      value={{ isNavOpen, toogleNavigation, closeNavigation, openNavigation }}
    >
      {children}
    </NavContext.Provider>
  );
}

export default NavContextProvider;
