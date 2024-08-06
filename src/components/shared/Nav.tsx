import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavProps = {
  size: "desktop-only" | "full";
};

export default function Nav({ size }: NavProps) {
  return (
    <nav
      className={cn({
        "hidden lg:block": size === "desktop-only",
      })}
    >
      <ul className="flex flex-col sm:flex-row">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="group py-2 text-center font-bold uppercase text-white"
          >
            <Link
              href={link.href}
              className={cn(
                "block py-2 transition-all hover:text-primary focus:text-primary group-first:pl-0 sm:px-4 sm:py-8 lg:group-first:pl-4",
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
