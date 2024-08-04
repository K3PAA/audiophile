import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavProps = {
  size: "desktop-only" | "full";
};

export default function Nav({ size }: NavProps) {
  return (
    <nav className={cn({ "hidden md:block": size === "desktop-only" })}>
      <ul className="flex">
        {navLinks.map((link) => (
          <li key={link.name} className="text-bold uppercase text-white">
            <Link
              href={link.href}
              className="px-4 py-8 transition-all hover:text-primary focus:text-primary"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
