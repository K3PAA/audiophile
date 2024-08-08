"use client";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import { CheckoutFormValues } from "@/lib/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Popup from "./Popup";

export default function CheckoutContent() {
  const [orderMade, setOrderMade] = useState(false);

  const handleOrderPlace = () => {
    setOrderMade(true);
  };

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  };

  const { register, control, watch, handleSubmit } =
    useForm<CheckoutFormValues>({
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
    });

  const paymentMethod = watch("paymentMethod");

  return (
    <>
      <form
        className="container grid gap-8 md:grid-cols-[7fr_3fr] md:gap-4 lg:gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CheckoutForm
          register={register}
          control={control}
          paymentMethod={paymentMethod}
        />
        <CheckoutSummary onOrderMade={handleOrderPlace} />
      </form>

      {orderMade && <Popup />}
    </>
  );
}
