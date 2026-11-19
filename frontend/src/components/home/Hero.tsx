import { useEffect, useState } from "react";

// Static content for now; move to props/API if it needs to be editable later.
const WORKSHOP = {
  date: "21st Nov 2026",
  time: "10 AM",
  title: "1 Day Of Texture Art Painting Offline Workshop",
  slotsLeft: 25,
  offerEndsAt: new Date("2026-11-22T10:00:00+05:30"),
};

const stats = [
  { value: "10", suffix: "", label: "Awards & Achievements" },
  { value: "25", suffix: "+", label: "Total Workshops" },
  { value: "50", suffix: "+", label: "Happy Clients" },
];

const SEATS_TOTAL = 11;
const SEATS_TAKEN = 6;

const pad = (n: number) => String(n).padStart(2, "0");

const useCountdown = (target: Date) => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = Math.max(0, target.getTime() - now);
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
};

const Hero = () => {
  const { days, hours, minutes, seconds } = useCountdown(WORKSHOP.offerEndsAt);

  return (
    <section className="bg-secondary p-3 md:p-5">
      <div className="mx-auto max-w-7xl rounded-lg bg-primary px-6 py-8 text-white md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.15fr_1fr]">
          {/* Left column */}
          <div>
            <h1 className="font-cormorant text-4xl leading-tight md:text-5xl">
              Crafted Textures. Defining Spaces.
            </h1>
            <p className="mt-4 font-montserrat text-xs">
              Texture Art Painting Offline Workshop
            </p>
            <p className="mt-3 max-w-md font-montserrat text-[10px] leading-relaxed">
              Texture Art Painting Is A Beautiful And Expressive Art Form That
              Allows Us To Create Stunning Pieces Using Textures, Layers,
              Patterns, And Creativity — And Today, Learning
            </p>

            <p className="mt-6 font-montserrat text-xs">Workshop Timelines</p>
            <div className="mt-3 flex flex-wrap gap-3 font-montserrat text-[10px] text-primary">
              <span className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2">
                <span aria-hidden>📅</span>
                {WORKSHOP.date}
              </span>
              <span className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2">
                <span aria-hidden>🕙</span>
                {WORKSHOP.time}
              </span>
              <span className="rounded-md bg-secondary px-4 py-2">
                {WORKSHOP.title}
              </span>
            </div>

            <div className="mt-4 max-w-xs rounded-md bg-secondary p-3 font-montserrat text-primary">
              <p className="flex items-center gap-2 text-[10px] font-medium">
                <span aria-hidden>⏱</span>
                Final Call: Only {WORKSHOP.slotsLeft} Slots Left!
              </p>
              <div className="mt-2 flex gap-1" aria-hidden>
                {Array.from({ length: SEATS_TOTAL }, (_, i) => (
                  <span
                    key={i}
                    className={`h-3 w-3 rounded-sm border border-primary ${
                      i < SEATS_TAKEN ? "bg-primary" : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 text-[10px]">This Special Offer Ends In</p>
              <p className="mt-1 text-sm font-semibold tabular-nums">
                {pad(days)}d: {pad(hours)}h{pad(minutes)}m: {pad(seconds)}s
              </p>
            </div>

            <a
              href="#register"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-tertiary py-1.5 pl-5 pr-1.5 font-montserrat text-[11px] font-medium text-primary hover:opacity-90"
            >
              Register Now
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-primary text-xs">
                ↗
              </span>
            </a>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between gap-8">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-black/40">
              {/* Showreel video/poster goes here once available */}
              <button
                type="button"
                className="absolute bottom-3 left-3 flex cursor-pointer items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 font-montserrat text-[10px] text-white backdrop-blur-sm"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[7px]">
                  ▶
                </span>
                Watch Showreel
              </button>
            </div>

            <ul className="flex justify-between gap-4 px-2 md:px-6">
              {stats.map((s) => (
                <li key={s.label}>
                  <p className="font-cormorant text-5xl leading-none">
                    {s.value}
                    <span className="align-top text-2xl">{s.suffix}</span>
                  </p>
                  <p className="mt-3 max-w-[6rem] font-montserrat text-[10px] leading-snug">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
