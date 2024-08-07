"use client";
import BackLink from "@/components/checkout/BackLink";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";

export default function page() {
  return (
    <div className="bg-card pb-[7.5rem]">
      <BackLink />
      <main className="container grid gap-8 md:grid-cols-[7fr_3fr] md:gap-4 lg:gap-8">
        <CheckoutForm />
        <CheckoutSummary />
      </main>
    </div>
  );
}
