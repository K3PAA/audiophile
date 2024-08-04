import Image from "next/image";
import Logo from "./Logo";
import Nav from "./Nav";
import { cn } from "@/lib/utils";

const socials = [
  { src: "/shared/desktop/icon-facebook.svg", href: "https://facebook.com" },
  { src: "/shared/desktop/icon-twitter.svg", href: "https://twitter.com" },
  { src: "/shared/desktop/icon-instagram.svg", href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-black pb-12 pt-20">
      <section className="container relative">
        <div className="flex flex-col gap-8 sm:gap-0 md:flex-row md:items-center md:justify-between">
          <Logo className="mx-auto sm:mx-0" />
          <Nav size="full" />
        </div>

        <section className="grid md:grid-cols-2">
          <div>
            <p className="mx-auto mt-12 max-w-[40ch] text-center text-white/50 sm:mt-0 sm:max-w-full sm:text-left">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-12 sm:flex-row sm:justify-between md:mt-12">
              <small className="font-bold text-white/50">
                Copyright 2021. All Rights Reserved
              </small>
              <SocialLinksContainer className="md:hidden" />
            </div>
          </div>
          <SocialLinksContainer className="my-auto ml-auto hidden md:flex" />
        </section>

        <div className="absolute -top-20 left-1/2 h-1 w-24 -translate-x-1/2 bg-primary sm:left-auto sm:translate-x-0"></div>
      </section>
    </footer>
  );
}

type SocialLinksContainerProps = {
  className?: string;
};

function SocialLinksContainer({ className }: SocialLinksContainerProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socials.map(({ src, href }) => (
        <a
          key={src}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <Image src={src} alt="Facebook" width={24} height={24} />
        </a>
      ))}
    </div>
  );
}
