import { motion } from "motion/react";
import {
  FiAward,
  FiCompass,
  FiFeather,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiSmile,
} from "react-icons/fi";
import aboutImage from "../../assets/about-image.png";
import sealImage from "../../assets/seal.png";
import CountUp from "../../common/CountUp";
import Reveal from "../../common/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const introParagraphs = [
  "Texture Art Painting is a creative art form that uses layers, textures, patterns, and different materials to transform simple surfaces into beautiful, expressive artworks.",
  "In this online workshop, you'll learn how to create your own texture art through guided lessons, practical demonstrations, and easy-to-follow techniques, all from the comfort of your home.",
];

const reasons = [
  {
    title: "Beginner-Friendly Learning",
    description:
      "No prior painting experience is required. Start from the basics and learn at your own pace.",
    Icon: FiSmile,
  },
  {
    title: "Step-by-Step Guidance",
    description:
      "Follow detailed demonstrations to understand every stage of creating your artwork.",
    Icon: FiCompass,
  },
  {
    title: "Learn Materials & Techniques",
    description:
      "Discover the right tools, materials, textures, and methods used in texture painting.",
    Icon: FiLayers,
  },
  {
    title: "Learn from Experience",
    description:
      "Benefit from practical knowledge and creative techniques developed through years of artistic exploration.",
    Icon: FiAward,
  },
  {
    title: "Create Your Own Artwork",
    description:
      "Turn your imagination into beautiful handmade pieces that reflect your creativity.",
    Icon: FiFeather,
  },
  {
    title: "Learn from Anywhere",
    description:
      "Enjoy flexible online learning with guided instruction from the comfort of your home.",
    Icon: FiGlobe,
  },
  {
    title: "A Peaceful Escape from Daily Life",
    description:
      "Take a break from your busy routine, slow down, relax, and enjoy the calming experience of creating art.",
    Icon: FiHeart,
  },
];

const stats = [
  { value: 10, suffix: "", label: "Awards & Achievements" },
  { value: 25, suffix: "+", label: "Total Workshops" },
  { value: 50, suffix: "+", label: "Happy Clients" },
];

const About = () => {
  return (
    <section id="about" className="overflow-hidden bg-white">
      {/* Top: Image + What is Texture Art Painting */}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2">
        <Reveal direction="left">
          <h2 className="font-roman text-4xl font-light tracking-tight text-primary md:text-5xl">
            Learn Art Like Never Before!
          </h2>
          <div className="relative mt-6">
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-primary/15">
              <img
                src={aboutImage}
                alt="Texture art painting with a palette knife"
                className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[350px]"
              />
            </div>

            {/* Wax seal: stamp-in entrance + gentle floating rock */}
            <motion.div
              initial={{ opacity: 0, scale: 1.3, rotate: -14 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: 0.25, ease }}
              className="absolute left-0 top-28 w-[36%] -translate-y-1/2 sm:top-32 sm:w-[40%]"
            >
              <motion.img
                src={sealImage}
                alt="Nashys & Co. seal"
                animate={{ y: [0, -7, 0], rotate: [-3, 3, -3] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.07, rotate: 6 }}
                className="w-full cursor-pointer drop-shadow-xl"
              />
            </motion.div>
          </div>
        </Reveal>

        {/* Mobile Stats */}
        <Reveal
          direction="up"
          delay={0.1}
          className="mx-auto w-full md:hidden"
        >
          <ul className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.li
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                whileHover={{ y: -4 }}
                className={`py-2 pl-3 sm:pl-6 ${
                  i > 0 ? "border-l border-gray-300" : ""
                }`}
              >
                <p className="flex items-center font-roman text-4xl leading-none text-primary sm:text-5xl">
                  <CountUp value={s.value} />
                  {s.suffix && (
                    <span className="ml-1 text-2xl font-medium sm:text-3xl">
                      {s.suffix}
                    </span>
                  )}
                </p>
                <p className="mt-3 max-w-[6rem] font-sans text-xs leading-snug text-gray-600 sm:mt-4">
                  {s.label}
                </p>
              </motion.li>
            ))}
          </ul>
        </Reveal>

        {/* Right: What is Texture Art Painting? */}
        <Reveal direction="right" delay={0.15} className="md:pl-6">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-primary/70">
            About
          </p>
          <h3 className="mt-2 font-roman text-3xl text-primary md:text-4xl">
            What is Texture Art Painting?
          </h3>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-3 block h-0.5 w-14 origin-left bg-primary/50"
          />

          <div className="mt-5 space-y-4 font-sans text-[15px] leading-relaxed text-gray-700">
            {introParagraphs.map((p, i) => (
              <motion.p
                key={p}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.12 * i, ease }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Why Join This Workshop? */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-2">
        <Reveal direction="left">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-primary/70">
            Workshop Benefits
          </p>
          <h3 className="mt-2 font-roman text-3xl font-light tracking-tight text-primary md:text-4xl">
            Why Join This Workshop?
          </h3>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-3 block h-0.5 w-16 origin-left bg-primary/50"
          />
        </Reveal>

        <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, Icon }, i) => {
            const isFeatured = i === reasons.length - 1;
            return (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.06, ease }}
                whileHover={{ y: -4 }}
                className={`group rounded-2xl border p-5 transition-all duration-300 ${
                  isFeatured
                    ? "border-primary/20 bg-gradient-to-r from-secondary/75 via-secondary/50 to-secondary/75 shadow-sm hover:shadow-lg sm:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:gap-5"
                    : "border-primary/15 bg-secondary/25 shadow-xs hover:border-primary/40 hover:bg-secondary/45 hover:shadow-lg hover:shadow-primary/10"
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-lg text-secondary shadow-sm shadow-primary/25 transition-transform duration-300 group-hover:scale-105">
                  <Icon />
                </span>
                <div className={isFeatured ? "mt-3 lg:mt-0" : "mt-4"}>
                  <h4 className="font-roman text-xl text-primary">{title}</h4>
                  <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-gray-700">
                    {description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* Desktop Stats */}
      <Reveal
        direction="up"
        delay={0.1}
        className="mx-auto hidden max-w-7xl px-6 pb-12 md:block"
      >
        <ul className="grid grid-cols-3">
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              whileHover={{ y: -4 }}
              className={`py-2 pl-3 sm:pl-6 md:pl-12 ${
                i > 0 ? "border-l border-gray-300" : ""
              }`}
            >
              <p className="flex items-center font-roman text-4xl leading-none text-primary sm:text-5xl md:text-8xl">
                <CountUp value={s.value} />
                {s.suffix && (
                  <span className="ml-1 text-2xl font-medium sm:text-3xl md:text-5xl">
                    {s.suffix}
                  </span>
                )}
              </p>
              <p className="mt-3 max-w-[6rem] font-sans text-xs leading-snug text-gray-600 sm:mt-4 md:text-[14px]">
                {s.label}
              </p>
            </motion.li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
};

export default About;
