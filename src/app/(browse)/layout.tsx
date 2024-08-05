import ThreeProducts from "@/components/shared/ThreeProducts";

type LayoutProps = {
  children: React.ReactNode;
};

export default function layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <ThreeProducts />
    </>
  );
}
