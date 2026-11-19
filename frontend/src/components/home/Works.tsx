interface WorkItem {
  id: number;
  src?: string; // to be populated dynamically
  alt: string;
}

const topRow: WorkItem[] = [
  { id: 1, alt: "Artwork 1" },
  { id: 2, alt: "Artwork 2" },
];

const bottomRow: WorkItem[] = [
  { id: 3, alt: "Artwork 3" },
  { id: 4, alt: "Artwork 4" },
];

const Tile = ({ item, className }: { item: WorkItem; className: string }) => (
  <div className={`overflow-hidden rounded-xl bg-gray-200 ${className}`}>
    {item.src && (
      <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
    )}
  </div>
);

const Works = () => {
  return (
    <section id="works" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="font-montserrat text-xs text-gray-800">Creative</p>
        <h2 className="mt-2 font-cormorant text-2xl text-primary">
          Let Our Work Do The Talking.
        </h2>

        <div className="mt-5 grid gap-2">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[375fr_445fr]">
            {topRow.map((item) => (
              <Tile key={item.id} item={item} className="h-64 md:h-80" />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-[314fr_355fr_143fr]">
            {bottomRow.map((item) => (
              <Tile key={item.id} item={item} className="h-56 md:h-64" />
            ))}

            <a
              href="#works"
              className="relative flex h-56 flex-col items-center justify-end rounded-xl bg-primary p-4 md:h-64"
            >
              <span
                aria-hidden
                className="absolute right-4 top-3 text-4xl font-light leading-none text-secondary"
              >
                ↗
              </span>
              <span className="rounded-full bg-secondary px-6 py-1.5 font-montserrat text-xs text-primary">
                View All
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
