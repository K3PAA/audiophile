import { data } from "@/../public/data.js";
import { checkoutFormSchema } from "@/lib/schema";
import { z } from "zod";

export type CategoryType = keyof typeof data.products;

export type ProductBase = {
  id: string;
  folder: string;
  description: {
    isNew: boolean;
    title: {
      model: string;
      type: "headphones" | "speaker" | "earphones";
    };
    text: string;
  };
};

export type ProductAdditional = {
  price: number;
  features: [string, string];
  inBox: { item: string; amount: number }[];
  category: CategoryType;
};

export type ProductType = ProductBase & {
  additional: ProductAdditional;
};

export type CartItemType = {
  id: string;
  name: string;
  src: string;
  price: number;
  amount: number;
};

export type PaymentMethod = "cash-on-delivery" | "e-money";

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
