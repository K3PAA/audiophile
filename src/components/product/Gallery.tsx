import ResponsiveImages from "@/components/shared/ResponsiveImages";

type GalleryProps = {
  folder: string;
};

export default function Gallery({ folder }: GalleryProps) {
  return (
    <section className="container mb-40 grid grid-cols-1 gap-5 sm:grid-cols-[7fr_10fr] sm:gap-8">
      <div className="flex flex-1 flex-col gap-5 sm:gap-8">
        <ResponsiveImages
          folder={folder}
          nameWithExtension="image-gallery-1.jpg"
        />
        <ResponsiveImages
          folder={folder}
          nameWithExtension="image-gallery-2.jpg"
        />
      </div>
      <div className="">
        <ResponsiveImages
          folder={folder}
          nameWithExtension="image-gallery-3.jpg"
        />
      </div>
    </section>
  );
}
