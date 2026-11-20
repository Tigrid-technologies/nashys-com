import { useRef } from "react";
import { motion } from "motion/react";
import { FaQuoteRight, FaStar } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import RegisterButton from "../../common/RegisterButton";
import Reveal from "../../common/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar?: string; // to be populated dynamically
}

const LOREM =
  "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since 1966, When Designers At Letraset And James Mosley, The Librarian At St Bride Printing Library In London, Has Been The Industry's Standard";

// Placeholder data; replace with data fetched from the backend.
const initialTestimonials: Testimonial[] = [
  { id: 1, name: "Noah", role: "Student", text: LOREM },
  { id: 2, name: "Isla", role: "Student", text: LOREM },
  { id: 3, name: "Nora", role: "Student", text: LOREM },
  { id: 4, name: "Roshi", role: "Artist", text: LOREM },
];

// Alternating card styles (filled / outlined) with slight tilts
const tilts = [0, -2, 3, 0];

const Card = ({ item, index }: { item: Testimonial; index: number }) => {
  const filled = index % 2 === 0;
  const tilt = tilts[index % tilts.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: tilt }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
      className="relative shrink-0 basis-[88%] snap-center sm:basis-[48%] lg:basis-auto"
    >
      {/* Gentle, staggered bounce for each card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2.6,
          ease: "easeInOut",
          repeat: Infinity,
          delay: index * 0.45,
        }}
        className={`relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl ${
          filled
            ? "border-primary bg-gradient-to-br from-primary via-primary to-[#4a0b0b] text-white shadow-primary/25"
            : "border-primary/35 bg-white text-gray-700 shadow-primary/10"
        }`}
      >
        {/* Decorative quote mark */}
        <FaQuoteRight
          aria-hidden
          className={`pointer-events-none absolute right-5 top-5 text-3xl ${
            filled ? "text-white/15" : "text-primary/10"
          }`}
        />

        <div>
          <div className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full font-roman text-lg font-medium ring-2 ${
                filled
                  ? "bg-secondary text-primary ring-white/30"
                  : "bg-primary/10 text-primary ring-primary/20"
              }`}
            >
              {item.avatar ? (
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                item.name.charAt(0)
              )}
            </div>
            <div className={filled ? "text-white" : "text-primary"}>
              <p className="font-roman text-xl leading-tight">{item.name}</p>
              <p
                className={`font-sans text-[12px] ${
                  filled ? "text-secondary/85" : "text-gray-500"
                }`}
              >
                {item.role}
              </p>
            </div>
          </div>

          <p
            className={`mt-5 font-sans text-[13px] leading-relaxed ${
              filled ? "text-white/90" : "text-gray-600"
            }`}
          >
            {item.text}
          </p>
        </div>

        {/* Rating stars */}
        <div
          aria-label="5 out of 5 stars"
          className={`mt-5 flex items-center gap-1 text-xs ${
            filled ? "text-tertiary" : "text-primary"
          }`}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="overflow-hidden bg-white">
      <Reveal direction="left" className="mx-auto max-w-7xl px-6 pt-12 font-sans">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/70">
          <FiMessageCircle className="text-sm text-primary" />
          Testimonials
        </p>
        <h2 className="mt-2 font-roman text-3xl font-light tracking-tight text-primary md:text-4xl">
          Real Voices. Creative Journeys.
        </h2>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-3 block h-0.5 w-16 origin-left bg-primary/50"
        />
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-gray-700">
          Hear It From Those Who Turned Their Creativity Into Beautiful
          Masterpieces! Discover How Our Texture Art Painting Workshop Inspired
          Creativity, Sparked Joy, And Created Unforgettable Artistic
          Experiences.
        </p>
      </Reveal>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 py-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0"
        >
          {initialTestimonials.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Mobile / tablet slider controls */}
        {/* <div className="mt-4 flex justify-end gap-3 lg:hidden">
          <motion.button
            type="button"
            aria-label="Previous testimonial"
            whileTap={{ scale: 0.92 }}
            onClick={() => scroll(-1)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/30 transition hover:-translate-x-0.5 hover:opacity-90"
          >
            <FiArrowLeft />
          </motion.button>
          <motion.button
            type="button"
            aria-label="Next testimonial"
            whileTap={{ scale: 0.92 }}
            onClick={() => scroll(1)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-primary text-primary transition hover:translate-x-0.5 hover:bg-primary hover:text-white"
          >
            <FiArrowRight />
          </motion.button>
        </div> */}

        {/* Register CTA */}
        <Reveal
          direction="up"
          delay={0.15}
          className="mt-10 flex flex-col items-center gap-4 text-center"
        >
          <p className="font-roman text-2xl text-primary">
            Ready to Create Your Own Story?
          </p>
          <RegisterButton variant="primary" />
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
