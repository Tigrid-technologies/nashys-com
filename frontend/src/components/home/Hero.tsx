const ArrowButton = ({
  label,
  className,
  iconClassName,
}: {
  label: string;
  className: string;
  iconClassName: string;
}) => (
  <a
    href="#register"
    className={`inline-flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 font-montserrat text-xs font-medium hover:opacity-90 ${className}`}
  >
    {label}
    <span
      className={`flex h-5 w-5 items-center justify-center rounded-full border text-xs ${iconClassName}`}
    >
      ↗
    </span>
  </a>
);

const Hero = () => {
  return (
    <section className="bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-8 md:grid-cols-[1fr_1.1fr]">
        {/* Left: headline */}
        <div>
          <h1 className="font-cormorant text-5xl leading-[1.05] text-primary md:text-6xl">
            Crafted Textures.
            <br />
            Defining Spaces.
          </h1>
          <p className="mt-5 font-montserrat text-sm text-gray-700">
            More Than Just A Painting, It&apos;s The ART That Breaths,
          </p>
          <div className="mt-5">
            <ArrowButton
              label="Register Now"
              className="bg-primary text-white"
              iconClassName="border-white"
            />
          </div>
        </div>

        {/* Right: workshop card */}
        <div className="rounded-lg bg-primary p-5 text-white">
          <div className="grid gap-4 md:grid-cols-[1fr_1.1fr]">
            <div className="font-montserrat">
              <p className="text-xs leading-snug">
                Beginner Texture Art
                <br />
                Mini-Workshop
              </p>
              <h2 className="mt-4 font-cormorant text-xl leading-snug">
                Three Hours.
                <br />A Piece Of Your Own.
              </h2>
              <p className="mt-4 text-[10px] leading-relaxed">
                Make Time For A Little Creativity In Kochi. Learn Texture Art
                Basics And Two Design Techniques As You Create A Landscape
                Painting On A 12 ×16 Inch Canvas.
              </p>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg bg-black/40">
              {/* Showreel video/poster goes here once available */}
              <button
                type="button"
                className="absolute bottom-3 left-3 flex cursor-pointer items-center gap-2 rounded-full bg-white/30 px-3 py-1.5 font-montserrat text-[10px] text-white backdrop-blur-sm"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[7px]">
                  ▶
                </span>
                Watch Showreel
              </button>
            </div>
          </div>

          <hr className="my-5 border-white/40" />

          <h2 className="font-cormorant text-3xl">
            Texture Art Painting Online Workshop
          </h2>
          <p className="mt-3 font-montserrat text-[10px] leading-relaxed">
            Texture Art Painting Is A Beautiful And Expressive Art Form That
            Allows Us To Create Stunning Pieces Using Textures, Layers,
            Patterns, And Creativity — And Today, Learning
          </p>
          <p className="mt-3 font-montserrat text-[10px] leading-relaxed">
            Texture Art Painting Is A Beautiful And Expressive Art Form That
            Allows Us To Create Stunning Pieces Using Textures, Layers,
            Patterns, And Creativity — And Today, Learning It Online Is Easier
            And More Interactive Than Ever Before.
          </p>
          <div className="mt-5">
            <ArrowButton
              label="Register Now"
              className="bg-white text-primary"
              iconClassName="border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
