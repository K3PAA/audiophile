import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("", className)}>
      <Image
        src="/shared/desktop/logo.svg"
        alt="Audiophile"
        width={143}
        height={25}
      />
    </Link>
  );
}
