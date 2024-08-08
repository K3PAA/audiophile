"use client";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import { CheckoutFormValues } from "@/lib/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Popup from "./Popup";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutFormSchema } from "@/lib/schema";
import { useCartContext } from "@/lib/hooks";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CheckoutContent() {
  const { cart } = useCartContext();
  const [orderMade, setOrderMade] = useState(false);

  const handleOrderPlace = () => {
    setOrderMade(true);
  };

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  };

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CheckoutFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip_code: "",
      city: "",
      country: "",
      paymentMethod: "cash-on-delivery",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
    resolver: zodResolver(checkoutFormSchema),
  });

  const paymentMethod = watch("paymentMethod");

  return cart.length > 0 ? (
    <>
      <form
        className="container grid gap-8 md:grid-cols-[7fr_3fr] md:gap-4 lg:gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CheckoutForm
          register={register}
          errors={errors}
          control={control}
          paymentMethod={paymentMethod}
        />
        <CheckoutSummary onOrderMade={handleOrderPlace} isValid={isValid} />
      </form>

      {orderMade && <Popup />}
    </>
  ) : (
    <main className="container flex max-w-[500px] flex-col items-center justify-center gap-8 rounded-md bg-white p-8 shadow-md md:p-4 lg:p-8">
      <h1 className="text-center text-5xl">There is nothing in your cart</h1>

      <p className="text-center text-xl text-black/50">
        Please add some items to your cart before visiting this page
      </p>

      <Button asChild>
        <Link href="/">Go to Home</Link>
      </Button>
    </main>
  );
}
