import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/shared/desktop/logo.svg"
      alt="Audiophile"
      width={143}
      height={25}
    />
  );
}
