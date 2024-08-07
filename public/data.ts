import { ProductType } from "@/lib/types";
// import { v4 as uuidv4 } from "uuid";

const headphonesData: ProductType[] = [
  {
    id: "1",
    folder: "product-xx99-mark-two-headphones",
    description: {
      isNew: true,
      title: {
        model: "XX99 Mark II",
        type: "headphones",
      },
      text: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },

    additional: {
      price: 2999,
      features: [
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
        "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
      ],
      inBox: [
        { item: "Headphone Unit", amount: 1 },
        { item: "Replacement Earcups", amount: 2 },
        { item: "User Manual", amount: 1 },
        { item: "3.5mm 5m Audio Cable", amount: 1 },
        { item: "Travel Bag", amount: 1 },
      ],
      category: "headphones",
    },
  },
  {
    id: "2",
    folder: "product-xx99-mark-one-headphones",
    description: {
      isNew: false,
      title: {
        model: "XX99 Mark I",
        type: "headphones",
      },
      text: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },

    additional: {
      price: 1750,
      features: [
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
        "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
      ],
      inBox: [
        { item: "Headphone Unit", amount: 1 },
        { item: "Replacement Earcups", amount: 2 },
        { item: "User Manual", amount: 1 },
        { item: "3.5mm 5m Audio Cable", amount: 1 },
      ],
      category: "headphones",
    },
  },
  {
    id: "3",
    folder: "product-xx59-headphones",
    description: {
      isNew: false,
      title: {
        model: "XX59",
        type: "headphones",
      },
      text: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    },
    additional: {
      price: 899,
      features: [
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
        "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
      ],
      inBox: [
        { item: "Headphone Unit", amount: 1 },
        { item: "Replacement Earcups", amount: 2 },
        { item: "User Manual", amount: 1 },
        { item: "3.5mm 5m Audio Cable", amount: 1 },
      ],
      category: "headphones",
    },
  },
];
const speakerData: ProductType[] = [
  {
    id: "4",
    folder: "product-zx9-speaker",
    description: {
      isNew: true,
      title: {
        model: "ZX9",
        type: "speaker",
      },
      text: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    additional: {
      price: 4500,
      features: [
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
        "TDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      ],
      inBox: [
        { item: "Speaker Unit", amount: 2 },
        { item: "Speaker Cloth Panel", amount: 2 },
        { item: "User Manual", amount: 1 },
        { item: "3.5mm 10m Audio Cable", amount: 1 },
        { item: "10m Optical Cable", amount: 1 },
      ],
      category: "speakers",
    },
  },
  {
    id: "5",
    folder: "product-zx7-speaker",
    description: {
      isNew: false,
      title: {
        model: "ZX7",
        type: "speaker",
      },
      text: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    },
    additional: {
      price: 3500,
      features: [
        "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
        "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
      ],
      inBox: [
        { item: "Speaker Unit", amount: 2 },
        { item: "Speaker Cloth Panel", amount: 2 },
        { item: "User Manual", amount: 1 },
        { item: "3.5mm 7.5m Audio Cable", amount: 1 },
        { item: "7.5m Optical Cable", amount: 1 },
      ],
      category: "speakers",
    },
  },
];
const earphonesData: ProductType[] = [
  {
    id: "6",
    folder: "product-yx1-earphones",
    description: {
      isNew: true,
      title: {
        model: "YX1 WIRELESS",
        type: "earphones",
      },
      text: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },

    additional: {
      price: 599,
      features: [
        "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
        "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
      ],
      inBox: [
        { item: "Earphone Unit", amount: 2 },
        { item: "Multi-size Earplugs", amount: 6 },
        { item: "User Manual", amount: 1 },
        { item: "USB-C Charging Cable", amount: 1 },
        { item: "Travel Pouch", amount: 1 },
      ],
      category: "earphones",
    },
  },
];

export const data = {
  products: {
    headphones: headphonesData,
    speakers: speakerData,
    earphones: earphonesData,
  },
};
