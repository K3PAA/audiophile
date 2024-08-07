import Hero from "@/components/home/Hero";
import TopProducts from "@/components/home/TopProducts";
import OutroSection from "@/components/shared/OutroSection";
import ThreeProducts from "@/components/shared/ThreeProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <ThreeProducts />
      <TopProducts />
      <OutroSection />
    </>
  );
}
