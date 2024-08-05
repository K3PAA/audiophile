import { data } from "@/../public/data.js";

export type DeviceType = keyof typeof data.products;

export type ProductType = {
  image: {
    folder: string;
    nameWithExtension: string;
  };
  description: {
    isNew: boolean;
    title: {
      model: string;
      type: DeviceType;
    };
    text: string;
  };
};
