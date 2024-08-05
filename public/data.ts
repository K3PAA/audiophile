import { ProductType } from "@/lib/types";

const headphonesData = [
  {
    image: {
      folder: "product-xx99-mark-two-headphones",
      nameWithExtension: "image-category-page-preview.jpg",
    },
    description: {
      isNew: true,
      title: {
        model: "XX99 Mark II",
        type: "headphones",
      },
      text: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
  },
  {
    image: {
      folder: "product-xx99-mark-one-headphones",
      nameWithExtension: "image-category-page-preview.jpg",
    },
    description: {
      isNew: false,
      title: {
        model: "XX99 Mark I",
        type: "headphones",
      },
      text: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
  },
  {
    image: {
      folder: "product-xx59-headphones",
      nameWithExtension: "image-category-page-preview.jpg",
    },
    description: {
      isNew: false,
      title: {
        model: "XX59",
        type: "headphones",
      },
      text: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It  redefines your premium headphone experience by reproducing the balanced  depth and precision of studio-quality sound.",
    },
  },
];
const speakerData = [
  {
    image: {
      folder: "product-zx9-speaker",
      nameWithExtension: "image-category-page-preview.jpg",
    },
    description: {
      isNew: true,
      title: {
        model: "ZX9",
        type: "speaker",
      },
      text: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
  },
  {
    image: {
      folder: "product-zx7-speaker",
      nameWithExtension: "image-category-page-preview.jpg",
    },
    description: {
      isNew: false,
      title: {
        model: "ZX7",
        type: "speaker",
      },
      text: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    },
  },
];

const earphonesData = [
  {
    image: {
      folder: "product-yx1-earphones",
      nameWithExtension: "image-category-page-preview.jpg",
    },
    description: {
      isNew: true,
      title: {
        model: "YX1 WIRELESS",
        type: "earphones",
      },
      text: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },
  },
];

export const data = {
  products: {
    headphones: headphonesData as ProductType[],
    speaker: speakerData as ProductType[],
    earphones: earphonesData as ProductType[],
  },
};
