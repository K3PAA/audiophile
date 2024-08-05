import Image from "next/image";

type ResponsiveImagesProps = {
  folder: string;
  nameWithExtension: string;
};

export default function ResponsiveImages({
  folder,
  nameWithExtension,
}: ResponsiveImagesProps) {
  return (
    <>
      <Image
        src={`/${folder}/desktop/${nameWithExtension}`}
        alt="XX99 Mark II Headphones"
        width={540}
        height={560}
        className="hidden rounded-[0.5rem] md:block"
      />

      <Image
        src={`/${folder}/tablet/${nameWithExtension}`}
        alt="XX99 Mark II Headphones"
        width={689}
        height={352}
        className="hidden w-full rounded-[0.5rem] sm:block md:hidden"
      />

      <Image
        src={`/${folder}/mobile/${nameWithExtension}`}
        alt="XX99 Mark II Headphones"
        width={327}
        height={352}
        className="block w-full rounded-[0.5rem] sm:hidden"
      />
    </>
  );
}
