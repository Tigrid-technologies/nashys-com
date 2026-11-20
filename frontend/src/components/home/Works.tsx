import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";
import Reveal from "../../common/Reveal";
import works1 from "../../assets/works1.jpg";
import works2 from "../../assets/works2.jpg";
import works3 from "../../assets/works3.jpg";
import works4 from "../../assets/works4.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

interface WorkItem {
  id: number;
  src?: string; // to be populated dynamically
  alt: string;
  title: string;
  subtitle: string;
}

// Static images for now; replace with data from the API later
const works: WorkItem[] = [
  {
    id: 1,
    src: works1,
    alt: "Artwork 1",
    title: "Sculpted Layers",
    subtitle: "Palette Knife Texture",
  },
  {
    id: 2,
    src: works2,
    alt: "Artwork 2",
    title: "Fluid Resonance",
    subtitle: "Mixed Media Canvas",
  },
  {
    id: 3,
    src: works3,
    alt: "Artwork 3",
    title: "Chromatic Relief",
    subtitle: "Impasto & Acrylic",
  },
  {
    id: 4,
    src: works4,
    alt: "Artwork 4",
    title: "Organic Impressions",
    subtitle: "Textured Plaster Art",
  },
];

const topRow = works.slice(0, 2);
const bottomRow = works.slice(2, 4);

const Tile = ({
  item,
  index,
  className,
  onSelect,
}: {
  item: WorkItem;
  index: number;
  className: string;
  onSelect: () => void;
}) => (
  <motion.button
    type="button"
    onClick={onSelect}
    initial={{ opacity: 0, y: 24, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.65, delay: index * 0.1, ease }}
    whileHover={{ y: -4 }}
    className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-gray-200 text-left shadow-md transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/20 ${className}`}
  >
    {item.src && (
      <img
        src={item.src}
        alt={item.alt}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    )}

    {/* Hover scrim & caption */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <div>
        <p className="font-roman text-xl text-white">{item.title}</p>
        <p className="font-sans text-[11px] tracking-wide text-secondary/90">
          {item.subtitle}
        </p>
      </div>
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/20 text-sm text-white backdrop-blur-md">
        <FiMaximize2 />
      </span>
    </div>
  </motion.button>
);

const Works = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % works.length
        );
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + works.length) % works.length
        );
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  const activeWork = selectedIndex !== null ? works[selectedIndex] : null;

  return (
    <section id="works" className="scroll-mt-20 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Reveal direction="left">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-primary/70">
            Creative
          </p>
          <h2 className="mt-2 font-roman text-3xl font-light tracking-tight text-primary md:text-4xl">
            Let Our Work Do The Talking.
          </h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-3 block h-0.5 w-16 origin-left bg-primary/50"
          />
        </Reveal>

        <div className="mt-7 grid gap-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-[375fr_445fr]">
            {topRow.map((item, i) => (
              <Tile
                key={item.id}
                item={item}
                index={i}
                className="h-64 md:h-80"
                onSelect={() => setSelectedIndex(i)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-[314fr_355fr_143fr]">
            {bottomRow.map((item, i) => (
              <Tile
                key={item.id}
                item={item}
                index={i + 2}
                className="h-56 md:h-64"
                onSelect={() => setSelectedIndex(i + 2)}
              />
            ))}

            <motion.button
              type="button"
              onClick={() => setSelectedIndex(0)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.35, ease }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex h-44 cursor-pointer flex-col items-center justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-[#4a0b0b] p-5 shadow-xl shadow-primary/25 ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/35 md:h-64"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"
              />
              <motion.span
                aria-hidden
                animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-4 top-4 text-4xl text-secondary transition-transform duration-300 group-hover:scale-110"
              >
                <FiArrowUpRight />
              </motion.span>
              <span className="rounded-full bg-secondary px-6 py-2 font-sans text-xs font-medium tracking-wide text-primary shadow-md transition-colors duration-300 group-hover:bg-tertiary">
                View All
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeWork && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setSelectedIndex(null)}
              className="fixed right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/15 text-xl text-white backdrop-blur-md transition hover:bg-white/25"
            >
              <FiX />
            </button>

            <button
              type="button"
              aria-label="Previous artwork"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  (selectedIndex - 1 + works.length) % works.length
                );
              }}
              className="fixed left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-2xl text-white backdrop-blur-md transition hover:bg-white/25 sm:left-8"
            >
              <FiChevronLeft />
            </button>

            <motion.div
              key={activeWork.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/15"
            >
              {activeWork.src && (
                <img
                  src={activeWork.src}
                  alt={activeWork.alt}
                  className="max-h-[75vh] w-full object-contain"
                />
              )}
              <div className="flex items-center justify-between bg-primary/95 px-5 py-3 text-white">
                <div>
                  <p className="font-roman text-xl">{activeWork.title}</p>
                  <p className="font-sans text-xs text-secondary/85">
                    {activeWork.subtitle}
                  </p>
                </div>
                <span className="font-sans text-xs text-secondary/80">
                  {selectedIndex + 1} / {works.length}
                </span>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Next artwork"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % works.length);
              }}
              className="fixed right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-2xl text-white backdrop-blur-md transition hover:bg-white/25 sm:right-8"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;
