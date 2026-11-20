import { useState } from "react";
import { motion } from "motion/react";
import { FiFeather, FiPlus, FiX } from "react-icons/fi";
import RegisterButton from "../../common/RegisterButton";
import Reveal from "../../common/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

interface WorkshopItem {
  title: string;
  description: string;
}

// Descriptions for all items except the first are placeholder copy; edit freely.
const items: WorkshopItem[] = [
  {
    title: "From A Beginner To Expert",
    description:
      "Gain Hands-On Knowledge About Textures, Tools, Materials, Composition, Layering, And Finishing Techniques Used To Create Professional Looking Artwork.",
  },
  {
    title: "Insights That Are Real",
    description:
      "Learn directly from real studio experience. Get honest tips on what works, common beginner mistakes to avoid, and practical insights gathered from years of creating and teaching texture art.",
  },
  {
    title: "Bring The Creative In You!",
    description:
      "No prior experience needed. Guided step by step, you will discover your own creative voice and see your ideas take shape on canvas with confidence.",
  },
  {
    title: "Art That Redefines You",
    description:
      "Texture art is more than painting. It is a way to express emotions and stories, and to see yourself as an artist who can create something truly personal and meaningful.",
  },
  {
    title: "Be Your Own Brand",
    description:
      "Understand how handmade art and décor can become a creative path of your own. Build skills, confidence and the foundation to turn your passion into something independent.",
  },
  {
    title: "Art A Form Of Mindfulness",
    description:
      "Slow down and unwind. Working with textures, colours and layers is a calming, hands-on experience that helps you relax, focus and enjoy the present moment.",
  },
];

const Workshop = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="workshop"
      className="relative scroll-mt-20 overflow-hidden bg-secondary"
    >
      {/* Subtle drifting ambient glows */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 26, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-tertiary/35 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2">
        <Reveal direction="left" className="font-sans">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/75">
            <FiFeather className="text-sm text-primary" />
            The Workshop Experience
          </p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.14 } },
            }}
            className="mt-3 font-roman text-4xl font-light leading-tight tracking-tight text-primary md:text-5xl"
          >
            <span className="block overflow-hidden pb-0.5">
              <motion.span
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.7, ease },
                  },
                }}
                className="block"
              >
                Explore Art. Experience
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-0.5">
              <motion.span
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.7, ease },
                  },
                }}
                className="block"
              >
                Creativity. Create Memories.
              </motion.span>
            </span>
          </motion.h2>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-4 block h-0.5 w-16 origin-left bg-primary/50"
          />

          <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-gray-700">
            Discover The Beauty Of Texture Art And Bring Your Imagination To
            Life With Every Brushstroke. Explore Creative Techniques, Experiment
            With Colours, And Create Stunning 3D Textured Masterpieces. Enjoy A
            Hands-On Painting Experience Guided By Creativity And Inspiration.
            Whether You&apos;re A Beginner Or An Art Enthusiast, There&apos;s
            Something Exciting Waiting For You. Unleash Your Creativity, Create
            Something Unique, And Take Home Memories To Cherish Forever!
          </p>
          <p className="mt-5 text-sm font-semibold text-primary/85">
            Register Now &amp; Be Part Of The Creative Experience!
          </p>
          <div className="mt-6 hidden md:block">
            <RegisterButton variant="primary" />
          </div>
        </Reveal>

        <ul className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.07, ease }}
                whileHover={{ x: isOpen ? 0 : 4 }}
                className={`rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary bg-gradient-to-br from-primary to-[#4a0b0b] text-secondary shadow-xl shadow-primary/25"
                    : "border-primary/25 bg-white/55 text-primary backdrop-blur-xs hover:border-primary/60 hover:bg-white/85"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-3.5 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`font-sans text-[11px] font-semibold tracking-widest ${
                        isOpen ? "text-secondary/75" : "text-primary/45"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className="font-roman text-lg md:text-xl">
                      {item.title}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm transition-all duration-500 ${
                      isOpen
                        ? "rotate-180 bg-white text-primary"
                        : "bg-primary text-white"
                    }`}
                  >
                    {isOpen ? <FiX /> : <FiPlus />}
                  </span>
                </button>
                {/* Grid-rows trick animates height smoothly (0fr -> 1fr) */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 pl-12 font-sans text-[13px] leading-relaxed text-white/85">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <div className="flex justify-center pt-1 md:hidden">
          <RegisterButton variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default Workshop;
