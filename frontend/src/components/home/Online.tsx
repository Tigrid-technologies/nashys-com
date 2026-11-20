import { motion } from "motion/react";
import { FaPlay, FaRegHandshake } from "react-icons/fa6";
import { FiUsers, FiLayers } from "react-icons/fi";
import onlineImage from "../../assets/online-image.png";
import RegisterButton from "../../common/RegisterButton";
import Reveal from "../../common/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  { label: "Lifetime Community Access", Icon: FaRegHandshake },
  { label: "Interactive Q&A", Icon: FiUsers },
  { label: "Beginner Friendly", Icon: FiLayers },
];

const Online = () => {
  return (
    <section id="online" className="relative overflow-hidden bg-secondary">
      {/* Subtle drifting ambient highlight */}
      <motion.div
        aria-hidden
        animate={{ x: [0, -24, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-tertiary/35 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2">
        <Reveal direction="left" className="font-sans">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/75">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Real Stories. Real Learning.
          </p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.14 } },
            }}
            className="mt-4 font-roman text-4xl font-light leading-tight tracking-tight text-primary md:text-5xl"
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
                Get A Feel For Our
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
                Online Experience
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

          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-gray-700">
            Texture Art Painting Is A Beautiful And Expressive Art Form That
            Allows Us To Create Stunning Pieces Using Textures, Layers,
            Patterns, And Creativity — And Today, Learning It Online Is Easier
            And More Interactive Than Ever Before.
          </p>

          {/* Highlight pills */}
          <ul className="mt-5 flex flex-wrap gap-2">
            {highlights.map(({ label, Icon }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.1, ease }}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white/75 px-3.5 py-1.5 text-xs font-medium text-primary shadow-sm backdrop-blur-xs"
              >
                <Icon className="text-sm" />
                {label}
              </motion.li>
            ))}
          </ul>

          <div className="mt-7 hidden md:block">
            <RegisterButton variant="primary" />
          </div>
        </Reveal>

        <Reveal
          direction="right"
          delay={0.15}
          className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/20 ring-1 ring-primary/10"
        >
          {/* Slow Ken Burns zoom */}
          <motion.img
            src={onlineImage}
            alt="Students at an online texture art workshop"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="w-full object-cover"
          />

          {/* Soft bottom gradient for button legibility */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent"
          />

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/35 px-3 py-1 font-sans text-[10px] font-medium tracking-wide text-white backdrop-blur-md"
          >
            Interactive Online Sessions
          </motion.div>

          {/* Showreel button with pulsing play ring */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="absolute bottom-3 left-3 flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/20 py-1.5 pl-2 pr-4 text-[11px] font-medium text-white backdrop-blur-md transition hover:bg-white/30"
          >
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[8px]">
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
        </Reveal>

        <div className="flex justify-center pt-1 md:hidden">
          <RegisterButton variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default Online;
