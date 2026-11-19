import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Reveal from "../../common/Reveal";
import award1 from "../../assets/award1.png";
import award2 from "../../assets/award2.png";
import award3 from "../../assets/award3.png";

interface AwardItem {
  id: number;
  src?: string; // to be populated dynamically
  alt: string;
}

// Static images for now; replace with data from the API later
const awards: AwardItem[] = [
  { id: 1, src: award1, alt: "Award 1" },
  { id: 2, src: award2, alt: "Award 2" },
  { id: 3, src: award3, alt: "Award 3" },
];

const Awards = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="awards" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 font-sans">
        <Reveal direction="left">
          <p className="text-md text-gray-800">Awards Achievement</p>
          <h2 className="mt-2 font-roman text-3xl font-light tracking-tight text-primary">
            Milestones &amp; Achievements
          </h2>
          <p className="mt-3  text-[14px] leading-relaxed text-gray-700">
            Every Award Represents Our Dedication, Creativity, And Commitment To
            Excellence.<br /> These Achievements Reflect The Trust We’ve Earned And The
            Milestones We’ve Reached Along The Way.
          </p>
        </Reveal>

        <Reveal direction="right" delay={0.15}>
          <div
            ref={trackRef}
            className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {awards.map((award) => (
              <div
                key={award.id}
                className="flex h-44 shrink-0 basis-full snap-start items-center justify-center overflow-hidden rounded-2xl border border-primary/30 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl md:basis-[calc((100%-2rem)/3)]"
              >
                {award.src && (
                  <img
                    src={award.src}
                    alt={award.alt}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scroll(-1)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/30 transition hover:-translate-x-0.5 hover:opacity-90"
            >
              <FiArrowLeft />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scroll(1)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-primary text-primary transition hover:translate-x-0.5 hover:bg-primary hover:text-white"
            >
              <FiArrowRight />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Awards;
