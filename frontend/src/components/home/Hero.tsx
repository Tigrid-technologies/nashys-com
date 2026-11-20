import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaPlay, FaStar } from "react-icons/fa6";
import { FiCalendar, FiClock } from "react-icons/fi";
import { MdAlarm, MdEventSeat } from "react-icons/md";
import RegisterButton from "../../common/RegisterButton";
import image from "../../assets/hero-image.png";

const ease = [0.22, 1, 0.36, 1] as const;

const OFFER_ENDS_AT = new Date("2026-11-24T10:00:00+05:30");
const SEATS_TOTAL = 11;
const SEATS_TAKEN = 9;

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

const WordReveal = ({
  text,
  className,
  delay = 0,
  stagger = 0.035,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) => {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease },
            },
          }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
};

const ShowreelButton = () => (
  <motion.button
    type="button"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    className="absolute bottom-3 left-3 flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/20 py-1.5 pl-2 pr-4 font-sans text-[10px] text-white backdrop-blur-md transition hover:bg-white/30"
  >
    <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[8px]">
      <motion.span
        aria-hidden
        animate={{ scale: [1, 1.8, 1.8], opacity: [0.7, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-0 rounded-full bg-white/60"
      />
      <FaPlay className="relative ml-px" />
    </span>
    Watch Showreel
  </motion.button>
);

const Hero = () => {
  const { days, hours, minutes, seconds } = useCountdown(OFFER_ENDS_AT);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-secondary md:min-h-[calc(100vh-72px)]"
    >
      {/* Subtle drifting ambient glows */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-tertiary/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-8 px-5 py-8 sm:px-6 md:grid-cols-[1fr_1.2fr] md:gap-6 md:py-12">
        {/* Left: editorial staggered headline */}
        <div className="mt-2 md:mt-10">
          <h1 className="font-roman font-light leading-[1.08] tracking-tight text-primary text-5xl md:text-7xl">
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease }}
                className="block"
              >
                Master the Art 
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.14, ease }}
                className="block"
              >
                Painting Techniques in 3 hrs.
              </motion.span>
            </span>
          </h1>

          {/* Animated accent line */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-5 block h-0.5 w-20 origin-left bg-primary/60"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease }}
            className="mt-4 font-sans text-sm tracking-wide text-gray-700 md:mt-5"
          >
            More Than Just A Painting, It&apos;s The ART That Breaths,
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.48, ease }}
            className="mt-7 hidden md:block"
          >
            <RegisterButton variant="primary" />
          </motion.div>
        </div>

        {/* Right: workshop card */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18, ease }}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-[#4a0b0b] p-5 text-white shadow-2xl shadow-primary/30 ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-primary/40 sm:p-6"
        >
          {/* Subtle top-right highlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"
          />

          <div className="relative grid gap-5 md:grid-cols-[1fr_1.6fr]">
            <div className="font-sans">
              <p className="text-[11px] uppercase leading-snug tracking-[0.18em] text-white/70">
                <WordReveal text="Beginner Texture Art" delay={0.1} stagger={0.05} />
                <br />
                <WordReveal text="Mini-Workshop" delay={0.25} stagger={0.05} />
              </p>
              <h2 className="mt-3 font-roman text-2xl font-light leading-snug md:mt-4">
                <WordReveal text="Three Hours." delay={0.2} stagger={0.07} />
                <br />
                <WordReveal text="A Piece Of Your Own." delay={0.35} stagger={0.06} />
              </h2>
              <p className="mt-3 text-[11px] leading-relaxed text-white/85 md:mt-4">
                <WordReveal
                  text="Make Time For A Little Creativity In Kochi. Learn Texture Art Basics And Two Design Techniques As You Create A Landscape Painting On A 12 ×16 Inch Canvas."
                  delay={0.3}
                  stagger={0.025}
                />
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              className="relative aspect-video min-h-[200px] w-full overflow-hidden rounded-3xl bg-black/40 shadow-lg ring-1 ring-white/10 md:min-h-[230px]"
            >
              {/* Slow Ken Burns zoom */}
              <motion.img
                src={image}
                alt="Texture art workshop preview"
                animate={{ scale: [1, 1.07, 1] }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full object-cover object-top"
              />
              <ShowreelButton />
            </motion.div>
          </div>

          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="my-5 origin-left border-white/25 md:my-6"
          />

          <div className="grid items-start gap-5 sm:grid-cols-[1fr_1.15fr]">
            {/* Left: workshop highlight pills + register button */}
            <div className="flex flex-col items-start gap-2.5 font-sans">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.1, ease }}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-[11px] font-semibold tracking-wide text-primary shadow-sm"
              >
                <FiCalendar className="shrink-0 text-sm" />
                24TH NOV 2026 • 10 AM IST
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.18, ease }}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-[11px] font-semibold tracking-wide text-primary shadow-sm"
              >
                <FiClock className="shrink-0 text-sm" />
                3 HOURS OF TRAINING
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.26, ease }}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-[11px] font-semibold tracking-wide text-primary shadow-sm"
              >
                <FaStar className="shrink-0 text-xs text-amber-500" />
                RATED 4.7/5 BY 1000+ LEARNERS
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.35, ease }}
                className="mt-3"
              >
                <RegisterButton variant="cream" />
              </motion.div>
            </div>

            {/* Right: limited slots & offer value card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.25, ease }}
              className="rounded-2xl bg-secondary p-4 text-primary shadow-lg ring-1 ring-white/20"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(119, 19, 19, 0.1) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            >
              <p className="flex items-center gap-1.5 font-sans text-xs font-bold leading-snug text-primary">
                <MdAlarm className="shrink-0 text-base text-primary" />
                Limited Slots Available: Only 25 Slots Left!
              </p>

              {/* Seat availability row */}
              <div
                className="mt-2.5 flex flex-wrap items-center gap-1"
                aria-label={`${SEATS_TAKEN} of ${SEATS_TOTAL} seats filled`}
              >
                {Array.from({ length: SEATS_TOTAL }, (_, i) => (
                  <MdEventSeat
                    key={i}
                    className={`text-lg ${
                      i < SEATS_TAKEN ? "text-primary" : "text-primary/30"
                    }`}
                  />
                ))}
              </div>

              {/* Value & Free offer */}
              <div className="mt-3 border-t border-primary/15 pt-3 font-sans">
                <p className="text-xs text-gray-700">
                  Total Value:{" "}
                  <span className="font-bold text-primary line-through">
                    ₹4,999
                  </span>
                </p>
                <p className="mt-0.5 text-[11px] text-gray-600">
                  Today You Can Get It For
                </p>
                <p className="mt-0.5 font-roman text-3xl font-semibold leading-none tracking-wide text-primary">
                  FREE
                </p>
              </div>

              {/* Live countdown */}
              <div className="mt-3 border-t border-primary/15 pt-2.5 font-sans">
                <p className="text-[11px] text-gray-600">
                  This special offer ends in
                </p>
                <p className="mt-0.5 text-sm font-bold tabular-nums tracking-wide text-primary">
                  {pad(days)}d : {pad(hours)}h : {pad(minutes)}m : {pad(seconds)}s
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
