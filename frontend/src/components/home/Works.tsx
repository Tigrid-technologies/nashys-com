import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../../common/Reveal";
import works1 from "../../assets/works1.jpg";
import works2 from "../../assets/works2.jpg";
import works3 from "../../assets/works3.jpg";
import works4 from "../../assets/works4.jpg";

interface WorkItem {
  id: number;
  src?: string; // to be populated dynamically
  alt: string;
}

// Static images for now; replace with data from the API later
const topRow: WorkItem[] = [
  { id: 1, src: works1, alt: "Artwork 1" },
  { id: 2, src: works2, alt: "Artwork 2" },
];

const bottomRow: WorkItem[] = [
  { id: 3, src: works3, alt: "Artwork 3" },
  { id: 4, src: works4, alt: "Artwork 4" },
];

const Tile = ({ item, className }: { item: WorkItem; className: string }) => (
  <div
    className={`overflow-hidden rounded-2xl bg-gray-200 shadow-md transition-shadow duration-300 hover:shadow-xl ${className}`}
  >
    {item.src && (
      <img
        src={item.src}
        alt={item.alt}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />
    )}
  </div>
);

const Works = () => {
  return (
    <section id="works" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <Reveal direction="left">
          <p className="font-sans text-md text-gray-800">Creative</p>
          <h2 className="mt-2 font-roman text-3xl font-light tracking-tight text-primary">
            Let Our Work Do The Talking.
          </h2>
        </Reveal>

        <div className="mt-5 grid gap-2">
          <Reveal
            direction="right"
            delay={0.1}
            className="grid grid-cols-1 gap-2 md:grid-cols-[375fr_445fr]"
          >
            {topRow.map((item) => (
              <Tile key={item.id} item={item} className="h-64 md:h-80" />
            ))}
          </Reveal>

          <Reveal
            direction="left"
            delay={0.2}
            className="grid grid-cols-1 gap-2 md:grid-cols-[314fr_355fr_143fr]"
          >
            {bottomRow.map((item) => (
              <Tile key={item.id} item={item} className="h-56 md:h-64" />
            ))}

            <a
              href="#works"
              className="group relative flex h-56 flex-col items-center justify-end rounded-2xl bg-gradient-to-br from-primary to-[#4a0b0b] p-4 shadow-xl shadow-primary/25 transition-transform duration-300 hover:-translate-y-1 md:h-64"
            >
              <FiArrowUpRight
                aria-hidden
                className="absolute right-4 top-4 text-4xl text-secondary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              <span className="rounded-full bg-secondary px-6 py-1.5 font-sans text-xs font-medium tracking-wide text-primary">
                View All
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Works;
