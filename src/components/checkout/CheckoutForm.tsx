import React from "react";
import InputWithLabel from "./InputWithLabel";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import Image from "next/image";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { CheckoutFormValues, PaymentMethod } from "@/lib/types";

type CheckoutFormProps = {
  register: UseFormRegister<CheckoutFormValues>;
  control: Control<CheckoutFormValues, any>;
  paymentMethod: PaymentMethod;
};

export default function CheckoutForm({
  register,
  control,
  paymentMethod,
}: CheckoutFormProps) {
  return (
    <section className="grid gap-10 rounded-[0.5rem] bg-white p-8 shadow-md md:p-4 lg:p-8">
      <h1 className="text-3xl font-semibold uppercase">Checkout</h1>

      <section>
        <p className="mb-6 font-medium uppercase tracking-wide text-primary">
          billing details
        </p>

        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2">
          <InputWithLabel
            name="name"
            placeholder="Alexei Ward"
            register={register}
          />
          <InputWithLabel
            name="email"
            label="Email Address"
            placeholder="alexei@mail.com"
            register={register}
          />
          <InputWithLabel
            name="phone"
            placeholder="+1 202-555-0136"
            register={register}
          />
        </div>
      </section>

      <section>
        <p className="mb-6 font-medium uppercase tracking-wide text-primary">
          shipping info
        </p>

        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <InputWithLabel
              name="address"
              placeholder="1137 Williams Avenue"
              register={register}
            />
          </div>
          <InputWithLabel
            name="zip_code"
            label="ZIP Code"
            placeholder="10001"
            register={register}
          />
          <InputWithLabel
            name="city"
            placeholder="New York"
            register={register}
          />
          <InputWithLabel
            name="country"
            placeholder="United States"
            register={register}
          />
        </div>
      </section>

      <section>
        <p className="mb-6 font-medium uppercase tracking-wide text-primary">
          payment details
        </p>

        <div className="grid sm:grid-cols-2">
          <p className="text-sm font-bold capitalize text-black">
            Payment Method
          </p>

          <Controller
            name="paymentMethod"
            control={control}
            render={({ field }) => (
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <RadioWrapper>
                  <RadioGroupItem value="e-money" id="r1" />
                  <Label
                    htmlFor="r1"
                    className="w-full cursor-pointer px-2 py-4"
                  >
                    e-Money
                  </Label>
                </RadioWrapper>
                <RadioWrapper>
                  <RadioGroupItem value="cash-on-delivery" id="r2" />
                  <Label
                    htmlFor="r2"
                    className="w-full cursor-pointer px-2 py-4"
                  >
                    Cash on Delivery
                  </Label>
                </RadioWrapper>
              </RadioGroup>
            )}
          />
        </div>

        {paymentMethod === "cash-on-delivery" && <CashOnDelivery />}
        {paymentMethod === "e-money" && <EMoney register={register} />}
      </section>
    </section>
  );
}

function RadioWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center rounded-[0.5rem] border-2 px-2 transition duration-300 hover:border-primary">
      {children}
    </div>
  );
}

function CashOnDelivery() {
  return (
    <div className="mt-8 flex items-center gap-8">
      <Image
        src="/checkout/icon-cash-on-delivery.svg"
        alt="icon"
        width={48}
        height={48}
      />
      <p className="text-sm text-black/50">
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </div>
  );
}

type EMoneyProps = {
  register: UseFormRegister<CheckoutFormValues>;
};

function EMoney({ register }: EMoneyProps) {
  return (
    <div className="mt-6 grid gap-x-4 gap-y-6 sm:grid-cols-2">
      <InputWithLabel
        register={register}
        name="eMoneyNumber"
        label="e-Money Number"
        placeholder="238521993"
      />
      <InputWithLabel
        register={register}
        name="eMoneyPin"
        label="e-Money PIN"
        placeholder="6891"
      />
    </div>
  );
}
