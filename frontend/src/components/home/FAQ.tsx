import { useState } from "react";
import { motion } from "motion/react";
import { FiHelpCircle, FiMapPin, FiMinus, FiPlus } from "react-icons/fi";
import faqImage from "../../assets/faq-card.jpg";
import RegisterButton from "../../common/RegisterButton";
import Reveal from "../../common/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

interface FaqItem {
  question: string;
  answer: string;
}

// Answers for all items except the first are placeholder copy; edit freely.
const faqs: FaqItem[] = [
  {
    question: "What Is A Texture Art Painting Workshop ?",
    answer:
      "A Texture Art Painting Workshop Teaches You How To Create Beautiful 3D Effects And Textured Surfaces Using Different Painting Techniques And Materials.",
  },
  {
    question: "Do I Need Any Prior Painting Experience ?",
    answer:
      "Not at all. The workshop is designed for complete beginners as well as art enthusiasts, and every step is guided so you can follow along comfortably.",
  },
  {
    question: "What Materials Will Be Provided During The Workshop ?",
    answer:
      "All the essentials, including canvas, paints, palette knives and texture materials, are provided so you can simply arrive and start creating.",
  },
  {
    question: "Will I Be Able To Take My Artwork Home ?",
    answer:
      "Yes. The piece you create during the workshop is yours to take home and cherish once it has been finished.",
  },
  {
    question: "What Skills Will I Learn In This Workshop ?",
    answer:
      "You will learn texture art basics, layering and colour techniques, tool handling and composition, along with the confidence to continue creating on your own.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr]">
        {/* Left: FAQ accordion */}
        <Reveal direction="left" className="font-sans">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/70">
            <FiHelpCircle className="text-sm text-primary" />
            FAQ
          </p>
          <h2 className="mt-2 font-roman text-3xl font-light tracking-tight text-primary md:text-4xl">
            Everything Made Clear
          </h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-3 block h-0.5 w-16 origin-left bg-primary/50"
          />
          <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-gray-700">
            Find Quick, Clear Answers To Your Most Common Questions. Explore
            Helpful Information About Our Services, Process, And Everything You
            Need To Know—All In One Place.
          </p>

          <ul className="mt-7 divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.li
                  key={faq.question}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease }}
                  className={`transition-colors duration-300 ${
                    isOpen ? "bg-secondary/35 px-4" : "px-1 hover:bg-secondary/15"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left"
                  >
                    <span className="flex items-baseline gap-3">
                      <span
                        className={`font-sans text-[11px] font-semibold tracking-widest ${
                          isOpen ? "text-primary" : "text-primary/45"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`font-roman text-lg transition-colors sm:text-xl ${
                          isOpen ? "text-primary" : "text-gray-800"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary text-sm transition-all duration-500 ${
                        isOpen
                          ? "rotate-180 bg-primary text-white shadow-sm shadow-primary/30"
                          : "text-primary hover:bg-primary/10"
                      }`}
                    >
                      {isOpen ? <FiMinus /> : <FiPlus />}
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
                      <p className="pb-4 pl-7 text-[14px] leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </Reveal>

        {/* Right: offline studio card */}
        <Reveal direction="right" delay={0.15} className="h-full">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease }}
            className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-[#4a0b0b] p-5 text-white shadow-2xl shadow-primary/25 ring-1 ring-white/10"
          >
            {/* Subtle highlight glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl"
            />

            <div className="relative h-56 w-full overflow-hidden rounded-3xl shadow-lg ring-1 ring-white/15 sm:h-64 md:flex-1 md:min-h-[260px]">
              <motion.img
                src={faqImage}
                alt="Texture art close-up"
                animate={{ scale: [1, 1.07, 1] }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full object-cover"
              />
              {/* <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/35 px-3 py-1 font-sans text-[10px] font-medium tracking-wide text-white backdrop-blur-md"
              >
                <FiMapPin className="text-xs text-tertiary" />
                Offline Studio • Kochi
              </motion.div> */}
            </div>

            <div className="relative mt-5">
              <h3 className="font-roman text-2xl font-light md:text-3xl">
                A Glimpse Into Our Offline World
              </h3>
              <p className="mt-3 font-sans text-[14px] leading-relaxed text-white/85">
                Step Inside Our Creative Space, Where Hands-On Experiences,
                Meaningful Connections, And Unforgettable Moments Bring Learning
                To Life.
              </p>
              <div className="mt-6">
                <RegisterButton variant="cream" />
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
