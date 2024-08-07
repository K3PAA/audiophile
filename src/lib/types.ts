import { data } from "@/../public/data.js";

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
