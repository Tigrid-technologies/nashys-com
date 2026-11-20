import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiAward,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";
import Reveal from "../../common/Reveal";
import award1 from "../../assets/award1.png";
import award2 from "../../assets/award2.png";
import award3 from "../../assets/award3.png";
import RegisterButton from "../../common/RegisterButton";

const ease = [0.22, 1, 0.36, 1] as const;

interface AwardItem {
  id: number;
  src?: string; // to be populated dynamically
  alt: string;
  title: string;
}

// Static images for now; replace with data from the API later
const awards: AwardItem[] = [
  { id: 1, src: award1, alt: "Award 1", title: "Recognition of Excellence" },
  { id: 2, src: award2, alt: "Award 2", title: "BNI Calicut Heroes Award" },
  {
    id: 3,
    src: award3,
    alt: "Award 3",
    title: "Digital Marketing Bootcamp Certificate",
  },
];

const Awards = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const scroll = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % awards.length,
        );
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + awards.length) % awards.length,
        );
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  const activeAward = selectedIndex !== null ? awards[selectedIndex] : null;

  return (
    <section id="awards" className="scroll-mt-20 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 font-sans">
        <Reveal direction="left">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/70">
            <FiAward className="text-sm text-primary" />
            Awards Achievement
          </p>
          <h2 className="mt-2 font-roman text-3xl font-light tracking-tight text-primary md:text-4xl">
            Milestones &amp; Achievements
          </h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-3 block h-0.5 w-16 origin-left bg-primary/50"
          />
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-gray-700">
            Every Award Represents Our Dedication, Creativity, And Commitment To
            Excellence.
            <br /> These Achievements Reflect The Trust We&apos;ve Earned And
            The Milestones We&apos;ve Reached Along The Way.
          </p>
        </Reveal>

        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 pt-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {awards.map((award, i) => (
            <motion.button
              key={award.id}
              type="button"
              onClick={() => setSelectedIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              whileHover={{ y: -6 }}
              className="group relative flex h-52 shrink-0 basis-full cursor-pointer snap-start items-center justify-center overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-b from-secondary/30 via-white to-secondary/20 p-5 shadow-sm transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/15 md:h-56 md:basis-[calc((100%-2.5rem)/3)]"
            >
              {/* Subtle corner index */}
              <span className="absolute left-3.5 top-3 font-roman text-xs tracking-widest text-primary/45">
                0{i + 1}
              </span>

              {/* Hover zoom cue */}
              <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                <FiMaximize2 />
              </span>

              {award.src && (
                <img
                  src={award.src}
                  alt={award.alt}
                  className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              )}

              {/* Subtle title pill on hover */}
              <span className="pointer-events-none absolute inset-x-4 bottom-2.5 translate-y-2 rounded-full bg-primary/90 px-3 py-1 text-center font-sans text-[11px] font-medium text-white opacity-0 shadow-md backdrop-blur-xs transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {award.title}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <motion.button
            type="button"
            aria-label="Previous"
            whileTap={{ scale: 0.92 }}
            onClick={() => scroll(-1)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/30 transition hover:-translate-x-0.5 hover:opacity-90"
          >
            <FiArrowLeft />
          </motion.button>
          <motion.button
            type="button"
            aria-label="Next"
            whileTap={{ scale: 0.92 }}
            onClick={() => scroll(1)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-primary text-primary transition hover:translate-x-0.5 hover:bg-primary hover:text-white"
          >
            <FiArrowRight />
          </motion.button>
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {activeAward && selectedIndex !== null && (
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
              aria-label="Previous award"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  (selectedIndex - 1 + awards.length) % awards.length,
                );
              }}
              className="fixed left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-2xl text-white backdrop-blur-md transition hover:bg-white/25 sm:left-8"
            >
              <FiChevronLeft />
            </button>

            <motion.div
              key={activeAward.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-white/20"
            >
              <div className="flex items-center justify-center bg-secondary/20 p-6">
                {activeAward.src && (
                  <img
                    src={activeAward.src}
                    alt={activeAward.alt}
                    className="max-h-[68vh] w-full object-contain"
                  />
                )}
              </div>
              <div className="flex items-center justify-between bg-primary px-5 py-3 text-white">
                <p className="font-roman text-xl">{activeAward.title}</p>
                <span className="font-sans text-xs text-secondary/80">
                  {selectedIndex + 1} / {awards.length}
                </span>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Next award"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % awards.length);
              }}
              className="fixed right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-2xl text-white backdrop-blur-md transition hover:bg-white/25 sm:right-8"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
        <div className="flex justify-center pt-1 md:hidden mb-10">
          <RegisterButton variant="primary" />
        </div>
      </AnimatePresence>
    </section>
  );
};

export default Awards;
