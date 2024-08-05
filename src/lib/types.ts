import { data } from "@/../public/data.js";

export type CategoryType = keyof typeof data.products;

export type ProductBase = {
  image: {
    folder: string;
    nameWithExtension: string;
  };
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
};

export type ProductType = {
  base: ProductBase;
  additional: ProductAdditional;
};
