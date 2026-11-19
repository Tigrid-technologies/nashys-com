import onlineImage from "../../assets/online-image.png";

const Online = () => {
  return (
    <section id="online" className="bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:grid-cols-2">
        <div className="font-montserrat">
          <p className="text-sm text-gray-800">Real Stories. Real Learning.</p>
          <h2 className="mt-5 font-cormorant text-4xl leading-tight text-primary md:text-5xl">
            Get A Feel For Our
            <br />
            Online Experience
          </h2>
          <p className="mt-5 max-w-sm text-[11px] leading-relaxed text-gray-700">
            Texture Art Painting Is A Beautiful And Expressive Art Form That
            Allows Us To Create Stunning Pieces Using Textures, Layers,
            Patterns, And Creativity — And Today, Learning
          </p>
          <a
            href="#register"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary py-2 pl-5 pr-2 text-xs font-medium text-white hover:opacity-90"
          >
            Register Now
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white text-sm">
              ↗
            </span>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={onlineImage}
            alt="Students at an online texture art workshop"
            className="w-full object-cover"
          />
          <button
            type="button"
            className="absolute bottom-3 left-3 flex cursor-pointer items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-[10px] text-white backdrop-blur-sm"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[7px]">
              ▶
            </span>
            Watch Showreel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Online;
