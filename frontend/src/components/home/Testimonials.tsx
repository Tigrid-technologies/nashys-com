import { motion } from "motion/react";
import Reveal from "../../common/Reveal";

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
  return (
    <div style={{ transform: `rotate(${tilts[index % tilts.length]}deg)` }}>
      {/* Gentle, staggered bounce for each card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2.6,
          ease: "easeInOut",
          repeat: Infinity,
          delay: index * 0.45,
        }}
        className={`h-full min-h-[300px] rounded-2xl border p-5 shadow-lg ${
          filled
            ? "border-primary bg-primary text-white"
            : "border-primary/50 bg-white text-gray-700"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-300">
            {item.avatar && (
              <img
                src={item.avatar}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className={filled ? "text-white" : "text-primary"}>
            <p className="font-sans text-lg leading-tight">
              {item.name}
            </p>
            <p className="font-sans font-light text-[12px]">{item.role}</p>
          </div>
        </div>
        <p className="mt-6 font-sans text-[12px] leading-relaxed">
          {item.text}
        </p>
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="overflow-hidden bg-white">
      <Reveal direction="left" className="mx-auto max-w-7xl px-6 pt-8 font-sans">
        <p className="text-sm text-gray-800">Testimonials</p>
        <h2 className="mt-2 font-roman text-3xl font-light tracking-tight text-primary">
          Real Voices. Creative Journeys.
        </h2>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-gray-700">
          Hear It From Those Who Turned Their Creativity Into Beautiful
          Masterpieces! Discover How Our Texture Art Painting Workshop Inspired
          Creativity, Sparked Joy, And Created Unforgettable Artistic
          Experiences.
        </p>
      </Reveal>

      <Reveal direction="right" delay={0.15} className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {initialTestimonials.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Testimonials;
