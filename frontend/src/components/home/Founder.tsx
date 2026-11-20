import { motion } from "motion/react";
import founderBg from "../../assets/founder-bg.png";
import founderImage from "../../assets/founder.png";
import Reveal from "../../common/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const paragraphs = [
  "Over The Years, I Have Explored And Immersed Myself In Different Forms Of Creativity — From Paintings And Handmade Décor To Various Artistic And Design Works That Helped Me Discover And Refine My Own Style, Ideas, And Craft. Every Experience Taught Me Something Valuable, Shaping The Artist And Person I Am Today. What Made Me Truly Fall In Love With Texture Art Painting Is The Freedom It Gives Me To Bring Together All These Creative Experiences Onto A Single Canvas. Through Textures, Layers, Colors, And Forms, I Am Able To Express Emotions, Stories, And Ideas In A Way That Feels Deeply Personal And Meaningful.",
  "I Founded NashysHomeDecor Not Only To Create Art That I Am Passionate About, But Also To Share My Vision And Stories With The World Through Every Piece I Make. More Importantly, This Journey Gave Me Something Beyond Creativity — It Gave Me Confidence, Purpose, And Independence. What Started As A Passion Slowly Became A Path That Transformed My Everyday Life, Allowing Me To Build Something Of My Own Through Art.",
  "Today, Through Our Offline Workshops, My Goal Is To Help Other Women Discover That Same Possibility Within Themselves. I Want To Create A Space Where Women Can Explore Their Creativity, Learn Valuable Artistic Skills, Gain Confidence In Their Talents, And Potentially Build An Independent Creative Journey Of Their Own.",
];

const pillars = ["Creativity", "Confidence", "Purpose", "Independence"];

const Founder = () => {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-primary bg-cover bg-left text-white"
      style={{ backgroundImage: `url(${founderBg})` }}
    >
      {/* Subtle dark vignette for crisp text readability */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/30"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.85fr)]">
        {/* Left: framed portrait */}
        <Reveal direction="left" className="relative mx-auto w-full max-w-sm md:max-w-none">
          {/* Decorative offset frame */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, x: -12, y: -12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="pointer-events-none absolute -bottom-3 -left-3 right-3 top-3 rounded-3xl border border-secondary/35"
          />

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.35, ease }}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/40 ring-1 ring-white/20"
          >
            <img
              src={founderImage}
              alt="Nasheeda K T, founder"
              className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 right-3 rounded-full bg-white px-5 py-1.5 font-sans text-xs font-semibold tracking-wide text-primary shadow-lg shadow-black/25"
            >
              Nasheeda K T
            </motion.span>
          </motion.div>
        </Reveal>

        {/* Right: editorial story */}
        <Reveal direction="right" delay={0.15}>
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-secondary/80">
            The Artist
          </p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.14 } },
            }}
            className="mt-2 font-roman text-4xl font-light leading-tight tracking-tight md:text-5xl"
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
                Meet The Founder
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
                Behind The Art.
              </motion.span>
            </span>
          </motion.h2>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-4 block h-0.5 w-16 origin-left bg-secondary/70"
          />

          <div className="mt-6 space-y-4 text-justify font-sans text-[14px] leading-relaxed text-white/90">
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

          {/* Core pillars */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {pillars.map((pillar, i) => (
              <motion.li
                key={pillar}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.08, ease }}
                whileHover={{ y: -2 }}
                className="rounded-full border border-secondary/35 bg-white/10 px-4 py-1.5 font-sans text-xs font-medium tracking-wide text-secondary backdrop-blur-xs"
              >
                {pillar}
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Founder;
