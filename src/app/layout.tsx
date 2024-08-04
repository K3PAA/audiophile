import type { Metadata } from "next";
import { Manrope as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import OutroSection from "@/components/shared/OutroSection";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Audiophile",
  description:
    "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-dvh flex-col bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Header />
        {children}
        <OutroSection />
        <Footer />
      </body>
    </html>
  );
}
