import { motion } from "motion/react";
import aboutImage from "../../assets/about-image.png";
import sealImage from "../../assets/seal.png";
import CountUp from "../../common/CountUp";
import Reveal from "../../common/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const paragraphs = [
  "Texture Art Painting Is A Beautiful And Expressive Art Form That Allows Us To Create Stunning Pieces Using Textures, Layers, Patterns, And Creativity — And Today, Learning It Online Is Easier And More Interactive Than Ever Before.",
  "Through My Carefully Guided Online Workshop, I Will Help You Learn Techniques, Understand Materials, Follow Step-By-Step Demonstrations, And Create Your Own Artwork From The Comfort Of Your Home. With Modern Technology, Live Guidance, And Detailed Instruction, Creativity Can Now Be Learned And Shared Beyond One’s Reach.",
  "Over The Years, I Have Explored Different Creative Works, Paintings, And Handmade Décor, And These Experiences Have Helped Me Develop Teaching Methods That Make Learning Simple, Practical, And Easy To Grasp — Even For Complete Beginners.",
  "Whether You Are Someone Completely New To Art Or Simply Looking To Explore A New Creative Skill, This Workshop Is Designed To Make Your Learning Journey Exciting, Inspiring, And Enjoyable. Sometimes, Trying Something New Is All It Takes To Discover A Passion You Never Knew You Had.",
];

const stats = [
  { value: 10, suffix: "", label: "Awards & Achievements" },
  { value: 25, suffix: "+", label: "Total Workshops" },
  { value: 50, suffix: "+", label: "Happy Clients" },
];

const About = () => {
  return (
    <section id="about" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-12 md:grid-cols-2">
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

        <Reveal direction="right" delay={0.15} className="md:pl-6">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-primary/70">
            About
          </p>
          <h3 className="mt-2 font-roman text-3xl text-primary">
            Welcome To Our Workshop
          </h3>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-3 block h-0.5 w-14 origin-left bg-primary/50"
          />
          <div className="mt-5 space-y-4 text-justify font-sans text-[14px] leading-relaxed text-gray-700">
            {paragraphs.map((p, i) => (
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

      {/* Stats */}
      <Reveal direction="up" delay={0.1} className="mx-auto max-w-7xl px-6 pb-12">
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
