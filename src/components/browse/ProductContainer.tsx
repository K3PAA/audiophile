type ProductContainerProps = {
  children: React.ReactNode;
};

export default function ProductContainer({ children }: ProductContainerProps) {
  return <main className="container mb-40 grid gap-40">{children}</main>;
}
