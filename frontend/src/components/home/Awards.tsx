import { useRef } from "react";

interface AwardItem {
  id: number;
  src?: string; // to be populated dynamically
  alt: string;
}

const awards: AwardItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  alt: `Award ${i + 1}`,
}));

const Awards = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="awards" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 font-montserrat">
        <p className="text-sm text-gray-800">Awards Achievement</p>
        <h2 className="mt-2 font-cormorant text-3xl text-primary">
          Milestones &amp; Achievements
        </h2>
        <p className="mt-3 max-w-xl text-[11px] leading-relaxed text-gray-700">
          Every Award Represents Our Dedication, Creativity, And Commitment To
          Excellence. These Achievements Reflect The Trust We’ve Earned And The
          Milestones We’ve Reached Along The Way.
        </p>

        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex h-44 shrink-0 basis-full snap-start items-center justify-center overflow-hidden rounded-lg border border-primary/60 bg-white p-3 md:basis-[calc((100%-2rem)/3)]"
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
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:opacity-90"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scroll(1)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-primary text-primary hover:bg-primary/10"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Awards;
