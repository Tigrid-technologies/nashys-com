import { FaPlay } from "react-icons/fa6";
import RegisterButton from "../../common/RegisterButton";

const ShowreelButton = () => (
  <button
    type="button"
    className="absolute bottom-3 left-3 flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/20 py-1.5 pl-2 pr-4 font-sans text-[10px] text-white backdrop-blur-md transition hover:bg-white/30"
  >
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[8px]">
      <FaPlay className="ml-px" />
    </span>
    Watch Showreel
  </button>
);

const Hero = () => {
  return (
    <section className="bg-secondary h-screen">
      <div className="mx-auto grid max-w-7xl items-start gap-6 px-6 py-12 md:grid-cols-[1fr_1.2fr]">
        {/* Left: headline */}
        <div className="mt-10">
          <h1 className="font-roman text-5xl font-light leading-[1.05] tracking-tight text-primary md:text-7xl">
            Crafted Textures.
            <br />
            Defining Spaces.
          </h1>
          <p className="mt-5 font-sans text-sm tracking-wide text-gray-700">
            More Than Just A Painting, It&apos;s The ART That Breaths,
          </p>
          <div className="mt-7">
            <RegisterButton variant="primary" />
          </div>
        </div>

        {/* Right: workshop card */}
        <div className="rounded-2xl bg-gradient-to-br from-primary via-primary to-[#4a0b0b] p-6 text-white shadow-2xl shadow-primary/30 ring-1 ring-white/10">
          <div className="grid gap-5 md:grid-cols-[1fr_1.6fr]">
            <div className="font-sans">
              <p className="text-[11px] uppercase leading-snug tracking-[0.18em] text-white/70">
                Beginner Texture Art
                <br />
                Mini-Workshop
              </p>
              <h2 className="mt-4 font-roman text-2xl font-light leading-snug">
                Three Hours.
                <br />A Piece Of Your Own.
              </h2>
              <p className="mt-4 text-[11px] leading-relaxed text-white/85">
                Make Time For A Little Creativity In Kochi. Learn Texture Art
                Basics And Two Design Techniques As You Create A Landscape
                Painting On A 12 ×16 Inch Canvas.
              </p>
            </div>

            <div className="relative min-h-[230px] w-full aspect-video overflow-hidden rounded-xl bg-black/40 shadow-lg ring-1 ring-white/10">
              {/* Showreel video/poster goes here once available */}
              <ShowreelButton />
            </div>
          </div>

          <hr className="my-6 border-white/25" />

          <h2 className="font-roman text-4xl font-light tracking-tight">
            Texture Art Painting Online Workshop
          </h2>
          <p className="mt-3 font-sans text-[12px] leading-relaxed text-white/85">
            Texture Art Painting Is A Beautiful And Expressive Art Form That
            Allows Us To Create Stunning Pieces Using Textures, Layers,
            Patterns, And Creativity — And Today, Learning
          </p>
          <p className="mt-3 font-sans text-[12px] leading-relaxed text-white/85">
            Texture Art Painting Is A Beautiful And Expressive Art Form That
            Allows Us To Create Stunning Pieces Using Textures, Layers,
            Patterns, And Creativity — And Today, Learning It Online Is Easier
            And More Interactive Than Ever Before.
          </p>
          <div className="mt-6">
            <RegisterButton variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
