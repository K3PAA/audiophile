type BrowseTitleProps = {
  text: string;
};

export default function BrowseTitle({ text }: BrowseTitleProps) {
  return (
    <section
      className="mb-16 bg-black sm:mb-[7.5rem] lg:mb-40"
      id={text.toLowerCase()}
    >
      <div className="container border-t-2 border-white/25 py-8 text-center tracking-wider text-white sm:py-24">
        <h1 className="text-4xl font-semibold uppercase">{text}</h1>
      </div>
    </section>
  );
}
