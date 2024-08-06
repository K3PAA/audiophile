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
        alt={nameWithExtension}
        width={540}
        height={560}
        className="hidden h-full w-full rounded-[0.5rem] md:block"
      />

      <Image
        src={`/${folder}/tablet/${nameWithExtension}`}
        alt={nameWithExtension}
        width={689}
        height={352}
        className="hidden h-full w-full rounded-[0.5rem] sm:block md:hidden"
      />

      <Image
        src={`/${folder}/mobile/${nameWithExtension}`}
        alt={nameWithExtension}
        width={327}
        height={352}
        className="block h-full w-full rounded-[0.5rem] sm:hidden"
      />
    </>
  );
}
