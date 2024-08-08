import BackLink from "@/components/checkout/BackLink";
import CheckoutContent from "@/components/checkout/CheckoutContent";

export default function page() {
  return (
    <div className="relative bg-card pb-[7.5rem]">
      <BackLink />
      <CheckoutContent />
    </div>
  );
}
