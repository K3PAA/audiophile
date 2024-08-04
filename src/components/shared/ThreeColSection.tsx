import { cn } from "@/lib/utils";

type ThreeColSectionProps = {
  className?: string;
  children: React.ReactNode;
};

export default function ThreeColSection({
  className,
  children,
}: ThreeColSectionProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-3 lg:gap-8",
        className,
      )}
    >
      {children}
    </section>
  );
}
